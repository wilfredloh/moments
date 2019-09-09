import React from 'react';

export default class Print extends React.Component{
  
    render() {
    const { 
        title,
        to_name,
        from_name
    } = this.props.values;

    // return (
    //     <div className="printView reactOutputInner">
    //         <div>
    //             <p>Title</p>
    //             <h1>{title}</h1>
    //         </div>
    //         <div>
    //             <p>To Name</p>
    //             <h2>{to_name}</h2>
    //         </div>
    //         <div>
    //             <p>From Name</p>
    //             <h2>{from_name}</h2>
    //         </div>
    //         <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg"/>
    //     </div>
    // );

    return (
        <div className="printView reactOutput">
            <div className="reactOutputInner">
                {/* <div>
                    <h1>{title}</h1>
                </div> */}
                <div className="outputName">
                    <p>Dear {to_name},</p>
                </div>
                <div className="outputMessage">
                    <h2>Have a happy birthday!</h2>
                </div>
                <div className="outputName">
                    <p>Wishing you many happy returns!</p>
                    <p>Love, {from_name}</p>
                </div>
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