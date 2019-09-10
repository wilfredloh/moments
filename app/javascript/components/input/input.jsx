import React from 'react';
import styles from './style.scss';

export default class Input extends React.Component{
  
    render() {
        console.log('input JSX')
        console.log(this.props.moment)
    const { 
        moment, 
        url, 
        onTitleChange, 
        onToNameChange, 
        onFromNameChange, 
        onDesc1Change,
        onDesc2Change,
        // onDesc3Change,
        onFormSave,
        onExport,
        onDownload,
        onFormLeave,
    } = this.props;

    return (
        <div className="screenView reactInput">
            <input name="cal" type="date"/>
            <div>
                {/* do form validation so TITLE cannot be empty */}
                <p>Title</p>
                <input onChange={(event)=>{onTitleChange(event);}} defaultValue={moment.title} onBlur={()=>{onFormLeave()}}/>
            </div>
            <div>
                <p>To Name</p>
                <input onChange={(event)=>{onToNameChange(event);}} defaultValue={moment.to_name} onBlur={()=>{onFormLeave()}}/>
            </div>
            <div>  
                <p>From Name</p>
                <input onChange={(event)=>{onFromNameChange(event);}} defaultValue={moment.from_name} onBlur={()=>{onFormLeave()}}/>
            </div>
            <div>  
                <p>Description</p>
                <textarea onChange={(event)=>{onDesc1Change(event);}} defaultValue={moment.description} onBlur={()=>{onFormLeave()}}/>
            </div>
            <div>  
                <p>Description 2</p>
                <textarea onChange={(event)=>{onDesc2Change(event);}} defaultValue={moment.description2} onBlur={()=>{onFormLeave()}}/>
            </div>
            {/* <div>  
                <p>Description 3</p>
                <textarea onChange={(event)=>{onDesc3Change(event);}} defaultValue={moment.description3} onBlur={()=>{onFormLeave()}}/>
            </div> */}
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

            {/* <div className="toast">
                <div className="toast-header">
                    Toast Header
                </div>
                <div className="toast-body">
                    Some text inside the toast body
                </div>
            </div> */}

            <button onClick={ ()=> {onFormSave()}}>Save Changes</button>
            <button onClick={()=> {onDownload()}}>Download</button>
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