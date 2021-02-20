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
    const [date, setDate] = useState({ start_date: '', goBack: 10 });

    function getDateInRange(start_date, goBack){
        const end_date = new Date(Date.now() - goBack * 24 * 60 * 60 * 1000).toISOString().substring(0, 10);
        setDate({ start_date: end_date, goBack: goBack += 10 });
        return fetch(`${baseURL}&start_date=${end_date}&end_date=${start_date}`)
                .then( response => response.json())
    }

    useEffect(() => {
        fetch(baseURL)
            .then( response => response.json())
            .then( response => {
                return getDateInRange(response.date, date.goBack);
            })
            .then( response => setData(response.reverse()))
            // .then( response => {
                
            //     const data = [];
            //     for(let i = 0; i < 10; i++)
            //         data.push({...response, id: i});
            //     setData(data);
                //setData([response]);
            //})
            .catch( err => console.log(err))
    }, [])

    return (
        <ColumnStyled>
            {console.log(data)}
            {data.map( content => <ContentBox key={content.date} content={content}/>)}
        </ColumnStyled>
    )
}