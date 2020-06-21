import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Felipe', curtidas: 200, comentarios: 200},
                {id: 3, username: 'Am', curtidas: 20, comentarios: 200}
                ]
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.feed.map((item) => {
                        return(
                            <div key={item.id}>
                                <h3>{item.username}</h3>
                                <a>{item.curtidas} Curtidas /
                                    {item.comentarios} Comentarios</a>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;
