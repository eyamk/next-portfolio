import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Error from './_error'


const About =({user, statusCode})=>{
    if (statusCode){
        return  <Error statusCode={statusCode}/> 
    }
    return (
        <Layout title="About">
           <p>{user.name}</p>
           <img src={user.avatar_url} alt="Reed" height="200px"/>
        </Layout>
    );
}
export const getStaticProps = async () => {
    try{
        const res = await fetch('https://api.github.com/users/reedbarger');
        const data=  await res.json();
        const statusCode= res.status>200?res.status:false
        console.log('data on getStaticProps:::', data);
      
        return {
            props: {user:data, statusCode}
          }
    } catch(error) {
        console.log('errorrrr::', error)
        return {
            props: {xxx:null}
          }
          
    }

  }

export default About;