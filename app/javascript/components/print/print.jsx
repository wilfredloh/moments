import React from 'react';

export default class Print extends React.Component{
  
    render() {
    const { 
        title,
        to_name,
        from_name
    } = this.props.values;

    return (
        <div className="printView">
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
            <img src="https://res.cloudinary.com/teepublic/image/private/s--y1IE9Rzt--/t_Preview/b_rgb:ef4a81,c_limit,f_jpg,h_630,q_90,w_630/v1545274434/production/designs/3780530_0.jpg"/>
        </div>
    );
  }
}