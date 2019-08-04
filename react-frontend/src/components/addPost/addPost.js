import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './addPost.css';


class AddPost extends Component {
    state = {
        open: false,
        body: '',
        title: '',
    };


    handleView = () => {
        (this.state.open) ? this.setState({open: false}) : this.setState({open: true});
    };


    handleAdd = () => {

        const post = {
            title: this.state.title,
            body: this.state.body,
        };


        fetch("/posts/addpost", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({post})
        })
            .then(() => {
                this.props.AddTaskHandler(post.title, post.body);
                this.handleView();
            });
    };


    render() {
        return (
            <div>
                <Fab onClick={this.handleView} name="add" color="primary" aria-label="Add" className="fixedbutton">
                    <AddIcon/>
                </Fab>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleView}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Post</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Post Title..."
                            type="text"
                            onChange={(e) => {
                                this.setState({title: e.target.value})
                            }}
                            fullWidth
                        />
                        <TextField
                            id="standard-multiline-static"
                            label="Post Body ....."
                            multiline
                            rows="4"
                            className='texField'
                            onChange={(e) => {
                                this.setState({body: e.target.value})
                            }}
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleView} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleAdd} color="primary">
                            Publish Post
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddPost;