import React from 'react'
import { URL } from 'url';
import styles from '../packs/hello_react.css';
import Input from './input/input'
import Output from './output/output'
import Print from './print/print'
import htmlToImage from 'html-to-image';
import { saveAs } from 'file-saver';

export default class App extends React.Component{
    constructor() {
      super()
      // passing in Ruby variables (moment)
      let moment = document.getElementById('currentMoment');
      let parsedMoment = JSON.parse(moment.getAttribute('data'));
 
      this.state = {
        moment: parsedMoment,
        title: parsedMoment.title,
        to_name: parsedMoment.to_name,
        from_name: parsedMoment.from_name,
        description: "",
        id: null,
        occasion: parsedMoment.occasion,
        card: parsedMoment.card_url,
      }
    }
    componentDidMount() {
      let url = window.location.href;
      let id = url.split('/')[4];
      this.setState({id: id});
    }

    // INPUT COMPONENT FUNCTIONS
    handleInputTitle = (event) => {
      let input = event.target.value;
      this.setState({title: input})
    }
    handleInputToName = (event) => {
      let input = event.target.value;
      this.setState({to_name: input})
    }
    handleInputFromName = (event) => {
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
      var request = new XMLHttpRequest();
      request.addEventListener("load", responseHandler);
      let jsonObject = JSON.stringify(reactThis.state);
      request.open("PATCH", `http://localhost:3000/moments/${this.state.id}`);
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      request.send(jsonObject);
    }
    exportImage = () => {
      console.log('exported!!!!')
      print();
    }
    getLinks = () => {
      console.log('link out!!!!')
    }

    downloadImage = () => {
      console.log ('running!')
      let node = document.getElementById('cardDownload');
      htmlToImage.toPng(node)
      .then(function (dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
      
      htmlToImage.toBlob(document.getElementById('cardDownload'))
      .then(function (blob) {
        window.saveAs(blob, 'card.png');
      });
    }

  // ############################################################
  // RENDER 
  // ############################################################

  render(){
    let url = `http://localhost:3000/m/${this.state.card}`;
    let occ = this.state.occasion;

    // ############################################################
    // INPUT / OUTPUT VARIABLE 
    // ############################################################
    let input = ''
    let output = ''

    if (occ === 'birthday') {
      input = <Input 
        moment={this.state.moment} 
        url={url}
        onTitleChange={this.handleInputTitle}
        onToNameChange={this.handleInputToName}
        onFromNameChange={this.handleInputFromName}
        onFormSave={this.handleFormUpdate}
        onExport={this.exportImage}
        onDownload={this.downloadImage}
      />
      output = <Output 
        values={this.state}
      />

    } else if (occ === 'graduation') {
      output = 'this is grad';

    } else if (occ === 'farewell') {
      output = 'this is fare';
    }

    // ############################################################
    // CONTAINER VARIABLE 
    // ############################################################

    let container = 
      <React.Fragment>
        <div className="reactContainerMain">
            {input}
            {output}
        </div>
        <div className="reactContainerPrint">
            <Print 
              values={this.state}
            />
        </div>
      </React.Fragment>

    // ############################################################
    // RETURN STATEMENT 
    // ############################################################

    return(<div className="reactContainer">
        {container}
    </div>);
  }
}