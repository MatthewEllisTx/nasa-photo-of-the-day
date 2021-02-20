import React from 'react';
import styled from 'styled-components';

const ImageStyled = styled.img`
    width: 100%;
`

export default function Image({url, hdurl, date}){
    return (
        <a href={hdurl} target={'_blank'} rel={'noopener noreferrer'}>
            <ImageStyled src={url} alt={`Failed to load image for ${date}`}/>
        </a>
    )
}