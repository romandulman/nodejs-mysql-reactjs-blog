import React, {Component} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import './post.css'

class Post extends Component {

    handleRemove = () => {
        this.props.RemoveHandler(this.props.noteId);
    };

    render() {
        return (
            <div className="postBody" id={this.props.noteId}>
                <CloseIcon className="CloseIco"  onClick={this.handleRemove}/>
                <p className="outText"> <b>{this.props.task}</b></p>
                <p className="bodyText"> {this.props.body}</p>
            </div>
        )
    }
}


export default Post;