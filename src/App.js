import React from 'react';
import Feed from "./components/feed";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Felipe', curtidas: 200, comentarios: 200},
                {id: 3, username: 'Am', curtidas: 20, comentarios: 200},
                {id: 4, username: 'B', curtidas: 220, comentarios: 200}
            ]
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.feed.map((item) => {
                        return(
                            <Feed id={item.id} username={item.username}
                            curtidas={item.curtidas} comentarios={item.comentarios}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
