import React from 'react';

class App extends React.Component {

    /**
     * constructor
     *
     * @object  @props  
     * @object  @state  
     */
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {items.map(item => (
                        <li key={item.userId}>
                            Name: {item.id.name} | Title: {item.title} | Body: {item.body}
                        </li>
                    ))}
                </ul>
            </div>
        );

    }

}

export default App;