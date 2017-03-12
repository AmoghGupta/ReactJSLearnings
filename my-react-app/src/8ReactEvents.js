import React from 'react';

class App extends React.Component {
constructor(){
  super();
  this.state ={
    currentEvent: '---'
  };
}

update(e){
this.setState({currentEvent: e.type})
}
  render(){
    return (
      <div>
      <textarea
onKeyPress={this.update.bind(this)}
      cols="30" rows="10"></textarea>
      <h1> {this.state.currentEvent} </h1>
      </div>
    )
  }
}

export default App
