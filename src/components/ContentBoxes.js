import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ContentBox from './ContentBox';
import { NASA_API_KEY } from '../apiKeys/key';

const baseURL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

const ColumnStyled = styled.div`
    background-color: whitesmoke;
    margin: 0 auto;
    min-width: 700px;
    width: 50%;
`

export default function ContentBoxes(){
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(baseURL)
            .then( response => response.json())
            .then( response => {
                
                const data = [];
                for(let i = 0; i < 10; i++)
                    data.push({...response, id: i});
                setData(data);
                //setData([response]);
            })
            .catch( err => console.log(err))
    }, [])

    return (
        <ColumnStyled>
            {console.log(data)}
            {data.map( content => <ContentBox key={content.id} content={content}/>)}
        </ColumnStyled>
    )
}