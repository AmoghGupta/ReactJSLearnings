import React from 'react';

//--------------------- 1st Way [Can have state] ----------------------------//
class App extends React.Component{
  render(){
    //return React.createElement('', ,)
    return (
      <div>
      <h1>Hello world </h1>
      <b> Bold </b>
      </div>
    )
  }
}

// --------------------2nd Way [StateLess Component]-----------------------//
//const App = () => <h1> Hello world </h1>

export default App
