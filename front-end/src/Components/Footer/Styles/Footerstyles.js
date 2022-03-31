import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 5%;
    background: radial-gradient(circle, rgba(229,82,65) 100% , rgba(112,71,247,1) 100%);
 `
 export const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
    flex-wrap: nowrap
 `
 export const Column=styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 15%;

 `
export const Row=styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill);
    grid-gap: 6.5%;
   
    @media screen {
        max: width 100px;
        grid-template-columns: repeat(auto-fill, minmax(18%, 1fr))
        
    }
`
export const Link=styled.div`
    color: #fff;
    margin-bottom: 6%;
    text-decoration: none;
    
    &:hover{
        color: #ff9c00;
        text-decoration: underline;
        transition: 200ms ease-in;
    }
`
export const Title=styled.div`
    font-size: 150%;
    color: #fff;
    margin-bottom: 12%;
    font-weight: bold;
 `