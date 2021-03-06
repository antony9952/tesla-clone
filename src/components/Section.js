import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Zoom';

function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
    return (
        <Wrap bgImg = {backgroundImg} >
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Button>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {rightBtnText &&
                <RightButton>
                    {rightBtnText}
                </RightButton>
                }
            </ButtonGroup>
            </Fade>
            <DownArrow src = "images/down-arrow.svg"/>
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div `
    width :100vw;
    height : 100vh;
    background : ${props => `url('images/${props.bgImg}')`};
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    display : flex;
    flex-direction : column;
    justify-content: space-between;
    align-items :center;
`
const ItemText = styled.div `
    padding-top : 15vh;
    text-align : center;
`
const ButtonGroup = styled.div `
    display : flex;
    margin-bottom : 30px;
    @media (max-width:768px){
        flex-direction : column;
    }

`    
const LeftButton = styled.div `
    background : rgba(23,26,32,0.8);
    height : 40px;
    width:256px;
    color : white;
    display : flex;
    justify-content : center;
    align-items : center;
    text-transform :uppercase;
    border-radius: 100px;
    font-size: 12px;
    opacity : 0.85;
    margin: 8px;
    cursor : pointer;
`
const RightButton = styled(LeftButton) `
    background : white;
    opacity : 0.65;
    color: black;
`
const DownArrow = styled.img `
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation : animateDown infinite 1.5s; 
`
const Button = styled.div `

`