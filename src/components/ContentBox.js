import React, { useState } from 'react';
import Image from './Image';

export default function ContentBox({content}){
    const [showDescription, setShowDescription] = useState(false);

    const copyright = content.copyright;
    const date = content.date;
    const description = content.explanation;
    const hdurl = content.hdurl;
    const title = content.title;
    const url = content.url;

    return (
        <div>
            <div>
                <h2>{title}</h2>
                <h2>{date}</h2>
            </div>
            <Image url={url} hdurl={hdurl} date={date}/>
            <div>
                <p>{copyright}</p>
                <div onClick={setShowDescription(!description)}></div>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}