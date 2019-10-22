This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
------------------------------------------------------------------------------------------------------------------------------------------


### github init repositories
```
git init
```
```
git remote add origin https://github.com/dolkaiser/movie_app_2019 
```

### github upload
```
git add .
```
```
git commit -m "https://github.com/dolkaiser/movie_app_2019"
```
```
git push origin master
```

- 만약에 업로드가 잘 안될경우에 밑에 코드를 수행해 보셈!!
```
git remote remove origin
```
```
git remote add origin https://github.com/dolkaiser/movie_app_2019 
```
```
git push origin master --force
```

### 내용 정리
2019-10-21
- react is use component!!
- 리액트는 컴포넌트를 사용해서 HTML처럼 작성하려는 경우에 필요하다....
- 자바스크립트와  HTML사이의 이러한 조합을 jsx라고 부름 -> 리액트에서 나온 유일한 개념 (특화된 개념, 다른 분야로 가면 이 개념이 도움이 되지 않을거임..)
- jsx는 javascript 안에서의 HTML 이라고 생각하면 된다.
- 컴포넌트를 만드는 방법에 대해서 학습함
- js 파일에 export라인을 추가 하면 다른 js 파일에서 import 가능(안할경우 컴파일 에러가 남.)
```javascript
export default Potato;
```
- react application은 오직 한개의 component만을 렌더링 함.
```javascript
ReactDOM.render(<App />, document.getElementById('root'));//여기에서 <App /> 부분이 하나의 component임
```

- map은 function을 취해서 그 function을 array의 각 item에 적용함

```javascript
const friends = ["a", "b", "c", "d"];
friends.map(current => {
    console.log(current);
    return 0;
}
//위아 아래는 똑같은 문법임
friends.map(function(current) {
    console.log(current);
    return 0;
}
)

/*결과
 a
 b
 c
 d
 (4) [0, 0, 0, 0]
*/
```

```javascript
friends.map(function(friends){
    return friends + " good";
})
/*결과
 (4) ["a good", "b good", "c good", "d good"]
*/
```

- chrome에서 아래와 같은 메세지가 떳을 경우 객체의 각각의 요소에 대해서 id 값을 줘야함 -> map을 사용할 경우 안에서 각각의 element에 대해서 key 값을 가져야 함....
```
warning : each child in a list should have a unique "key" prop.
```

```javascript
//이런식으로
<Food key={dish.id} name={dish.name} picture={dish.image}/>
```

2019-10-22
- async => 이 함수가 약간의 시간의 걸리므로 끝날때까지 기다려 달라고 지정해주는것
- async 를 함수이름 앞에 작성 해주고 함수 내부에서 어떤 부분에서 기다려야 하는지 await을 통해 지정
```javascript
getMovies = async () =>{
    //await를 통해 정확히 어떤걸 기다려야 되는지 지정
    const {
      data: {
        data :{movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
```

- axios....

- es6에 의해서 아래와 같이 원하는 element들만을 얻을 수 있다.
```javascript
const {isLoading, movies} = this.state;
```

- javascript안에서 class를 지정할때 javascript안에서의 class와 헷갈려하므로(충돌 비슷하게 생기므로?) className으로 지정해줌.......
```javascript
class App extends React.Component
{
  state ={
    isLoading: true,
    movies: []
  };

  getMovies = async () =>{
    const {
      data: {
        data :{movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;
    //javascript안에서 class를 지정할때 javascript안에서의 class와 헷갈려하므로(충돌 비슷하게 생기므로?) className으로 지정해줌.......
    return (
      <section className="container">
       {isLoading ? (
       <div className="loader">
         <span className="loader__text">Loading...</span>
         </div>
       ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                    key={movie.id}
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    />
         ))}
          </div>
       )}
       </section> 
    );
  }
}
```