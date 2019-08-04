import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Post from '../../components/post/post'
import AddPost from '../../components/addPost/addPost'


class TaskList extends Component {

    state = {
        showDelDialog:false ,
        data: []
    };

    AddTaskHandler = (title, body) => {
       let arr = {
            title: title,
            body: body
        };

        this.setState ({
            data: [...this.state.data, arr]
        })

    };



    RemoveHandler = (id) => {
        const data = this.state.data;
        data.splice(id, 1);
        localStorage.setItem("TaskList", JSON.stringify(data));
        this.setState({data});

        fetch("/posts/"+id+"/delete", {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
          //  body: JSON.stringify({id})
        })
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({data});
                }
            );
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

    render() {
        return (
            <div>
                <Container>
                    <AddPost AddTaskHandler={this.AddTaskHandler}/>
                    <Row>
                        {
                            this.state.data.map((notes, index) =>

                                <Col sm={4}> <Post  RemoveHandler={this.RemoveHandler} noteId={notes.id}
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
