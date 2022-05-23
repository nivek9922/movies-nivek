import React from "react";
import { BiCameraMovie, BiMenu, BiSearch} from "react-icons/bi";
import { FaTimes} from "react-icons/fa";
import { Container, LogoContainer, Menu, Menu2, MenuItem, MenuItemLink, MobileIcon, SearchBuscar, Wrapper } from "./Navbar.elements";
import { useState } from "react";
import { Search } from "../Search";
import { Link} from "react-router-dom";
/* import { IconContext } from "react-icons"; */

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showMobileMenuSearch, setShowMobileMenuSearch] = useState(false);

    return (
        <Container>
            <Wrapper>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    {
                         showMobileMenu ? <FaTimes size={30}/> :  <BiMenu size={40} /> 
                    } 
                </MobileIcon>

                <Link to={"/"}>
                    <LogoContainer>
                        <BiCameraMovie size={40} color={"#B61414"} />
                        <p>cineplusHD+</p>
                    </LogoContainer>
                </Link>

                <Menu open={showMobileMenu}>
                    <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <Link to="/">
                            <MenuItemLink>INICIO</MenuItemLink>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <MenuItemLink>ESTRENOS DE PELÍCULAS</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <Link to="/series">
                            <MenuItemLink>ESTRENOS DE SERIES</MenuItemLink>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <MenuItemLink>GÉNERO</MenuItemLink>
                    </MenuItem>
                    <MenuItem onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <MenuItemLink>CONTACTO</MenuItemLink>
                    </MenuItem>
                </Menu>

                <MobileIcon onClick={() => setShowMobileMenuSearch(!showMobileMenuSearch)}>
                    {
                        showMobileMenuSearch ? <FaTimes size={30}/> : <BiSearch size={30} />
                    }
                    
                </MobileIcon>

                <Menu2 open={showMobileMenuSearch}>
                    <MenuItem>
                        <SearchBuscar >
                            <Search />
                        </SearchBuscar>
                    </MenuItem>
                </Menu2>

            </Wrapper>
        </Container>
    )
}

