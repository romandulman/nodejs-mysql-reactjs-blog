import React, {Component} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Post extends Component {
    style = makeStyles({
        card: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });
    handleRemove = () => {
        this.props.RemoveHandler(this.props.noteId);
    };

    render() {
        return (
            <div id={this.props.noteId}>
                <Card className={this.style.card}>
                        <CardMedia
                            className={this.style.media}
                        />
                        <CardContent>
                            <CloseIcon onClick={this.handleRemove}/>
                        </CardContent>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.body}
                            </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Edit
                        </Button>
                        <Button size="small" color="primary">
                            Read More
                        </Button>
                    </CardActions>
                </Card>
            </div>

        )
    }
}


export default Post;