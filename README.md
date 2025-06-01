# nextjs-mini-pokedex

Next.js 기반으로 제작된 포켓몬 도감(Pokédex) 프로젝트입니다.  
Tailwind CSS, Zustand, TanStack Query를 사용하여 기능 중심의 구조로 구성되며, PokéAPI를 활용해 데이터를 가져옵니다.

---

## 📆 Version Info

- First created on: **2025.06**
- 개인 학습용으로 제작한 사이드 프로젝트입니다.
- App Router 기반의 최신 Next.js 구조를 사용합니다.

---

## 📌 기술 스택

### ⚙️ 개발 환경

- **프레임워크**: Next.js (App Router)
- **스타일링**: Tailwind CSS
- **패키지 매니저**: Yarn
- **프로그래밍 언어**: TypeScript

### 🛠️ 개발 도구 및 설정

#### 📦 주요 라이브러리

| 라이브러리              | 설명                                                                                    |
| ----------------------- | --------------------------------------------------------------------------------------- |
| `zustand`               | 전역 상태 관리를 위한 경량 라이브러리. 포켓몬 검색어, 즐겨찾기 등 상태를 관리할 때 사용 |
| `@tanstack/react-query` | 서버 상태를 캐싱하고 관리하는 라이브러리. 포켓몬 리스트 및 상세 정보를 효율적으로 관리  |
| `axios`                 | API 요청을 위한 HTTP 클라이언트                                                         |
| `tailwindcss`           | 유틸리티 기반의 CSS 프레임워크. 빠른 UI 개발에 적합                                     |
| `next`                  | React 기반의 서버 사이드 렌더링 프레임워크                                              |
| `react` / `react-dom`   | 리액트 핵심 라이브러리                                                                  |

---

## 📜 설치 및 실행 명령어

```bash
# 프로젝트 생성
npx create-next-app@latest nextjs-mini-pokedex --typescript

# 개발 서버 실행
cd nextjs-mini-pokedex
yarn dev
```

## 📦 추가 설치 명령어

```bash
# 전역 상태 및 API 요청 관련 라이브러리
yarn add @tanstack/react-query zustand axios
```
