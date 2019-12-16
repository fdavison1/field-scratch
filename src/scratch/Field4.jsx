import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex
align-items: center
justify-content: center
margin: 500px 0`

const Field = styled.div`
display: flex
align-items: center
width: 1000px
height: 300px
background: repeating-linear-gradient(
    90deg,
    green, 
    lightgreen 10%
)`

const Dot = styled.div`
margin-left: 19.5%
border-radius: 50%
background: black
height: 15px
width: 15px`

const Line = styled.div`
background: black
height: 5px
width: 29%`

const Triangle = styled.div`
width: 0;
height: 0;
margin: -1%
border-top: 10px solid transparent;
border-left: 30px solid black;
border-bottom: 10px solid transparent`

const LeftEndzone  = styled.div`
display: flex
justify-content: center
align-items: center
width: 100px
height: 300px
background: red`

const RightEndzone  = styled.div`
display: flex
justify-content: center
align-items: center
width: 100px
height: 300px
background: navy`

const Home = styled.p`
font-size: 5rem
font-weight: bold
color: white
transform: rotate(-90deg)`

const Away = styled.p`
font-size: 5rem
font-weight: bold
color: white
transform: rotate(90deg)`

const Field4 = () => {
    return (
        <Wrapper>

        
        <LeftEndzone>
            <Home>Tigers</Home>
        </LeftEndzone>
            <Field>

            <Dot /><Line /><Triangle />

        </Field>
            <RightEndzone>
                <Away>Bears</Away>
            </RightEndzone >

        </Wrapper>
    )
}

export default Field4