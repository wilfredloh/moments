import React from 'react';
import styles from './style.scss';

export default class Input extends React.Component{
  
    render() {
    const { 
        moment, 
        url, 
        onTitleChange, 
        onToNameChange, 
        onFromNameChange, 
        onFormSave,
        onExport,
        onDownload,
    } = this.props;

    return (
        <div className="screenView reactInput">
            <h1>REACT</h1>
            <input name="cal" type="date"/>
            <div>
                <p>Title</p>
                <input onChange={(event)=>{onTitleChange(event);}} defaultValue={moment.title}/>
            </div>
            <div>
                <p>To Name</p>
                <input onChange={(event)=>{onToNameChange(event);}} defaultValue={moment.to_name}/>
            </div>
            <div>  
                <p>From Name</p>
                <input onChange={(event)=>{onFromNameChange(event);}} defaultValue={moment.from_name}/>
            </div>
            <div>  
                <p>Description</p>
                <input onChange={(event)=>{onFromNameChange(event);}}/>
            </div>
            <div>  
                <p>Add attachments</p>
            </div>
            <div>  
                <p>Image</p>
                <form encType="multipart/form-data" action="/" method="POST">
                    <input type="file" name="myFile"/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
            </div>
            <div>  
                <p>Audio</p>
            </div>

            <button onClick={ ()=> {onFormSave()}}>Save Changes</button>
            <button onClick={ ()=> {onExport()}}>Export</button>
            <button onClick={()=> {onDownload()}}>TEST IMAGE SAVE</button>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Share
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href={url} target="_blank">Show Card</a>
                    <a className="dropdown-item" href="#">QR code</a>
                    <a className="dropdown-item" href="#">Facebook</a>
                </div>
            </div>
        </div>
    );
  }
}