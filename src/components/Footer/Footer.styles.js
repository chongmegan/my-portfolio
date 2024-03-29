import styled from 'styled-components';

const Copyright = styled.footer`
    width: 100%;
    text-align: center;
    background-color: #0f2027;
    padding: 2rem 0;
    position: relative;
`

const Up = styled.div`
    position: absolute;
    width: 5rem;
    height: 5rem;
    background-color: #eee;
    top: -2.5rem;
    right: 5rem;
    border-radius: 100%;
    display: flex;
    animation: pulse 2s infinite;
    cursor: pointer;
`

const UpIcon = styled.i`
    color: #0f2027;
    padding-top: 1rem;
    font-size: 3rem;
    margin: auto;
`

const FooterText = styled.p`
    font-family: 'Circular Std', 'Montserrat', Helvetica, sans-serif;
    font-size: 1.4rem;
    color: #ffffff;
`

export { 
    Copyright,
    Up,
    UpIcon,
    FooterText
}