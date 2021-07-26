import Challenge1 from './Challenge1'
import Challenge2 from './Challenge2'
import Challenge3 from './Challenge3'
import Challenge4 from './Challenge4'
import {
    AppWrapper,
    Frame,
    Title
} from './Elements'

import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks: {
                challenge1: 0,
                challenge2: 0,
                challenge3: 0
            }
        }
    }

    render () {
        return (
            <AppWrapper>
                <Title>Front-End Dev Evaluation</Title>
                <Frame>
                    <Challenge1 onClick={() => { this.setState({clicks: {...this.state.clicks, challenge1: this.state.clicks.challenge1 + 1}}) }}/>
                    <Challenge2 onClick={() => { this.setState({clicks: {...this.state.clicks, challenge2: this.state.clicks.challenge2 + 1}}) }}/>
                    <Challenge3 onClick={() => { this.setState({clicks: {...this.state.clicks, challenge3: this.state.clicks.challenge3 + 1}}) }}/>
                    <Challenge4 clicks={this.state.clicks}/>
                </Frame>
            </AppWrapper>
        );
    }
}

export default App;
