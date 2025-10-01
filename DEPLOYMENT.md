# 🚀 배포 가이드

이 문서는 포트폴리오 프로젝트의 배포 방법을 설명합니다.

## 📋 배포 옵션

이 프로젝트는 다음 플랫폼들에 배포할 수 있습니다:

1. **GitHub Pages** (무료, GitHub Actions 사용)
2. **Vercel** (무료, 자동 배포)
3. **Netlify** (무료, 자동 배포)

## 🔧 GitHub Pages 배포

### 1. GitHub Pages 설정

**방법 1: gh-pages 브랜치 사용 (추천)**
1. GitHub 저장소의 **Settings** → **Pages**로 이동
2. **Source**를 "Deploy from a branch"로 설정
3. **Branch**를 "gh-pages"로 설정
4. `main` 브랜치에 코드를 push하면 자동으로 `gh-pages` 브랜치에 배포됩니다

**방법 2: GitHub Actions 사용**
1. GitHub 저장소의 **Settings** → **Pages**로 이동
2. **Source**를 "GitHub Actions"로 설정
3. `main` 브랜치에 코드를 push하면 자동으로 배포됩니다

### 2. 필요한 권한 설정

- 저장소의 **Settings** → **Actions** → **General**에서
- **Workflow permissions**을 "Read and write permissions"로 설정
- **Allow GitHub Actions to create and approve pull requests** 체크

### 3. 배포 워크플로우

현재 배포 워크플로우 상태:

- **`deploy-gh-pages.yml`** (활성화, 추천): gh-pages 브랜치를 사용한 안정적인 배포
- **`deploy-basic.yml`** (비활성화): GitHub Actions Pages 배포 (아티팩트 문제로 비활성화)
- **`deploy-pages-simple.yml`** (비활성화): 이전 버전
- **`deploy.yml`** (비활성화): 복잡한 배포 (문제 발생 시 비활성화됨)
- **`deploy-vercel.yml`** (비활성화): Vercel 배포 (필요시 수동 활성화)
- **`deploy-netlify.yml`** (비활성화): Netlify 배포 (필요시 수동 활성화)

### 4. 문제 해결

**아티팩트 배포 오류 해결:**
- GitHub Actions Pages 배포에서 아티팩트 오류가 발생하는 경우
- `deploy-gh-pages.yml` 워크플로우를 사용하여 gh-pages 브랜치 방식으로 배포
- 이 방식은 아티팩트를 사용하지 않고 직접 브랜치에 배포하므로 더 안정적입니다

**일반적인 문제 해결:**
1. **권한 오류**: GitHub Pages 권한이 올바르게 설정되었는지 확인하세요
2. **워크플로우 오류**: Actions 탭에서 로그를 확인하고 오류 메시지를 확인하세요
3. **브랜치 설정**: gh-pages 브랜치가 자동으로 생성되는지 확인하세요

## 🌐 Vercel 배포

### 1. Vercel 계정 생성 및 프로젝트 연결

1. [Vercel](https://vercel.com)에서 계정 생성
2. GitHub 저장소를 import
3. 프로젝트 설정에서 **Build Command**: `npm run build`
4. **Output Directory**: `dist`

### 2. GitHub Actions와 연동 (선택사항)

GitHub Actions를 통해 Vercel에 배포하려면 다음 시크릿을 설정하세요:

- `VERCEL_TOKEN`: Vercel 계정 설정에서 생성
- `ORG_ID`: Vercel 프로젝트 설정에서 확인
- `PROJECT_ID`: Vercel 프로젝트 설정에서 확인

## 🎯 Netlify 배포

### 1. Netlify 계정 생성 및 프로젝트 연결

1. [Netlify](https://netlify.com)에서 계정 생성
2. GitHub 저장소를 연결
3. **Build command**: `npm run build`
4. **Publish directory**: `dist`

### 2. GitHub Actions와 연동 (선택사항)

GitHub Actions를 통해 Netlify에 배포하려면 다음 시크릿을 설정하세요:

- `NETLIFY_AUTH_TOKEN`: Netlify 계정 설정에서 생성
- `NETLIFY_SITE_ID`: Netlify 사이트 설정에서 확인

## 🔐 GitHub Secrets 설정

GitHub 저장소의 **Settings** → **Secrets and variables** → **Actions**에서 다음 시크릿들을 설정하세요:

### Vercel 배포용
```
VERCEL_TOKEN=your_vercel_token
ORG_ID=your_org_id
PROJECT_ID=your_project_id
```

### Netlify 배포용
```
NETLIFY_AUTH_TOKEN=your_netlify_token
NETLIFY_SITE_ID=your_site_id
```

## 🛠️ 로컬 배포 테스트

배포 전에 로컬에서 빌드를 테스트할 수 있습니다:

```bash
# 배포 스크립트 실행
./scripts/deploy.sh

# 또는 수동으로
npm ci
npm run lint
npm run build
npm run preview  # 빌드 결과 미리보기
```

## 📝 환경 변수 설정

프로덕션 환경에서 사용할 환경 변수가 있다면:

1. `env.example` 파일을 참고하여 `.env` 파일 생성
2. 배포 플랫폼에서 환경 변수 설정
3. GitHub Actions의 경우 저장소 시크릿으로 설정

## 🔄 자동 배포

- **main** 브랜치에 push할 때마다 자동으로 배포됩니다
- Pull Request가 merge될 때도 배포됩니다
- 배포 상태는 GitHub Actions 탭에서 확인할 수 있습니다

## 🐛 문제 해결

### 빌드 실패 시
1. 로컬에서 `npm run build` 실행하여 오류 확인
2. 의존성 문제인 경우 `npm ci`로 재설치
3. TypeScript 오류인 경우 타입 정의 확인

### 배포 실패 시
1. GitHub Actions 로그 확인
2. 시크릿 설정이 올바른지 확인
3. 플랫폼별 설정 확인

## 📞 지원

배포 관련 문제가 있으면 GitHub Issues에 문의해주세요.
