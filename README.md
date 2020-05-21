# Movie App 2019

React JS Fundamentals Course with Nicolas from Nomad Academy (2019)

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

```js
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

```js
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

```js
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
