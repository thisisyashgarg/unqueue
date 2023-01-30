import logo from '../images/homepage.svg'
import React from 'react'

export default function HomePage() {
  return(

    <div className='flex flex-col items-center pt-10'>
     <h1 className='font-bold text-6xl'>What is UnQueue?</h1>
     <img src={logo} alt="" className='pt-16'/>

     <ul className='space-y-2 text-2xl pt-16 font-semibold'>
    <li> • Eliminate physical queues</li>
      <li> • Join virtual queues from your device</li>
      <li> • Receive turn notifications</li>
      <li> • Convenient and efficient</li>
    </ul>
    
    <div className='pt-16 pb-10'>
    <button className="px-80 bg-blue-400 py-6 text-white font-semibold">Get Started</button>
    </div>

    </div>
  )
}