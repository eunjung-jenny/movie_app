# Movie App 2019

React JS Fundamentals Course with Nicolas from Nomad Academy (2019)

> 영화 정보 api 로부터 받아온 데이터를 react 를 활용하여 보여주는 SPA 실습

- https://2019.stateofjs.com/

![image-20200414180828678](/Users/eunjung/Documents/movie_app/images/image-20200414180828678.png)
![image-20200414180828678](/Users/eunjung/Documents/movie_app/images/image-20200414180803793.png)

## 0. 프로젝트 준비 사항

- node.js 12.13.0
- npm 6.12.0 (node.js 와 함께 설치됨)
- npx 10.2.0 (자주 사용하지 않는 패키지를 사용해야 할 때 이를 설치하여 실행한 뒤 바로 삭제)
- git 2.20.1

- create-react-app
- prop-types
- axios
- react-router-dom

```bash
node -v
npm -v
npm install npx -g
npx -v
git --version
```

## 1. React App 시작하기

> https://github.com/facebook/create-react-app

- 브라우저는 리액트가 사용하는 modern JS 를 이해하지 못하기 때문에 web pack, babel 등을 사용해야 했음
- `create-react-app` 으로 기존의 번거로운 작업을 자동화

```bash
npx create-react-app [앱 이름]
npm start # 앱 실행
```

## 2. 리액트 작동 방식

### 1) JSX

- `index.js`의 `ReactDOM.render(<App />, document.getElementById("root"));` => `index.html` 의 `<div id='root>` 부분에 `App 컴포넌트` 실행결과를 밀어넣는다.

#### (1) Props

- 컴포넌트 간의 데이터는 **Props(property)** 로 전달한다.

```react
function Food({ name }) {
  return <h1>I like {name}</h1>;
}

function App() {
  return (
    <div>
      <Food name="kimchi">
    </div>
  )
}

```

- 컴포넌트에 데이터를 동적으로 전달하기

```react
function App() {
  return (
    <div>
      {dataObj.map((dish) => (
        <Food name={dish.name} />
      ))}
    </div>
  );
}
```

#### (2)) propTypes

- `npm i prop-types`

```js
Food.propTypes = {
  name: PropTypes.string.isRequired;
  // genres: PropTypes.arrayOf(PropTypes.string)
}
```

### 2) State

#### (1) 사용 방식

- class component: `class App extends React.Component`

  - **React는 class component의 state가 변경될 때마다 render 메서드를 자동적으로 실행한다**
  - function component: `function App(){}` 에서는 state, render 사용할 수 없다

- **state의 값을 직접적으로(`this.state.count = 1`) 변경해서는 안되며, 이 경우에는 render 메서드가 자동적으로 실행되지 않는다.** => **setState를 사용!!**

```react
class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
```

#### (2) life cycle method

##### Mounting

- constructor()
- ~~static getDerivedStateFromProps()~~
- render()
- componentDidMount()

##### Updating

- ~~static getDerivedStateFromProps()~~
- ~~shouldComponentUpdate()~~
- render()
- ~~getSnapshotBeforeUpdate()~~
- componentDidUpdate()

##### Unmounting

- componentWillUnmount()

```js
// 클래스 컴포넌트 안에서 테스트 가능
render() {
  console.log("rendering")
}

componentDidMount() {
  console.log("componentDidMount")
}

componentDidUpdate() {
  console.log("componentDidUpdate")
}
```

### 3) react-router-dom

#### (1) Router & Route

- 일치하는 path 에 대한 모든 컴포넌트를 실행하게 되므로 sub-path 가 겹치는 경우에는 `exact={true}` 를 통해 사이드 이펙트를 방지

```react
import { HashRouter, Route } from "react-router-dom"

function App() {
  return <HashRouter>
    <Route path="/" exact={true} component={[렌더링할 스크린]} />
    <Route path="[해당하는 url]" component={[렌더링할 스크린]} />
  </HashRouter>
}
```

#### (2) Link

- navigation bar 를 만들 때 `<a href="#"></a>` 를 사용하게 되면 페이지 로딩이 발생
- SPA 방식으로 동작하기 위해서는 `<Link to="#"></Link>` 로 대체
- **Link 는 Router 내에서 작동함**

```react
import { Link } from "react-router-dom";

<Link to="/">Home</Link>;
```

#### (3) Route props

- 모든 Route 는 **자동적으로 받는 Props 가 존재함**

  - history, location, match, staticContext

- `<Link to={특정 정보들로 이루어진 오브젝트}></Link>` 와 같이 to 속성에 전달하는 값을 지정할 수 있음

```react
<Link
  to={{
    pathname: "/about",
    state: { fromNavigation: true },
  }}
>
  About
</Link>
```

![image-20200414180828678](/Users/eunjung/Documents/movie_app/images/image-20200521114034124.png)

## 3. 추가 구현

### 1) 완료

#### (1) 위치를 인식하는 nav

- `import { withRouter } from "react-router-dom";` 활용

### 2) 예정

#### (1) hook

#### (2) redux

## 4. github page 배포

- 다음과 같이 스크립트를 추가하면 `npm run deploay` 명령어 실행시 다음과 같은 순서로 작업이 수행됨

  - npm run deploy -> predeploy 선호출
  - npm run build -> react-scripts build 호출
  - 최적화 후 배포를 위한 build 폴더 생성
  - deploy 호출 -> gh-pages -d build 호출
  - build 폴더가 업로드 됨

```json
// package.json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
  "homepage": "https://[깃허브 이름].github.io/[레포명]"
}
```
