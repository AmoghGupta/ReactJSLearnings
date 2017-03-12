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
      <h1>{this.state.txt}</h1>
      <Widget updated={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) => <input type="text" onChange={props.updated}/>


export default App
