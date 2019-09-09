import React from 'react';

export default class Output extends React.Component{
  
    render() {
    const { 
        title,
        to_name,
        from_name
    } = this.props.values;

    return (
        <div className="screenView reactOutput" id="cardDownload">
            <div className="reactOutputInner">
                {/* <div>
                    <h1>{title}</h1>
                </div> */}
                <div className="outputTo">
                    <p>Dear {to_name},</p>
                </div>
                <div className="outputMessage">
                    <h2>Have a happy birthday!</h2>
                </div>
                <div>
                    <p>Wishing you many happy returns!</p>
                </div>
                <div className="outputFrom">
                    <p>Love, {from_name}</p>
                </div>
                {/* <img src="https://images.unsplash.com/photo-1464347601390-25e2842a37f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1985&q=80"/> */}
                {/* <p>Description</p> */}
                {/* <p>{this.state.description}</p> */}
                {/* <p>Image url</p> */}
                {/* <p>{this.state.from_name}</p> */}
                {/* <p>Audio Url</p> */}
                {/* <p>{this.state.from_name}</p> */}
            </div>
        </div>
    );
  }
}