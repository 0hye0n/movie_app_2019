```javascript
//class component
//life cycle method를 가지는데, life cycle method는 기본적으로 리액트가 컴포넌트를 생성하는 그리고 없애는 방법이다.
//render 이전 그리고 render 이후에 호출되는 function들이 있다.
//Mounting 생성 
//Updating 업데이트
//Unmounting 제거
class App extends React.Component
{
  //생성자 -> render()가 실행 되기 전에 수행됨
  constructor(props) {
    super(props);
    console.log("hello");
  }
  //state에는 바꾸고 싶은 data를 집어 넣게 됨
  //문제는 어떻게 App의 data를 바꿀것인가 이다.
  state = {
    count: 0
  };
  //setState 함수가 호출되면서 render()함수가 같이 호출되어서 변경된 사항에 대해서 실시간으로 화면에 업데이트를 해준다.
  //외부의 상태에 의존하지 않는 좋은 방법
  add = () => {
    console.log("add");
    //current를 사용하는것이 좋은 방법이다.
    //업데이트가 이부분임
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log("minus");
    this.setState({count: this.state.count - 1});
  };
  //render()가 수행되고 난 후 실행됨.
  componentDidMount(){
    console.log("component rendered");
  }
  //업데이트 되어서 렌더링이 끝나고 난후 호출이 됨
  componentDidUpdate(){
    console.log("I just updated");
  }
  // 컴포넌트가 제거 될때 호출이 되겠지만 이 함수를 적어도 결과를 볼순 없을 거임......
  componentWillUnmount(){
    console.log("Goodbye, cruel world");
  }
  //render method 를 통해 화면에 뿌려짐
  //자동적으로 모든 클래스의 render method를 수행한다.
  render(){
    console.log("render");
    return (
      <div>
        <h1>Im a class {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div> 
    )
  }
}
```