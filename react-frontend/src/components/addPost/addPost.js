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
        body:'',
        title: '',
    };

    handleView = () => {
        (this.state.open) ? this.setState({open: false}) : this.setState({open: true});
    };

    handleSave = () => {
        this.handleView();
        let post = {
            Title: this.state.title,
            Body: this.state.body,
        };
       this.props.AddTaskHandler(post.Title, post.Body)
    };
    
    render() {
        return (
            <div>
                    <Fab  onClick={this.handleView} name="add" color="primary" aria-label="Add" className="fixedbutton">
                        <AddIcon/>
                    </Fab>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleView}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
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
                            autoFocus
                            margin="dense"
                            label="Post body..."
                            type="text"
                            onChange={(e) => {
                                this.setState({body: e.target.value})
                            }}
                            fullWidth
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleView} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSave} color="primary">
                            Publish Task
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddPost;