import React from 'react';

export default class OutputFw extends React.Component{
  
    render() {

    const { moment } = this.props

    let bg = moment.description3;
    let x = '';

    if ( bg === '3') {
        x = <div className="reactOutputFwInner3">
                {/* <div>
                    <h1>{title}</h1>
                </div> */}
                <div>
                    <h3>{moment.to_name}</h3>
                </div>
                <div className="outputGradMessage2">
                        <h2>{moment.description}</h2>
                    </div>
                    <div>
                        <p>{moment.description2}</p>
                    </div>
                
                <div className="outputGradFrom2">
                    <p>{moment.from_name}</p>
                </div>
                {/* <img src="https://images.unsplash.com/photo-1464347601390-25e2842a37f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1985&q=80"/> */}
                {/* <p>Description</p> */}
                {/* <p>{this.state.description}</p> */}
                {/* <p>Image url</p> */}
                {/* <p>{this.state.from_name}</p> */}
                {/* <p>Audio Url</p> */}
                {/* <p>{this.state.from_name}</p> */}
            </div>

    } else if ( bg === '2') {
        x = <div className="reactOutputFwInner2">
                {/* <div>
                    <h1>{title}</h1>
                </div> */}
                <div>
                    <h3>{moment.to_name}</h3>
                </div>
                <div className="outputGradMessage2">
                        <h2>{moment.description}</h2>
                    </div>
                    <div>
                        <p>{moment.description2}</p>
                    </div>
                
                <div className="outputGradFrom2">
                    <p>{moment.from_name}</p>
                </div>
                {/* <img src="https://images.unsplash.com/photo-1464347601390-25e2842a37f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1985&q=80"/> */}
                {/* <p>Description</p> */}
                {/* <p>{this.state.description}</p> */}
                {/* <p>Image url</p> */}
                {/* <p>{this.state.from_name}</p> */}
                {/* <p>Audio Url</p> */}
                {/* <p>{this.state.from_name}</p> */}
            </div>

    } else {
        x = <div className="reactOutputFwInner">
                {/* <div>
                    <h1>{title}</h1>
                </div> */}
                <div>
                    <h3>{moment.to_name}</h3>
                </div>
                <div className="outputGradMessage2">
                        <h2>{moment.description}</h2>
                    </div>
                    <div>
                        <p>{moment.description2}</p>
                    </div>
                
                <div className="outputGradFrom2">
                    <p>{moment.from_name}</p>
                </div>
                {/* <img src="https://images.unsplash.com/photo-1464347601390-25e2842a37f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1985&q=80"/> */}
                {/* <p>Description</p> */}
                {/* <p>{this.state.description}</p> */}
                {/* <p>Image url</p> */}
                {/* <p>{this.state.from_name}</p> */}
                {/* <p>Audio Url</p> */}
                {/* <p>{this.state.from_name}</p> */}
            </div>

    }

    return (
        <div className="screenView reactOutputFw" id="cardDownload">
            {x}
        </div>
    );
  }
}