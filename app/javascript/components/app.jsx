import React from 'react'
import { URL } from 'url';
import styles from '../packs/hello_react.css';


export default class App extends React.Component{

    constructor() {
      super()

      // passing in Ruby variables (moment)
      let moment = document.getElementById('currentMoment');
      let parsedMoment = JSON.parse(moment.getAttribute('data'));
 
      this.state = {
        title: parsedMoment.title,
        to_name: parsedMoment.to_name,
        from_name: parsedMoment.from_name,
        description: "",
        id: null,
        type: parsedMoment.image_url
      }
    }
    componentDidMount() {
      let url = window.location.href;
      let id = url.split('/')[4];
      this.setState({id: id});
    }
    handleInputTitle (event) {
      let input = event.target.value;
      this.setState({title: input})
    }
    handleInputToName (event) {
      let input = event.target.value;
      this.setState({to_name: input})
    }
    handleInputFromName (event) {
      let input = event.target.value;
      this.setState({from_name: input})
    }
    
    handleFormUpdate = () => {
      var reactThis = this;
      var responseHandler = () => {
        console.log('in response handler!')
        if (request.readyState === 4) {
          if (request.status === 200) {
            let response = JSON.parse(request.responseText);
            console.log (response);
            // reactThis.setState({stuff: response});
          }
        }
      };
      // let id = this.checkId();
      var request = new XMLHttpRequest();
      request.addEventListener("load", responseHandler);
      
      let jsonObject = JSON.stringify(reactThis.state);
      request.open("PATCH", `http://localhost:3000/moments/${this.state.id}`);
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      request.send(jsonObject);
    }

    checkId () {
    }

    exportImage () {
      console.log('exported!!!!')
      print();
    }
    
    getLinks () {
      console.log('link out!!!!')
    }

  render(){
    let url = `http://localhost:3000/moments/${this.state.id}`;

    let x = ''
    if (this.state.type === 'birthday') {
      x = 'message is correct'
    }
    return(<div>

      <div className="screenView">
        <h1>REACT</h1>
        <p>{x}</p>

        <input name="cal" type="date"/>

        <p>Title</p>
        <input onChange={(event)=>{this.handleInputTitle(event);}} defaultValue={this.state.title}/>
        <p>To Name</p>
        <input onChange={(event)=>{this.handleInputToName(event);}} defaultValue={this.state.to_name}/>
        <p>From Name</p>
        <input onChange={(event)=>{this.handleInputFromName(event);}} defaultValue={this.state.from_name}/>
        <p>Description</p>
        <input onChange={(event)=>{this.handleInputFromName(event);}}/>
        <p>Add attachments</p>
        <p>Image</p>
        <p>Audio</p>
        <button onClick={ ()=> {this.handleFormUpdate()}}>Save Changes</button>
        <button onClick={ ()=> {this.exportImage()}}>Export</button>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href={url}>Link</a>
            <a className="dropdown-item" href="#">QR code</a>
            <a className="dropdown-item" href="#">Facebook</a>
          </div>
        </div>

        {/* <button onClick={ ()=> {this.checkId()}}>Get Links</button> */}

        <p>Title</p>
        <h1>{this.state.title}</h1>
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




      {/* ONLY ACTIVATE THIS WHEN PRINTING */}
      <div className="printView">
        <p>Title</p>
        <h1>{this.state.title}</h1>
        <p>To Name</p>
        <p>{this.state.to_name}</p>
        <p>From Name</p>
        <p>{this.state.from_name}</p>
        <img src="https://res.cloudinary.com/teepublic/image/private/s--y1IE9Rzt--/t_Preview/b_rgb:ef4a81,c_limit,f_jpg,h_630,q_90,w_630/v1545274434/production/designs/3780530_0.jpg"/>
      </div>

    </div>);
  }
}