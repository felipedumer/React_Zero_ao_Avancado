import React, {Component} from 'react';
class Produto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        const {id: id213} = this.props.match.params;
        this.setState({id: id213});
    }

    render() {
        return (
            <div>
                Pagina produto {this.state.id}
            </div>
        );
    }
}

export default Produto;