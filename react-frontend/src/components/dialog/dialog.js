import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class splashDialog extends Component {

    state = {
        open: false,
    };

    handleDialogView = () => {
        (this.state.open) ? this.setState({open: false}) : this.setState({open: true});
    };

    componentDidMount() {
        this.handleDialogView();
    }

    render() {
        return (
            <div name="addModaldialog">
                <Dialog

                    open={this.state.open}
                    onClose={this.handleDialogView}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Hi!"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This is simple React based Blog, click on the blue <b>+</b> button to add Blog Post
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogView} name="modalOk" color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default splashDialog;