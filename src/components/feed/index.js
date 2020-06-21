import React, { Component } from "react";

class Feed extends Component {
    render() {
        return (
            <div key={this.props.id}>
                <h3>{this.props.username}</h3>
                <a>{this.props.curtidas > 20 ? this.props.curtidas + ' curtidas' :
                this.props.curtidas + ' curtida'}
                /
                {this.props.comentarios > 20 ? this.props.comentarios + ' comentarios' :
                this.props.comentarios + ' comentario'}
                </a>
                <hr/>
            </div>
        )
    }
}

export default Feed;