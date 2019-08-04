import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Post from '../../components/post/post'
import AddPost from '../../components/addPost/addPost'


class TaskList extends Component {

    state = {
        data: []
    };

    AddTaskHandler = (title, body) => {
       let arr = {
            Title: title,
            Body: body
        };

        this.setState ({
            data: [...this.state.data, arr]
        },
        () => localStorage.setItem("TaskList", JSON.stringify(this.state.data))
        )

    };

    RemoveHandler = (id) => {
        const data = this.state.data;
        data.splice(id, 1);
        localStorage.setItem("TaskList", JSON.stringify(data));
        this.setState({data});
    };


    componentDidMount() {
        fetch("http://localhost:3000/api")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({data});
                }
            )

    }






       // let data = JSON.parse(localStorage.getItem("TaskList"));
       // if (data != null) this.setState({data});




    render() {
        return (
            <div>
                <Container>
                    <AddPost AddTaskHandler={this.AddTaskHandler}/>
                    <Row>
                        {
                            this.state.data.map((notes, index) =>

                                <Col sm={4}> <Post  RemoveHandler={this.RemoveHandler} noteId={index}
                                                   title={notes.title} body={String(notes.body)}/> </Col>
                            )
                        }
                    </Row>
                </Container>
            </div>
        );
    };
}

export default TaskList;
