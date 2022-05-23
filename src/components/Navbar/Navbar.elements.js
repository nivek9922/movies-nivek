import styled from "styled-components";  

export const Container = styled.div`
    width: 100%;
    background-color: #0E0F20;

`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    
    
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-family: sans-serif;

    svg {
        margin-right: 0.5rem;
    }

`;

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
   
    

    @media screen and (max-width: 1200px){
        background-color: #0E0F20;
        position : absolute;
        top: 59px;
        left: ${({open}) => (open ?  "0%" : "-110%")}; //importante propiedad
        width: 100%;
        height: 60%;
        padding: 0rem 0rem 0rem;
        justify-content: center;
        flex-direction: column; 
        transition: 0.5s ease;
       
        
    }
`;

export const MenuItem = styled.li`
    height: auto;
    

    @media screen and (max-width: 1200px){
        width: 100%;
        height: 60px;
        cursor: pointer;
        
        
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    border-left: 1px solid hsla(0,0%,100%,.4);
    align-items: center;
    height: auto;
    margin-top: 0.9rem;
    padding: 0.1rem 1.3rem;
    color: #fff;
    font-family: sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color: #B61414;
        transition: 0.5s all ease;
    }

    
    
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1200px) {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg{
            margin-right: 1rem;
            padding: 0.1rem;
        }
    }

`;

export const SearchBuscar = styled.div`
    padding: 0rem 1rem 0rem;
    justify-content: right;
    font-family: sans-serif;
    width: auto;
    
`;

export const Menu2 = styled.div`
    display: flex;
    margin-top: 1.15rem;
    list-style: none;

    @media screen and (max-width: 1200px){
        background-color: #0E0F20;
        margin-top: 1rem;
        position : absolute;
        top: ${({open}) => (open ?  "7.6%" : "-110%")}; //importante propiedad
        width: 100%;
        transition: 0s;
       
        
    }
`;





