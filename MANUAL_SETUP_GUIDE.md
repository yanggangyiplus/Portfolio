# 🚨 GitHub Pages 수동 설정 가이드

**중요**: 이 설정은 GitHub 웹사이트에서 직접 해야 합니다. 코드로는 설정할 수 없습니다.

## 📋 정확한 설정 단계

### 1단계: GitHub 저장소로 이동

1. 웹 브라우저에서 GitHub.com에 로그인
2. 포트폴리오 저장소로 이동: `https://github.com/[당신의사용자명]/[저장소명]`

### 2단계: Settings 탭 클릭

1. 저장소 페이지 상단의 탭들 중 **"Settings"** 클릭
2. (Code, Issues, Pull requests, Actions, Projects, Wiki, Security, Insights, **Settings**)

### 3단계: Pages 섹션 찾기

1. 왼쪽 사이드바에서 **"Pages"** 클릭
2. 또는 페이지에서 Ctrl+F (Windows) 또는 Cmd+F (Mac)로 "Pages" 검색

### 4단계: Source 설정

**현재 상태**: "None" 또는 "Source" 드롭다운이 비어있음

**설정 방법**:
1. **"Source"** 드롭다운 클릭
2. **"Deploy from a branch"** 선택
3. **"Branch"** 드롭다운에서 **"gh-pages"** 선택
4. **"Folder"**는 **"/ (root)"** 선택 (기본값)
5. **"Save"** 버튼 클릭

### 5단계: Actions 권한 설정

1. 왼쪽 사이드바에서 **"Actions"** → **"General"** 클릭
2. **"Workflow permissions"** 섹션에서:
   - **"Read and write permissions"** 선택
   - **"Allow GitHub Actions to create and approve pull requests"** 체크
3. **"Save"** 버튼 클릭

### 6단계: 워크플로우 실행

1. **"Actions"** 탭 클릭
2. **"Deploy to GitHub Pages (gh-pages branch)"** 워크플로우가 보이는지 확인
3. 만약 보이지 않으면 main 브랜치에 코드를 push:
   ```bash
   git add .
   git commit -m "Trigger GitHub Pages deployment"
   git push origin main
   ```

### 7단계: 배포 확인

1. **"Actions"** 탭에서 워크플로우 실행 상태 확인
2. 성공하면 **"gh-pages"** 브랜치가 자동 생성됨
3. **"Settings"** → **"Pages"**에서 배포 상태 확인

## 🔍 문제 해결

### "gh-pages" 브랜치가 보이지 않는 경우

**원인**: 워크플로우가 아직 실행되지 않음

**해결책**:
1. main 브랜치에 코드 push
2. Actions 탭에서 워크플로우 실행 확인
3. 워크플로우가 성공하면 gh-pages 브랜치 생성됨

### 워크플로우가 실행되지 않는 경우

**원인**: 워크플로우 파일이 없거나 오류

**해결책**:
1. `.github/workflows/deploy-gh-pages.yml` 파일이 있는지 확인
2. 파일이 없다면 다시 push:
   ```bash
   git add .github/workflows/deploy-gh-pages.yml
   git commit -m "Add GitHub Pages workflow"
   git push origin main
   ```

### 권한 오류가 발생하는 경우

**원인**: Actions 권한이 올바르게 설정되지 않음

**해결책**:
1. Settings → Actions → General에서 권한 재설정
2. "Read and write permissions" 선택
3. "Allow GitHub Actions to create and approve pull requests" 체크

## 📱 설정 완료 후

### 사이트 URL 확인

설정이 완료되면 다음 URL로 접속 가능:
- `https://[사용자명].github.io/[저장소명]/`

### 배포 시간

- 첫 배포: 5-10분 소요
- 이후 배포: 1-2분 소요

### 배포 상태 확인

- Settings → Pages에서 "Your site is published at..." 메시지 확인
- 녹색 체크마크가 표시되면 배포 완료

## 🆘 여전히 문제가 있는 경우

1. **GitHub Actions 로그 확인**
   - Actions 탭에서 워크플로우 클릭
   - 빨간색 X가 있는 단계 클릭하여 오류 메시지 확인

2. **저장소 권한 확인**
   - 저장소가 Public인지 확인
   - Private 저장소는 GitHub Pro가 필요

3. **브라우저 캐시 클리어**
   - Ctrl+F5 (Windows) 또는 Cmd+Shift+R (Mac)

## ✅ 체크리스트

설정이 완료되었는지 확인:

- [ ] Settings → Pages에서 Source가 "Deploy from a branch"로 설정됨
- [ ] Branch가 "gh-pages"로 설정됨
- [ ] Actions 권한이 "Read and write permissions"로 설정됨
- [ ] 워크플로우가 성공적으로 실행됨
- [ ] gh-pages 브랜치가 생성됨
- [ ] 사이트 URL로 정상 접속 가능

**모든 체크리스트가 완료되면 GitHub Pages가 정상 작동합니다!**
