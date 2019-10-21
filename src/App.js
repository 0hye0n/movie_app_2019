import React from 'react';
//import Potato from './Potato';

function Food(props){
    return (
    <div>
      <h1>I like {props.fav}</h1>
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

export default App;
