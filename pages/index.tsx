import React, {useEffect} from 'react';

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { jobTypes } from 'data/jobtypes';
import Jobs from '../data/JobData.json';
import { useRole } from "../store/RoleContext";


import JobMenu from '../components/JobMenu'
import MainContent from '../components/MainContent'



export default function Home({jobs}) {
  const {role, setRole} = useRole();

  

  const RoleSelected = () => {
    return(
      <>
        Role Selected: {role.Name}
      </>
    )
  }


  return (
    <>
      <Head>
        <title>Final Fantasy XIV Hotbar Designer</title>
        <meta name="description" content="Create Hotbar Designs for FFXIV" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      
      <main className="container mx-auto my-12">
        <div>
        <h2>{role ? <RoleSelected /> : "No Job Selected"}</h2>
          
        <JobMenu jobs={Jobs}/>

        {role ? <MainContent role={role} /> : <div>Select a Job</div>}
        </div>
        <div id="portal" />
      </main>

      <div id="globalLoader">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
</div>
    </>
  )
}
