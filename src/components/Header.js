import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

function Header() {

    const [customMenu, setCustomMenu] = useState(false);
    return (
        <Container>
            <a href="#">
                <img src ="images/logo.svg" />
            </a>
            <Menu>
                <a href ="#">Model S</a>
                <a href ="#">Modes 3</a>
                <a href ="#">Model X</a>
                <a href ="#">Model Y</a>
                <a href ="#">Solar Roof</a>
                <a href ="#">Solar Panel</a>
            </Menu>
            <RightMenu>
                <a href ="#">Shop</a>
                <a href ="#">Account</a>
                <a href ="#" onClick = {()=> setCustomMenu(true)}>Menu</a>
            </RightMenu>
            <CustomMenu show ={customMenu}>
                <CustomCloseWrap>
                    <CustomClose onClick ={()=> setCustomMenu(false)}/>
                </CustomCloseWrap>
                <a href ="#">Existing Inventory</a>
                <a href ="#">Used Inventory</a>
                <a href ="#">Trade-In</a>
                <a href ="#">Test Drive</a>
                <a href ="#">Cybertruck</a>
                <a href ="#">Roadster</a>
                <a href ="#">Semi</a>
                <a href ="#">Charging</a>
                <a href ="#">Powerwall</a>
                <a href ="#">Commercial Energy</a>
                <a href ="#">Utilities</a>
                <a href ="#">Find Us</a>
                <a href ="#">Support</a>
                <a href ="#">Investor Relations</a>
                <a href ="#">United States</a>
                <a href ="#">English</a>
            </CustomMenu>
        </Container>
    )
}

export default Header

const Container = styled.div `
    display:flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 1;
`
const Menu = styled.div `
    display: flex;
    flex-wrap: nowrap;
    a{
    font-weight : 600;
    padding: 0 10px;
    }
    @media (max-width:768px){
        display:none;
    }
`
const RightMenu = styled.div `
    a{
    font-weight : 600;
    padding: 0 10px;
    }
    @media (max-width:768px){
        a:nth-child(1){
            display:none;
        }
        a:nth-child(2){
            display:none;
        }
    }
`
const CustomMenu = styled.div `
    display : flex;
    flex-direction :column;
    position : fixed;
    background: white;
    width:300px;
    top:0;
    right:0;
    bottom:0;
    z-index:1000;
    text-align:left;
    padding:20px 40px;

    a{
        font-weight : 600;
        padding: 10px 0;
        }
    transform :${props => props.show ? 'translateX(0%)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;
`
const CustomCloseWrap =styled.div `
        display: flex;
        justify-content: flex-end;
        padding: 10px 0;
`
const CustomClose = styled(CloseIcon) `
        cursor: pointer;
` 