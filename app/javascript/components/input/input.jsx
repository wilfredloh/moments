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
        onFormDelete,
        onExport,
        onDownload,
        onFormLeave,
    } = this.props;

    return (
        <div className="screenView reactInput">
            {/* <input name="cal" type="date"/> */}
            <div>
                {/* do form validation so TITLE cannot be empty */}
                <p>Title</p>
                <input onChange={(event)=>{onTitleChange(event);}} defaultValue={moment.title} onBlur={()=>{onFormLeave()}} className="form-control"/>
            </div>
            <div>
                <p>Receipient</p>
                <input onChange={(event)=>{onToNameChange(event);}} defaultValue={moment.to_name} onBlur={()=>{onFormLeave()}} className="form-control"/>
            </div>
            <div>  
                <p>Sender</p>
                <input onChange={(event)=>{onFromNameChange(event);}} defaultValue={moment.from_name} onBlur={()=>{onFormLeave()}} className="form-control"/>
            </div>
            <div>  
                <p>Header</p>
                <input onChange={(event)=>{onDesc1Change(event);}} defaultValue={moment.description} onBlur={()=>{onFormLeave()}} className="form-control" />
            </div>
            <div>  
                <p>Description</p>
                <input onChange={(event)=>{onDesc2Change(event);}} defaultValue={moment.description2} onBlur={()=>{onFormLeave()}} className="form-control"/>
            </div>
            
            {/* <div>  
                <p>Description 3</p>
                <textarea onChange={(event)=>{onDesc3Change(event);}} defaultValue={moment.description3} onBlur={()=>{onFormLeave()}}/>
            </div> */}
            
            <div>  
                <p>Attachment</p>
                <form encType="multipart/form-data">
                    <input type="file" name="myFile"/>
                </form>
            </div>

            {/* <div className="toast">
                <div className="toast-header">
                    Toast Header
                </div>
                <div className="toast-body">
                    Some text inside the toast body
                </div>
            </div> */}

            <button onClick={ ()=> {onFormSave()}} className="btn btn-secondary my-3">Save Changes</button>
            <button onClick={()=> {onDownload()}} className="btn btn-info mr-3">Download</button>
            <div className="btn-group dropup">
                <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Share
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href={url} target="_blank">Show Card</a>
                    <a className="dropdown-item" href="#">QR code</a>
                    <a className="dropdown-item" href="#">Facebook</a>
                </div>
            </div>
            <button onClick={()=> {onFormDelete()}} className="btn btn-danger mr-3 my-3">Delete</button>
        </div>
    );
  }
}