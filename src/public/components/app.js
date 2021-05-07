import React, {Component} from 'react';

import Clicker from './clicker.js';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return(
            <div>
                <h1>Cardano Jima, a secure and scalable AWS based stakepool hosted in Tokyo.</h1>
                <Clicker initialCount={10} />
            </div>
        ); 
    }
}

export default App;