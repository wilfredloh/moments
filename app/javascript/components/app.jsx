import React from 'react'

export default class App extends React.Component{

    constructor() {
      super()
      this.state = {
        title: "",
        to_name: "",
        from_name: ""
      }
    }
    handleInputTitle (event) {
      console.log('changing!!')
      let input = event.target.value;
      // this.setState({title: event.target.value})
      this.setState({title: input})
    }
    handleInputToName (event) {
      console.log('changing!!')
      let input = event.target.value;
      // this.setState({title: event.target.value})
      this.setState({to_name: input})
    }
    handleInputForName (event) {
      console.log('changing!!')
      let input = event.target.value;
      // this.setState({title: event.target.value})
      this.setState({from_name: input})
    }
    
    handleAJAX = () => {
        console.log('jello')
        var reactThis = this;
        console.log(reactThis.state);

        var responseHandler = (req) => {
          console.log('resononse handlerasdf')
          console.log(req)
          console.log(this.responseText)
            // var response = JSON.parse( this.responseText );
            // reactThis.setState({stuff: response});
        };
      
        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        
        let jsonObject = JSON.stringify(reactThis.state);
        request.open("POST", "http://localhost:3000/moments");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(jsonObject);
    }

    handleSubmit () {
      console.log (this.state);
    }
  render(){
    return(<div>
            <h1>REACT</h1>

              <p>Title</p>
              <input name="title" onChange={(event)=>{this.handleInputTitle(event);}}/>
              <p>To Name</p>
              <input name="to_name" onChange={(event)=>{this.handleInputToName(event);}}/>
              <p>For Name</p>
              <input name="from_name" onChange={(event)=>{this.handleInputForName(event);}}/>
              <button onClick={ ()=> {this.handleAJAX()}}>Save Changes</button>
              {/* <input name="cal" type="date"/> */}

            <div>
              <p>Title</p>
              <p>{this.state.title}</p>
              <p>To Name</p>
              <p>{this.state.to_name}</p>
              <p>From Name</p>
              <p>{this.state.from_name}</p>
              <p>Description</p>
              {/* <p>{this.state.description}</p> */}
              <p>Image url</p>
              {/* <p>{this.state.from_name}</p> */}
              <p>Audio Url</p>
              {/* <p>{this.state.from_name}</p> */}
            </div>

          </div>);
  }
}