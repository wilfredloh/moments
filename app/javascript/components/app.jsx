import React from 'react'
import { URL } from 'url';
import styles from '../packs/hello_react.css';
import Input from './input/input'
import OutputBday from './outputBday/outputBday'
import OutputGrad from './outputGrad/outputGrad'
import OutputFw from './outputFw/outputFw'
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
        // title: parsedMoment.title,
        // to_name: parsedMoment.to_name,
        // from_name: parsedMoment.from_name,
        // description: parsedMoment.description,
        id: null,
        occasion: parsedMoment.occasion,
        card: parsedMoment.card_url,
      }
    }

    componentDidMount() {
      let moment = document.getElementById('currentMoment');
      let parsedMoment = JSON.parse(moment.getAttribute('data'));
      let url = window.location.href;
      let id = url.split('/')[4];
      console.log('check title')
      console.log(parsedMoment)
      console.log(parsedMoment.title)

      if (parsedMoment.title) {
        console.log('in first')
        this.setState({ id: id });
      } else {
        console.log('in second')

          let occ = parsedMoment.occasion;
          let toName = '';
          let fromName = '';
          let desc1 = '';
          let desc2 = '';
          // let desc3 = '';

          if (occ === 'birthday') {
            toName = 'Dear friend,';
            fromName = 'From, A good friend';
            desc1 = 'Have a happy birthday!';
            desc2 = 'Wishing you many happy returns';
            // desc3 = '';
          } else if (occ === 'graduation') {
            toName = 'Class of SEI 19,';
            fromName = 'All the best, Friend';
            desc1 = 'Congratulations and Happy Graduation!';
            desc2 = 'You have a bright future ahead of you';
            // desc3 = '';
          } else if (occ === 'farewell') {
            toName = 'My dear friend,';
            fromName = 'Until we meet again, Another friend';
            desc1 = 'Thanks for the memories!';
            desc2 = "I've learned so much from you! I wish you all the best.";
          }
          this.setState({id: id, moment: 
            {
              title: `Card ${id}`,
              to_name: toName,
              from_name: fromName,
              description: desc1,
              description2: desc2,
              description3: parsedMoment.description3,
              image_url: '',
              audio_url: '',
              music_url: ''
            }
          });
      }
      
    }

    // INPUT COMPONENT FUNCTIONS
    handleInputTitle = (event) => {
      let input = event.target.value;
      this.state.moment.title = input
      this.setState({ moment: this.state.moment})
    }
    handleInputToName = (event) => {
      let input = event.target.value;
      this.state.moment.to_name = input
      this.setState({ ment: this.state.moment})
    }
    handleInputFromName = (event) => {
      let input = event.target.value;
      this.state.moment.from_name = input
      this.setState({ moment: this.state.moment})
    }
    handleInputDesc1 = (event) => {
      let input = event.target.value;
      this.state.moment.description = input
      this.setState({ moment: this.state.moment})
    }
    handleInputDesc2 = (event) => {
      let input = event.target.value;
      this.state.moment.description2 = input
      this.setState({ moment: this.state.moment})
    }
    // handleInputDesc3 = (event) => {
    //   let input = event.target.value;
    //   this.state.moment.description3 = input
    //   this.setState({ moment: this.state.moment})
    // }
    handleFormUpdate = () => {
      var reactThis = this;
      var responseHandler = () => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            this.showSave();
            let response = JSON.parse(request.responseText);
            // reactThis.setState({stuff: response});
          }
        }
      };
      var request = new XMLHttpRequest();
      request.addEventListener("load", responseHandler);
      console.log('reacttttt stattteeeeee')
      console.log(reactThis.state)
      let jsonObject = JSON.stringify(reactThis.state.moment);
      request.open("PATCH", `http://localhost:3000/moments/${this.state.id}`);
      request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      request.send(jsonObject);
    }

    downloadImage = () => {
      console.log ('download image')
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
    showSave () {
      console.log('Changes have been saved!')
    }

  // ############################################################
  // RENDER 
  // ############################################################

  render(){
    let url = `http://localhost:3000/m/${this.state.card}`;
    let occ = this.state.occasion;

    console.log ('before rendering')
    console.log (this.state.moment)

    // ############################################################
    // INPUT / OUTPUT VARIABLE 
    // ############################################################
    let input = <Input 
      moment={this.state.moment} 
      url={url}
      onTitleChange={this.handleInputTitle}
      onToNameChange={this.handleInputToName}
      onFromNameChange={this.handleInputFromName}
      onDesc1Change={this.handleInputDesc1}
      onDesc2Change={this.handleInputDesc2}
      // onDesc3Change={this.handleInputDesc3}
      onFormSave={this.handleFormUpdate}
      onExport={this.exportImage}
      onDownload={this.downloadImage}
      onFormLeave={this.handleFormUpdate}
    />
    let output = ''

    if (occ === 'birthday') {
      output = <OutputBday 
        moment={this.state.moment}
      />

    } else if (occ === 'graduation') {
      output = <OutputGrad
        moment={this.state.moment}
      />

    } else if (occ === 'farewell') {
      output = <OutputFw
        moment={this.state.moment}
      />

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