import React, {Component} from 'react';
import './App.css';
import Container from "react-bootstrap/Container";

class App extends Component {

    render() {
        return (
            <Container className={'App-header'}>
                <Container className={'App'}>
                    <p>The <b>pessimist</b> sees difficulty in every opportunity</p>
                    <p>The <b>optimist</b> sees opportunity in every difficulty</p>
                </Container>
            </Container>
        );
    }
}

export default App;
