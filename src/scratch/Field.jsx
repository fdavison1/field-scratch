import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
display: flex
justify-content: center
margin: 100px`

const Bounds = styled.div`
    height: 80px
    width: 1000px;
    background: green
    border-top: 1px solid black
    border-bottom: 1px solid black
    box-sizing: border-box
`

const LeftEndzone = styled.div`
height: 80px
width: 70px
background: #999999
border: 1px solid black
box-sizing: border-box
transform: skew(310deg)`

const Left10 = styled.div`
height: 80px
width: 70px
background: #999999
border: 1px solid black
box-sizing: border-box
transform: skew(310deg)`

const Endzone2 = styled.div`
height: 80px
width: 70px
background: #999999
border: 1px solid black
box-sizing: border-box
transform: skew(50deg)`


const Field = () => {
    return (
        <Wrapper>
            <LeftEndzone />
            <Left10 />
            <Bounds />
            <Endzone2 />
            <Endzone2 />
        </Wrapper>
    )
}

export default Field