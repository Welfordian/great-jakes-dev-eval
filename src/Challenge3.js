import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements'

import React from 'react';

class Challenge3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        }

        window.onresize = () => {
            this.setState({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight,
            })
        }
    }
    render () {
        return (
            <ChallengeWrapper onClick={this.props.onClick}>
                <ChallengeHeading>Challenge 3</ChallengeHeading>
                <Description>Report the window dimensions. This should update when the window size is changed.</Description>
                <div>
                    <div>Width: {this.state.windowWidth}px</div>
                    <div>Height: {this.state.windowHeight}px</div>
                </div>
            </ChallengeWrapper>
        )
    }
}

export default Challenge3