import React, { useState } from 'react';
import styled from 'styled-components';
import Image from './Image';

const BoxStyled = styled.div`
    margin: 0 auto;
    width: 90%;
`

const SurrondingStyle = styled.div`
    display: flex;
    justify-content: space-between;
`

const ButtonStyled = styled.p`
    transform: rotate(${props => props.flipButton ? '180deg' : '0deg'});
    transition: transform 0.5s;
`

const DescriptionBoxStyled = styled.div`
    height: auto;
    max-height: ${props => {
        return props.showDescription ? '1000px' : 0
    }};
    overflow: hidden;
    transition: max-height 0.5s;
`

export default function ContentBox({content}){
    const [showDescription, setShowDescription] = useState(false);

    const copyright = content.copyright;
    const date = content.date;
    const description = content.explanation;
    const hdurl = content.hdurl;
    const title = content.title;
    const url = content.url;

    console.log(showDescription);

    return (
        <BoxStyled>
            <SurrondingStyle>
                <h2>{title}</h2>
                <h2>{date}</h2>
            </SurrondingStyle>
            <Image url={url} hdurl={hdurl} date={date}/>
            <SurrondingStyle>
                <p>{copyright}</p>
                <ButtonStyled flipButton={showDescription} onClick={() => setShowDescription(!showDescription)}>V</ButtonStyled>
            </SurrondingStyle>
            <DescriptionBoxStyled showDescription={showDescription}>
                <p>{description}</p>
            </DescriptionBoxStyled>
        </BoxStyled>
    )
}