import React from 'react';
import PropTypes from "prop-types";

class App extends React.Component
{
  state ={
    isLoading: true,
    movies: []
  };
  //6sec
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
    axios
  }
  render(){
    const {isLoading} = this.state;

    return (
      <div>
       {this.state.isLoading ? "Loading" : "We are ready"}
      </div> 
    )
  }
}

export default App;
