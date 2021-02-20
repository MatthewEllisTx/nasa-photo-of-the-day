import React, { useState } from 'react';
import styled from 'styled-components';
import Image from './Image';
import Video from './Video'

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

function getImageData(content){
    return {
        copyright: content.copyright,
        date: content.date,
        description: content.explanation,
        hdurl: content.hdurl,
        title: content.title,
        url: content.url
    }
}

function getVideoData(content){
    return {
        date: content.date,
        description: content.explanation,
        title: content.title,
        url: content.url
    }
}

export default function ContentBox({content}){
    const [showDescription, setShowDescription] = useState(false);

    const data = content.media_type === 'image' ? getImageData(content) : getVideoData(content);

    // const copyright = content.copyright;
    // const date = content.date;
    // const description = content.explanation;
    // const hdurl = content.hdurl;
    // const title = content.title;
    // const url = content.url;

    console.log(showDescription);

    return (
        <BoxStyled>
            <SurrondingStyle>
                <h2>{data.title}</h2>
                <h2>{data.date}</h2>
            </SurrondingStyle>
            {content.media_type === 'image' ? <Image url={data.url} hdurl={data.hdurl} date={data.date}/> : <Video url={data.url} title={data.title}/>}
            <SurrondingStyle>
                <p>{data.copyright}</p>
                <ButtonStyled flipButton={showDescription} onClick={() => setShowDescription(!showDescription)}>V</ButtonStyled>
            </SurrondingStyle>
            <DescriptionBoxStyled showDescription={showDescription}>
                <p>{data.description}</p>
            </DescriptionBoxStyled>
        </BoxStyled>
    )
}