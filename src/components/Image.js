import React from 'react';

export default function Image({url, hdurl, date}){
    return (
        <div>
            <a href={hdurl}>
                <img src={url} alt={`Failed to load image for ${date}`}></img>
            </a>
        </div>
    )
}