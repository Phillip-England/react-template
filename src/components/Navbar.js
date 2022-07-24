import { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import {header} from "../styled/header"
import {text} from '../styled/text'

let NavHeaderWrapper = styled.div`
    display:grid;
    height:50px;
    position:fixed;
    width:100%;
    background-color:white;
    box-shadow:var(--bs-light);
    z-index:var(--nav-header);
    grid-template-columns:50px auto;
    grid-template-areas:
        'icon header'
    ;
`

let HamburgerIcon = styled.i`
    grid-area:icon;
    align-self:center;
    justify-self:center;
    cursor:pointer;
    display:${props => props.active ? 'none' : 'block'};
`

let CloseIcon = styled.i`
    grid-area:icon;
    align-self:center;
    justify-self:center;
    cursor:pointer;
    display:${props => props.active ? 'block' : 'none'};
`

let NavHeader = styled.h1`
    ${header.sm}
    align-self:center;
    justify-self:center;
`

let NavMenuWrapper = styled.ul`
    position:fixed;
    z-index:var(--nav-menu);
    background-color:var(--lightgray);
    top:0px;
    width:66%;
    height:100vh;
    display:${props => props.active ? 'block' : 'none'};
`

let Spacer = styled.div`
    height:50px;
`

let NavMenuItem = styled.li`
    ${text.md}
    height:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    color:black;
`

let activeNavLink = {
    textDecoration:'underline',
}

export default function Navbar() {

    let routeConfig = [
        {key:0, name:'Home', path:'/'},
        {key:1, name:'Projects', path:'/projects'},
        {key:2, name:'Contact', path:'/contact'},
    ]

    let [navIsOpen, setNavIsOpen] = useState(false)

    return(
        <nav>

            <NavHeaderWrapper>
                <HamburgerIcon 
                    className={'fa-solid fa-bars'} 
                    active={navIsOpen}
                    onClick={()=>{setNavIsOpen(!navIsOpen)}}>
                </HamburgerIcon>
                <CloseIcon 
                    className={'fa-solid fa-x'} 
                    active={navIsOpen}
                    onClick={()=>{setNavIsOpen(!navIsOpen)}}>
                </CloseIcon>
                <NavHeader>Phillip England</NavHeader>
            </NavHeaderWrapper>

            <NavMenuWrapper
                active={navIsOpen}>
                <Spacer></Spacer>
                {routeConfig.map(route => 
                <NavLink
                    key={route.path}
                    to={route.path}
                    style={({isActive}) =>
                        isActive ? activeNavLink : null
                    }
                    onClick={()=>{
                        setNavIsOpen(!navIsOpen)}}> 
                    <NavMenuItem >
                        {route.name}
                    </NavMenuItem>
                </NavLink>
                )}
            </NavMenuWrapper>
            
            {/* pushes content below nav bar */}
            <Spacer></Spacer>

        </nav>

    )
}