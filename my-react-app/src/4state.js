import React from 'react';

//--------------------- 1st Way [Can have state] ----------------------------//
class App extends React.Component{
 //state
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }

  update(e){
    this.setState({txt: e.target.value})
  }

  render(){
    //return React.createElement('', ,)
    return (
      <div>
      <input type="text" onChange={this.update.bind(this)}/>
      <h1>{this.state.txt}</h1>
      </div>
    )
  }
}
export default App
