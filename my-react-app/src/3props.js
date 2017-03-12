import React from 'react';


//
//--------------------- 1st Way [Can have state] ----------------------------//
class App extends React.Component{
  render(){
    //return React.createElement('', ,)
    return (
      <div>
      <h1> {this.props.txt}</h1>
      <p> {this.props.cat} </p>
      </div>
    )
  }
}

// App.propTypes = {
//     txt : React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// }

App.defaultProps = {
  txt: "this is the defualt text",
  cat: "12"
}

export default App
