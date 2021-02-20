import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
    position: relative;
    width: 100%;
    height: 0px;
    padding-bottom: 56.25%;
`

const IframeStyled = styled.iframe`
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
`

export default function({url, title}){
    return (
        <ContainerStyled>
            <IframeStyled src={url} title={title}/>
        </ContainerStyled>
    )
}