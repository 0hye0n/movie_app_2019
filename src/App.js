import React from 'react';
//import Potato from './Potato';

function Food({name, picture}){
    return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name}/>
    </div>
      );
}
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
*/

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://steemitimages.com/DQmb4DicFNXcR5mLn9MvxrQfGmnfjWCQVAxdmseSB7GQQ1C/image.png"
  },
  {
    id: 2,
    name: "Samgyupsal",
    image: "https://i.pinimg.com/originals/5f/af/83/5faf83caa70f134f4672544a3951fa30.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "https://3.bp.blogspot.com/-ivcIFbxA2OM/TvsdLFcR8lI/AAAAAAAABOQ/Qhp6UtPIzh8/s1600/Picture1%2B-%2Bjeonju.jpg"
  },
  {
    id: 4,
    name: "Doncasu",
    image: "https://officen.azureedge.net/upload/editor/5083cd8b-b978-44c2-9724-1e5a77221ad8.%20%EB%A9%94%EC%9D%B8.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image: "http://recipe.ezmember.co.kr/cache/recipe/2015/04/04/0461907459756bc3a56472da407a1a9d1.jpg"
  }
]

/*
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
  return <Food key={dish.id} name={dish.name} picture={dish.image}/>
}
//warning : each child in a list should have a unique "key" prop.

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}
export default App;
