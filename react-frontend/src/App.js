import React, {Component} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SchIcon from '@material-ui/icons/Schedule';
import SplashDialog from './components/dialog/dialog'
import Posts from './components/posts/Posts'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <AppBar position="static" color="default">
                        <Toolbar>
                            <SchIcon className="logoIcon"/>
                            <Typography variant="h5" color="inherit">
                               Blog
                            </Typography>
                        </Toolbar>

                    </AppBar>
                </header>
                <SplashDialog/>
                <Posts/>
            </div>
        )
    } ;
}

export default App;
