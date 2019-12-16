import React from 'react'
import styled from 'styled-components'

const teams = {
    team1: 'red',
    team2:  'navy',
    name1: 'Tigers',
    name2: 'Bears'
}

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

const Start = styled.div`
margin-left: 19.25%
border-radius: 50%
background: black
border: 1px solid black
height: 15px
width: 15px`

const Dot = styled.div`
margin-left: -.5%
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
background: ${props => teams && teams.team1}`

const RightEndzone  = styled.div`
display: flex
justify-content: center
align-items: center
width: 100px
height: 300px
background: ${props => teams && teams.team2}`

const Home = styled.p`
font-size: 5rem
font-weight: 400
color: white
transform: rotate(-90deg)`

const Away = styled.p`
font-size: 5rem
font-weight: 400
color: white
transform: rotate(90deg)`

const Field4 = () => {
    return (
        <Wrapper>

        
        <LeftEndzone>
            <Home>{teams.name1.toUpperCase()}</Home>
        </LeftEndzone>
            <Field>

            <Start /><Line />
            {/* <Dot /><Line /> */}
            <Triangle />

        </Field>
            <RightEndzone>
                <Away>{teams.name2.toUpperCase()}</Away>
            </RightEndzone >

        </Wrapper>
    )
}

export default Field4