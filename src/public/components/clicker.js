
import React, {Component} from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: props.initialCount
        }
    }

    render() {
        const { classes } = this.props;

        return(
            <div>
                <p>You clicked me {this.state.count} times already!</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>
                    I'm a Button
                </button>
            </div>
        ); 
    }
}

export default Clicker;