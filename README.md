# firstelectron-site

First Electron(firstelectron.co.kr) 홈페이지입니다. 빌드 과정이 없는 정적 사이트라서 파일을 고치고 푸시하면 GitHub Pages에 그대로 반영됩니다.

## 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 페이지 전체. 한국어가 기본 문구입니다. |
| `assets/style.css` | 디자인. 색상은 맨 위 `:root` 변수에서 바꿉니다. |
| `assets/main.js` | 한국어/영어 전환, 문의 폼 동작. 영어 문구는 이 파일의 `EN` 목록에 있습니다. |
| `assets/img/` | 로고, 제품·설비 사진 |
| `assets/og.png` | 링크 공유 시 미리보기 이미지 |
| `favicon.png`, `apple-touch-icon.png` | 탭·홈 화면 아이콘 |
| `robots.txt`, `sitemap.xml` | 검색엔진용. 주소는 `https://www.firstelectron.co.kr/` 기준 |

## 문구를 고칠 때

- 한국어는 `index.html`, 영어는 `assets/main.js`의 `EN`에서 같은 키(`data-i18n` 값)를 찾아 고칩니다.
- 적용 산업 목록은 한영 병기라서 `index.html`에서 직접 고칩니다.

## 문의 폼

지금은 방문자의 메일 앱을 열어 `harrylee@firstelectron.co.kr`로 보내는 방식입니다. 폼이 바로 접수되게 하려면 Formspree 같은 폼 서비스나 Google Form으로 교체할 수 있습니다.

## 배포

GitHub Pages가 `main` 브랜치 루트를 배포합니다. 임시 주소는 `https://first-electron.github.io/firstelectron-site/`입니다.

커스텀 도메인 연결은 DNS 전환 직전에 합니다. 먼저 `CNAME` 파일을 추가하면 임시 주소가 아직 Google Sites를 가리키는 도메인으로 넘어가 버립니다.

## 검색 노출

`index.html` 안에 canonical, Open Graph, JSON-LD(Organization)가 들어 있습니다. 네이버 서치어드바이저 등록 시 받는 인증 메타태그를 `<head>`에 추가하면 됩니다. 연락처나 주소가 바뀌면 JSON-LD도 같이 고칩니다.
