
import React, {useEffect} from 'react';
import { useQuery } from 'react-query';

// Define a function to fetch data


const DataFetchingComponent = ({type}) => {
    // Use the useQuery hook to fetch data
    console.log("data component refreshed")

    const fetchData = async () => {
        const response = await fetch(type==="posts"?'https://jsonplaceholder.typicode.com/posts' : 'https://jsonplaceholder.typicode.com/users');
    
        const data = await response.json();
        return data;
    };

    const { data, isLoading, isError, refetch } = useQuery(type, fetchData, {
        refetchOnMount: false,
        refetchOnReconnect: false,
    });

    useEffect(() => {
      console.log("mounted")
    
      return () => {
        console.log("unmounted")
      }
    }, [])
    

    // Render loading and error states
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching data</p>;
    }

    const handleRefetch = () => {
        refetch();
    }

    // Render the actual data
    return (
        <div>
            <button onClick={handleRefetch}>Refetch</button>
            <h1>Data:{type}</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataFetchingComponent;