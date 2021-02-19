import React, {useState, useEffect} from 'react';
import ContentBox from './ContentBox';

const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

export default function ContentBoxes(){
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch(baseURL)
            .then( response => response.json())
            .then( response => {
                // const data = [];
                // for(let i = 0; i < 10; i++)
                //     data.push({...response, id: i});
                // setData(data);
                setData([response]);
            })
            .catch( err => console.log(err))
    }, [])

    return (
        <div>
            {console.log(data)}
            {data.map( content => <ContentBox key={content.id} content={content}/>)}
        </div>
    )
}