import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "../BurguerButton";

function Menu() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <>
            <NavContainer>
                <h2>CinePlusHD+</h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a href="/">Inicio</a>
                    <a href="/">Estreno de péliculas</a>
                    <a href="/">Estreno de series</a>
                    <a href="/">Categorias</a>
                    <a href="/">Contacto</a>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick} />
                </div>
                <BgDiv className={`initial ${clicked ? 'active' : ''}`}/>
            </NavContainer>

        </>

    )
}

export default Menu;

const NavContainer = styled.nav`
    h2{
        font-weight: 400;

    }

    padding: .4rem;
    display: flex;
    background-color: #0E0F20;
    align-items: center;
    justify-content: space-between;

    a{
        text-decoration: none;
        margin-right: 1rem;
    }

    .burguer{
        @media(min-width: 768px) {
            display: none;
        }
    }

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        a{
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px) {
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                display: inline;
            }
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
        }
    }
`
const BgDiv = styled.div`
        position: absolute;
        background-color: #0E0F20;
        top: -1000px;
        left: -1000px;
        width: 100%;
        height: 100%;
       

        &.active{
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        
`