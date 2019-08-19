import styled from 'styled-components';

import bgImage from '../../img/bg.png';


export const StyledTetrisWrapper = styled.div`
    width: 99vw;
    height: 46vw;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow:hidden;

`


export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 140px;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }

`
