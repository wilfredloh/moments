import React from 'react';

export default class OutputBday extends React.Component{
  
    render() {
    // const { 
    //     title,
    //     to_name,
    //     from_name
    // } = this.props.values;

    const { moment } = this.props

    let bg = moment.description3;

    if ( bg === '2' ) {
        console.log('in the right place')
        return (
            <div className="screenView reactOutputBday" id="cardDownload">
                <div className="reactOutputBdayInner2">
                    {/* <div>
                        <h1>{title}</h1>
                    </div> */}
                    <div className="outputBdayTo">
                        <p>{moment.to_name}</p>
                    </div>
                    <div className="outputBdayMessage2">
                        <h2>{moment.description}</h2>
                    </div>
                    <div>
                        <p>{moment.description2}</p>
                    </div>
                    <div className="outputBdayTo2">
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
            </div>
        );

    } else {
        return (
            <div className="screenView reactOutputBday" id="cardDownload">
                <div className="reactOutputBdayInner">
                    {/* <div>
                        <h1>{title}</h1>
                    </div> */}
                    <div className="outputBdayTo">
                        <p>{moment.to_name}</p>
                    </div>
                    <div className="outputBdayMessage">
                        <h2>{moment.description}</h2>
                    </div>
                    <div>
                        <p>{moment.description2}</p>
                    </div>
                    <div className="outputBdayFrom">
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
            </div>
        );
    }
  }
}