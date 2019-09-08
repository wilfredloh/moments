import React from 'react';

export default class Output extends React.Component{
  
    render() {
    const { 
        title,
        to_name,
        from_name
    } = this.props.values;

    return (
        <div className="screenView reactOutput">
            <div className="reactOutputInner">
                <div>
                    <p>Title</p>
                    <h1>{title}</h1>
                </div>
                <div>
                    <p>To Name</p>
                    <h2>{to_name}</h2>
                </div>
                <div>
                    <p>From Name</p>
                    <h2>{from_name}</h2>
                </div>
                <p>Description</p>
                {/* <p>{this.state.description}</p> */}
                <p>Image url</p>
                {/* <p>{this.state.from_name}</p> */}
                <p>Audio Url</p>
                {/* <p>{this.state.from_name}</p> */}
            </div>
        </div>
    );
  }
}