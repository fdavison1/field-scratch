import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
display: flex
align-items: center
justify-content: center
margin: 80px`

const LeftEndzone = styled.div`
display: flex
justify-content: center
align-items: center
height: 80px
width: 70px
background: #999999
border: 1px solid black
box-sizing: border-box
transform: skew(310deg)`

const Dot = styled.div`
border-radius: 50%
background: black
height: 15px
width: 15px`

const Line = styled.div`
background: black
height: 5px
width: 500px`

const Triangle = styled.div`
width: 0;
height: 0;
border-top: 10px solid transparent;
border-left: 30px solid black;
border-bottom: 10px solid transparent`

const Pass = styled.div`
width: 500px; 
  height: 100px;  
  border: solid 5px #000;
  border-color: #000 transparent transparent transparent;
  border-radius: 50%/100px 100px 0 0;
`


const Field2 = () => {
    return (
        <div>

        <Wrapper>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone><Dot/></LeftEndzone>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone></LeftEndzone>
            <LeftEndzone></LeftEndzone>
        </Wrapper>

        <Wrapper>
            <Dot /><Line/><Triangle/>
            <Pass />
        </Wrapper>

        </div>
    )
}

export default Field2