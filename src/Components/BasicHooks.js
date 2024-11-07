import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';

const BasicHooks = (props) => {
    const [data, setData] = useState(null);
    const [isSubscribed, setIsSubscribed] = useState(false);

    const { userdata, FilmsType, updateFilmsTypeHandler } = useContext(DataContext);

    // console.log(FilmsType);

    // updateFilmsTypeHandler();
    
    // Function to simulate an API call
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
    };
    
    // Simulating a subscription setup (e.g., WebSocket or event listener)
    const subscribe = () => {
        setIsSubscribed(true);
        // Simulated subscription logic
        console.log('Subscribed to data stream');
    };
    
    const unsubscribe = () => {
        setIsSubscribed(false);
        // Simulated unsubscription logic
        console.log('Unsubscribed from data stream');
    };
    
    useEffect(() => {
        // Fetch data when the component mounts
        // fetchData();
        
        // Subscribe when the component mounts
        // subscribe();
        
        // Cleanup function
        // return () => {
        //     // Cleanup the subscription
        //     unsubscribe();
        //     console.log('Cleanup on unmount');
        // };
    }, []); // Empty dependency array means it runs once on mount
    
    return (
        <div>
        {/* <h1>Data Fetcher</h1>
        {data ? (
            <ul>
            {data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )}
        <p>Status: {isSubscribed ? 'Subscribed' : 'Not Subscribed'}</p> */}
        <p>{FilmsType}</p>
        <button onClick={() => updateFilmsTypeHandler('asfasdf')}>update film type</button>
        </div>
    );
};

export default BasicHooks;