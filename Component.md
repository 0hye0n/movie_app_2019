```javascript

function Food({name, picture, rating}){
    return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
      );
}
//propTypes를 사용하게 되면 가져오는 데이터에 대해서 우리가 원하는 것이 맞는지 확인을 할 수 있다.
//isRequired 를 적으면 그 값이 필수적으로 있어야 된다는 뜻이고 없을 경우 에러
//data type에 대해서 지정을 했을떄 그거와 다를 경우 에러(ex. Proptypes.string)
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

/*
function Food({fav}){
    return (
    <div>
      <h1>I like {fav}</h1>
    </div>
      );
}
*/

//component is return html code
/*
function App() {
  return (
    <div>
      <h1>HELLO</h1> 
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="samchi"/>
      <Food fav="banana"/>
    </div>
  );
}


const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://steemitimages.com/DQmb4DicFNXcR5mLn9MvxrQfGmnfjWCQVAxdmseSB7GQQ1C/image.png",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyupsal",
    image: "https://i.pinimg.com/originals/5f/af/83/5faf83caa70f134f4672544a3951fa30.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://3.bp.blogspot.com/-ivcIFbxA2OM/TvsdLFcR8lI/AAAAAAAABOQ/Qhp6UtPIzh8/s1600/Picture1%2B-%2Bjeonju.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://officen.azureedge.net/upload/editor/5083cd8b-b978-44c2-9724-1e5a77221ad8.%20%EB%A9%94%EC%9D%B8.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://recipe.ezmember.co.kr/cache/recipe/2015/04/04/0461907459756bc3a56472da407a1a9d1.jpg",
    rating: 4.7
  }
]


function App() {
  return (
    <div>
      <h1>Hello</h1> 
      {foodILike.map(dish => 
      <Food name={dish.name} picture={dish.image}/>
      )}
    </div>
  );
}
*/
function renderFood(dish)
{
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}
//warning : each child in a list should have a unique "key" prop.

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

```