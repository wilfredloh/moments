import React from 'react';

export default class OutputGrad extends React.Component{
  
    render() {
    const { 
        title,
        to_name,
        from_name,
        moment,
    } = this.props.values;

    return (
        <div className="screenView reactOutputGrad" id="cardDownload">
            <div className="reactOutputGradInner">
                {/* <div>
                    <h1>{title}</h1>
                </div> */}
                <div className="outputGradTo">
                    <p>Proudly Announcing</p>
                </div>
                <div className="outputGradMessage">
                    <h2>Class of SEI 19</h2>
                </div>
                <div>
                    <p>Graduate</p>
                </div>
                <div>
                    <h3>{moment.to_name}</h3>
                </div>
                <div className="outputGradFrom">
                    <p>Love, {moment.from_name}</p>
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