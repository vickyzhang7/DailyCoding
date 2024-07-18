import React, {Component} from 'react';
import Navigation from './components/Navigation';
import './App.css';

const title = "HackerMaps";
const locations = [
    'Lombard St, San Francisco, CA, USA',
    'PIER 39, The Embarcadero, San Francisco, CA, USA',
    'Golden Gate Bridge, San Francisco, CA, USA',
    `Fisherman's Wharf, San Francisco, CA, USA`,
    'Alcatraz Island, San Francisco, CA, USA'
];

class App extends Component {

    constructor() {
        super();
        this.state = {
            locations: [...locations]
        };
    }
    moveLocation = (index, direction) => {
        const locations = [...this.state.locations];
        if (direction === 'up' && index > 0) {
            [locations[index], locations[index - 1]] = [locations[index - 1], locations[index]];
            this.setState({ locations });
        } else if (direction === 'down' && index < locations.length - 1) {
            [locations[index], locations[index + 1]] = [locations[index + 1], locations[index]];
            this.setState({ locations });
        }
    }

    render() {
        return (
            <div className="App">
                <h8k-navbar header={title}></h8k-navbar>
                <Navigation locations={this.state.locations}
                moveLocation={this.moveLocation}/>
            </div>
        );
    }
}

export default App;
