import React from 'react';

export default class OutputGrad extends React.Component{
  
    render() {

    const { moment } = this.props;

    let bg = moment.description3;
    let x = '';

    if ( bg === '2' ) {
        x = <div className="reactOutputGradInner2">

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
        x = <div className="reactOutputGradInner">

                <div>
                    <h3>{moment.to_name}</h3>
                </div>
                <div className="outputGradMessage">
                        <h2>{moment.description}</h2>
                    </div>
                    <div className="outputGradMessageSecond">
                        <p>{moment.description2}</p>
                    </div>
                
                <div className="outputGradFrom">
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
        <div className="screenView reactOutputGrad" id="cardDownload">
            {x}
        </div>
    );
  }
}