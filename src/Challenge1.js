import styled from 'styled-components'
import box    from './box.png'
import {
    ChallengeHeading,
    ChallengeWrapper,
    Description
} from './Elements'

import React from 'react';

class Challenge1 extends React.Component {
    render () {
        return (
            <ChallengeWrapper onClick={this.props.onClick}>
                <ChallengeHeading>Challenge 1</ChallengeHeading>
                <Description>Use only CSS to style SingleDiv to look like the image.</Description>
                <div>
                    <img src={box} width="auto" height="auto" alt=""/>
                    <SingleDiv>
                    </SingleDiv>
                </div>
            </ChallengeWrapper>
        )
    }
}

const SingleDiv = styled.div`
  border: 2px solid green;
  width: 125px;
  height: 130px;
`

export default Challenge1