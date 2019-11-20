import React, { Component } from 'react';

class ContentForm extends Component {
    state = {
        author: '',
        content: ''
    }

    handleAuthorChange = (e: { target: { value: any; }; }) => {
        this.setState({
            author: e.target.value
        });
    }

    handleContentChange = (e: { target: { value: any; }; }) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        //this.props.addComment(this.state);
        this.setState({
            author: '',
            content: ''
        });
        
    }

    render() {
        return (
            <div className="add-form">
                <form onSubmit={ this.handleSubmit } className="card hoverable p-bottom">
                    <p className="p-top">ADD COMMENT</p>
                    <input onChange={ this.handleContentChange } value={this.state.content} type="text" placeholder="comment" />
                    <input id="name" onChange={ this.handleAuthorChange } value={this.state.author} type="text" placeholder="name" />
                    <input value="submit" type="submit"/>
                </form>
            </div>
        )
    }
}

export default ContentForm;