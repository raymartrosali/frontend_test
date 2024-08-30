"use client";
// implement use client so that I can make use of React Hooks like useState and use Effect
import React, { useState, useEffect } from 'react';
// import the needed hooks and React
import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./gallery";

export default function Home() {
  // data from https://jsonplaceholder.typicode.com/users
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Sets up the needed states
  // users the container in which where we will store the fetched data
  // loading the container which will be the triger if the site is still loading

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // fetched the data from the api

        if (!response.ok) {
          throw new Error('There was a problem in fetching information');
        }
        // will throw the error message to the catch
        
        const data = await response.json();
        // converted the data to json
       
        // sets the loading to false
        setUsers(data);
        // stores the information gathered inside users state
    } catch (error) {
      setError(error.message);
      // stores the error information to the error state
    } finally{
      setLoading(false);
    }
  };
    // Created any asynchronous function so that it will be allowed to take its time before its triggered

    getUsers();
    // called the created function
  }, []);

  if (loading) return <p>Loading...</p>;
  // if the loading is still true it will show the loading and will dissapear once the loading status is set to false
  if (error) return <p>Error: {error}</p>;
   // if it has any errors it will be shown in the browser
  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
