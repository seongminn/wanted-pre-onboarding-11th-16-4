# 🌱 프리온보딩 프론트엔드 과제 Week 4

WANTED 프리온보딩 4주차 과제입니다 🔥

## 배포 페이지

🎉 Team16 배포 링크 👇

https://wanted-pre-onboarding-11th-16-4.netlify.app/

## 😊 자기소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/seongminn"><img src="https://github.com/jsdmas/jsdmas.github.io/assets/105098581/3fdd5b88-e4ba-412b-a89e-b71694c153f7" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♂️ 최성민</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

---

## 🔧 설치 및 실행

### 깃 클론 및 설치 경로 이동

```bash
git clone https://github.com/seongminn/wanted-pre-onboarding-11th-16-4.git

cd wanted-pre-onboarding-11th-16-4
```

### 설치

```bash
npm install
```

### 실행

```bash
npm run start

# 혹은
npm start
```

---

## 🛠️ 사용 라이브러리 및 스택

- formatter : ![Eslint](https://img.shields.io/badge/Eslint-blue), ![Prettier](https://img.shields.io/badge/Prettier-pink)
- API : ![Axios](https://img.shields.io/badge/Axios-yellow)
- Style : ![Tailwind](https://img.shields.io/badge/tailwindcss-06b6d4%26logo%3Dtailwindcss)
- Language: ![React](https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=white), ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=TypeScript&logoColor=white)

---

## 디렉토리 구조

```
📦 src
    |   App.tsx
    |   index.css
    |   main.tsx
    |   vite-env.d.ts
    +---apis
    |       index.ts
    |       sick.ts
    +---components
    |   +---common
    |   |   +---Icon
    |   |   |       SearchIcon.tsx
    |   |   \---Layout
    |   |           index.tsx
    |   \---search
    |       +---SearchInput
    |       |       index.tsx
    |       +---SearchItem
    |       |       index.tsx
    |       \---SearchList
    |               index.tsx
    +---constants
    |       cache.ts
    +---hooks
    |       useDebounce.ts
    \---types
            sick.ts
```

- **component**와 **api**의 기능을 분리하여 각각의 `역할`과 `책임`을 명확하게 할당하고 재사용성을 향상시키려 했습니다.
- **constants** : 협업시 필요한 `일관된 규칙과 구조`를 유지하기 용이하게 하였습니다.
- **hooks** : 로직을 추상화하여 `재사용 가능한 한 형태`로 분리하여 개발 `생산성 향상`시켰습니다.

---

## ❤ 커밋 컨벤션

git commit message 컨벤션
| 커밋 유형 | 의미 |
|-----------|--------------------------------------------------|
| ✨ feat | 새로운 기능 추가 |
| 🐛 fix | 버그, 기능 수정 |
| 📝 Docs | 문서 수정 |
| 🎨 style | 스타일 코드 추가 |
| ♻️ refactor | 코드 리팩토링 |
| 📌 chore | 기능과 관련 없는 내용 수정 |

---

## 🗣️ 코드 설명

### 💽 캐싱

- 캐싱은 Axios Interceptor를 활용하였습니다. Axios Interceptor는 API 요청을 보낼 경우, 혹은 이에 대한 응답이 돌아올 경우, 이를 가로채어 추가적인 작업을 할 수 있도록 Axios에서 제공하는 기능입니다.

1.  캐시 등록

- API 요청에 대한 응답이 돌아올 경우, 요청으로 넘겨준 input value를 key 값으로 갖는 property를 `cache` 객체에 생성합니다.
- 해당 property는 value로 number 타입의 Date.now()와, 반환 data를 갖습니다.

<br />

2. 캐시 검사

- 질환명을 검색하기 위해 string 타입의 질환명과 함께 API 호출을 합니다. 이 때, `cache` 객체에 해당 질환명을 key로 갖는 property가 있는지 확인합니다.
- 조건을 만족하는 property가 없다면 API 요청을 마저 진행합니다.
- 조건을 만족하는 property가 있다면 해당 캐시의 만료 시간을 검사합니다.
  - 만료 시간: 캐시 등록 시간 + `EXPIRATION_TIME(5분)`
  - 현재 시간이 만료 시간을 초과했다면, 해당 캐시를 삭제하고 요청을 마저 보냅니다.
  - 현재 시간이 만료 시간을 초과하지 않았다면, Promise 객체에 해당 캐시를 담아서 반환합니다.

### 💡 웹 접근성(키보드로 추천 검색어 목록에 접근하기)

- 키보드만을 사용하여 추천 검색어 목록에 접근하기 위해서 HTML 속성 중 하나인 `tabIndex`를 사용했습니다.
- tabIndex를 양수로 설정할 시 tab을 눌렀을 때 다음으로 focus가 넘어갈 요소를 지정할 수 있고, 음수로 설정할 시 focus 이벤트가 발생하지 않도록 설정할 수 있습니다.
- 해당 프로젝트에서 input 창에 값을 입력 후 tab을 2번 입력하면 첫번째 추천 검색어 아이템에 접근할 수 있습니다. 이후로 tab을 입력할 때마다 다음 아이템으로 포커스를 이동시킬 수 있습니다.

> ❓ 고민을 했던 지점
>
> input 창에서 tab 입력 시 검색 버튼으로 포커스가 넘어간 후, 한번 더 tab을 입력해야 추천 검색어로 포커스가 넘어갑니다. 처음엔 해당 흐름을 버그라고 인지하여 button 요소에 `tabIndex={-1}` 속성을 부여하고자 했습니다. 하지만 일부 유저의 경우 tab 입력만으로 검색 버튼에 접근하여 검색하길 원할 수 있다고 판단하여 기존의 흐름대로 유지했습니다.

## ⚙️ 사용한 라이브러리

### axios

- axios instance를 통한 쉬운 기본 설정과 더불어 interceptor를 통해 요청과 응답을 제어하기에 용이하기 때문에 채택하였습니다.

### tailwind

- className을 고민하지 않고 쉽게 디자인을 변경할 수 있어 개발 시간을 절약할 수 있습니다.

- 또, 제로 런타임으로 동작하고 빠르다는 장점이 있어 채택하였습니다.

### eslint plugin

```
- `eslint-config-prettier`: eslint의 formatting 기능을 없애준다.
- `eslint-plugin-prettier`: eslint가 prettier 포맷팅 기능을 사용하도록 하는 패키지
- `eslint-plugin-react`: eslint가 react 문법을 알 수 있게 해주는 패키지
- `eslint-plugin-react-hooks`: React의 hook 함수와 관련한 규칙을 강제하는 패키지
- `eslint-import-resolver-typescript`: typescript 환경에서 절대 경로를 사용할 때 eslint가 인식할 수 있도록 하는 패키지
- `eslint-plugin-jsx-a11y`: 웹사이트의 접근성을 높이는 방법을 제공하는 패키지
- `eslint-plugin-import`, `eslint-plugin-simple-import-sort`: import, export 순서를 정렬해주는 패키지
- `@typescript-eslint/eslint-plugin`: typescript가 eslint에서 호환되도록 하는 패키지
- `@typescript-eslint/parser`: typescript를 파싱하도록 도와주는 패키지
```

---
