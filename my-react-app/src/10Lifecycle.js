import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state= {val:0};
  }
update(){
  this.setState({ val:this.state.val+1})
}

componentWillMount(){
console.log('componentWillMount');
}

componentDidMount(){
console.log('componentDidMount');
}
componentWillUnmount(){
console.log('componentWillUnmount');
}
  render(){
return(
  <button onClick={this.update.bind(this)}>{this.state.val}</button>
)
  }
}

class Wrapper extends React.Component {
mount(){
  ReactDOM.render(<App/>,document.getElementById('a'));
}
unmount(){
  ReactDOM.unmountComponentAtNode(document.getElementById('a'));
}
render(){
 return(
  <div>
  <button onClick={this.mount.bind(this)}>Mount</button>
  <button onClick={this.unmount.bind(this)}>UnMount</button>
  <div id="a"></div>
  </div>
)
}

}

export default Wrapper
