#!/bin/bash

# 배포 스크립트
# 이 스크립트는 로컬에서 배포를 테스트하거나 수동으로 배포할 때 사용합니다.

set -e  # 에러 발생 시 스크립트 중단

echo "🚀 포트폴리오 배포를 시작합니다..."

# Node.js 버전 확인
echo "📋 Node.js 버전 확인 중..."
node --version
npm --version

# 의존성 설치
echo "📦 의존성 설치 중..."
npm ci

# 린트 검사
echo "🔍 코드 품질 검사 중..."
npm run lint

# 빌드
echo "🏗️ 프로덕션 빌드 중..."
npm run build

# 빌드 결과 확인
if [ -d "dist" ]; then
    echo "✅ 빌드가 성공적으로 완료되었습니다!"
    echo "📁 빌드 결과물 크기:"
    du -sh dist/
else
    echo "❌ 빌드 실패: dist 디렉토리가 생성되지 않았습니다."
    exit 1
fi

echo "🎉 배포 준비가 완료되었습니다!"
echo "📝 다음 단계:"
echo "   1. GitHub에 코드를 push하세요"
echo "   2. GitHub Actions가 자동으로 배포를 진행합니다"
echo "   3. 또는 수동으로 배포 플랫폼에 업로드하세요"
