import React from 'react'

export default class App extends React.Component{

    handleAJAX =()=> {
        console.log('jello')
        var reactThis = this;

        var responseHandler = () => {
            console.log(this.responseText)
            var response = JSON.parse( this.responseText );
            reactThis.setState({stuff: response});
        };
      
        var request = new XMLHttpRequest();
      
        request.addEventListener("load", responseHandler);
      
        request.open("GET", "http://localhost:3000/posts/1.json");
      
        request.send();
    }
  render(){
    return(<div>
            <h1>APPPPPPP!</h1>
            <h1>OOOOOO!</h1>
            <p>yooooo</p>
            <p>hoooooo</p>
            <button onClick={this.handleAJAX}>Click me!</button>
          </div>);
  }
}