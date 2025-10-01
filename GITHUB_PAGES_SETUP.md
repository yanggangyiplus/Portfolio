# 🚀 GitHub Pages 설정 가이드

GitHub Pages 사이트가 설정되지 않았다는 오류가 발생한 경우, 다음 단계를 따라 설정하세요.

## 📋 설정 단계

### 1. GitHub 저장소 설정 확인

1. **GitHub 저장소로 이동**
   - https://github.com/[사용자명]/[저장소명] 으로 이동

2. **Settings 탭 클릭**
   - 저장소 상단의 "Settings" 탭 클릭

3. **Pages 섹션 찾기**
   - 왼쪽 사이드바에서 "Pages" 클릭
   - 또는 Settings 페이지에서 "Pages" 검색

### 2. GitHub Pages 소스 설정

**방법 1: gh-pages 브랜치 사용 (추천)**

1. **Source 설정**
   - "Source" 드롭다운에서 "Deploy from a branch" 선택

2. **Branch 설정**
   - "Branch" 드롭다운에서 "gh-pages" 선택
   - "Folder"는 "/ (root)" 선택

3. **Save 클릭**
   - 설정을 저장

**방법 2: GitHub Actions 사용**

1. **Source 설정**
   - "Source" 드롭다운에서 "GitHub Actions" 선택

2. **워크플로우 실행**
   - main 브랜치에 코드를 push하면 자동으로 워크플로우 실행

### 3. 권한 설정 확인

1. **Actions 탭으로 이동**
   - 저장소의 "Actions" 탭 클릭

2. **General 설정**
   - "General" 클릭

3. **Workflow permissions 설정**
   - "Workflow permissions" 섹션에서
   - "Read and write permissions" 선택
   - "Allow GitHub Actions to create and approve pull requests" 체크

4. **Save 클릭**

### 4. 워크플로우 실행 확인

1. **Actions 탭에서 워크플로우 확인**
   - "Deploy to GitHub Pages (gh-pages branch)" 워크플로우가 실행되었는지 확인

2. **gh-pages 브랜치 확인**
   - 저장소의 "main" 브랜치 옆에 "gh-pages" 브랜치가 생성되었는지 확인

3. **배포 상태 확인**
   - Settings → Pages에서 배포 상태 확인

## 🔧 문제 해결

### 워크플로우가 실행되지 않는 경우

1. **main 브랜치에 코드 push**
   ```bash
   git add .
   git commit -m "Initial commit for GitHub Pages"
   git push origin main
   ```

2. **워크플로우 파일 확인**
   - `.github/workflows/deploy-gh-pages.yml` 파일이 있는지 확인

### gh-pages 브랜치가 생성되지 않는 경우

1. **워크플로우 로그 확인**
   - Actions 탭에서 워크플로우 실행 로그 확인
   - 오류 메시지가 있는지 확인

2. **권한 문제 해결**
   - Settings → Actions → General에서 권한 설정 확인

### 사이트가 여전히 404인 경우

1. **배포 완료 대기**
   - GitHub Pages 배포는 보통 5-10분 소요
   - Settings → Pages에서 배포 상태 확인

2. **URL 확인**
   - 올바른 URL로 접속: `https://[사용자명].github.io/[저장소명]/`
   - 또는 `https://[사용자명].github.io/[저장소명]`

3. **브라우저 캐시 클리어**
   - Ctrl+F5 (Windows) 또는 Cmd+Shift+R (Mac)로 강제 새로고침

## 📞 추가 도움

문제가 지속되면:
1. GitHub Actions 로그를 확인하여 구체적인 오류 메시지 확인
2. GitHub Pages 문서 참조: https://docs.github.com/en/pages
3. 저장소의 Issues 탭에서 문제 보고

## ✅ 설정 완료 확인

다음이 모두 완료되면 GitHub Pages가 정상 작동합니다:

- [ ] Settings → Pages에서 소스가 올바르게 설정됨
- [ ] gh-pages 브랜치가 생성됨
- [ ] 워크플로우가 성공적으로 실행됨
- [ ] 사이트 URL로 정상 접속 가능
