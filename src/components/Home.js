import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Section 
                title ="Model S"
                description = "Order Online for Touchless Deliver"
                leftBtnText = "custom order"
                rightBtnText = "existing inventory"
                backgroundImg = "model-s.jpg"
            />
            <Section 
                title ="Model Y"
                description = "Order Online for Touchless Deliver"
                leftBtnText = "custom order"
                rightBtnText = "existing inventory"
                backgroundImg = "model-y.jpg"
            />
            <Section 
                title ="Model 3"
                description = "Order Online for Touchless Deliver"
                leftBtnText = "custom order"
                rightBtnText = "existing inventory"
                backgroundImg = "model-3.jpg"
            />
            <Section 
                title ="Model X"
                description = "Order Online for Touchless Deliver"
                leftBtnText = "custom order"
                rightBtnText = "existing inventory"
                backgroundImg = "model-x.jpg"
            />
            <Section 
                title ="Solar Panels"
                description = "Lowest Cost Solar Panels in America"
                leftBtnText = "order now"
                rightBtnText = "learn more"
                backgroundImg = "solar-panel.jpg"
            />
            <Section 
                title ="Solar Roof"
                description = "Produce Clean Energy From Your Roof"
                leftBtnText = "order now"
                rightBtnText = "learn more"
                backgroundImg = "solar-roof.jpg"
            />
            <Section 
                title ="Accessories"
                leftBtnText = "shop now"
                rightBtnText = ""
                backgroundImg = "accessories.jpg"
            />
        </Container>
    )
}

export default Home

const Container = styled.div `
    height : 100vh
` 
