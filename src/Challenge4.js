import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements'

import React from 'react'

class Challenge4 extends React.Component {
    constructor(props) {
        super(props);
    }

    totalClicks() {
        return this.props.clicks.challenge1 +
            this.props.clicks.challenge2 +
            this.props.clicks.challenge3;
    }

    render () {
        return (
            <ChallengeWrapper>
                <ChallengeHeading>Challenge 4</ChallengeHeading>
                <Description>
                    Make challenges 1-3 record the number of times each is clicked and report the numbers here, formatted
                    cleanly.
                </Description>
                <div>
                    <div>C1: {this.props.clicks.challenge1}</div>
                    <div>C2: {this.props.clicks.challenge2}</div>
                    <div>C3: {this.props.clicks.challenge3}</div>
                    <div>Total: {this.totalClicks()}</div>
                </div>
            </ChallengeWrapper>
        )
    }
}

export default Challenge4