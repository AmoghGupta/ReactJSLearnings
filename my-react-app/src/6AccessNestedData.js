import React from 'react';

//--------------------- 1st Way [Can have state] ----------------------------//
  class App extends React.Component{
    render(){
      //return React.createElement('', ,)
      return <Button>I <Heart/>React</Button>
    }
  }

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    //return React.createElement('', ,)
    return <span>&hearts;</span>
  }
}
export default App
