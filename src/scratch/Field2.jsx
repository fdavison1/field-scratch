import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
display: flex
justify-content: center
margin: 100px`

const LeftEndzone = styled.div`
border: 1px solid black
border-right: 0
height: 100px
width: 50px
background: red`

const Left50 = styled.div`
border: 1px solid black
border-right: 0
height: 100px
width: 50px`

const Right50 = styled.div`
border: 1px solid black
border-left: 0
height: 100px
width: 50px`

const RightEndzone = styled.div`
border: 1px solid black
border-left: 0
height: 100px
width: 50px
background: blue`


const Field2 = () => {
    return (
        <Wrapper>
            <LeftEndzone />
            <Left50 />
            <Left50 />
            <Left50 />
            <Left50 />
            <Left50 />
           <Left50 />
           <Right50 />
           <Right50 />
           <Right50 />
           <Right50 />
           <Right50 />
           <RightEndzone />
        </Wrapper>
    )
}

export default Field2