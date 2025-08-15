import React from 'react'
import mainLogo from '/medicare.svg';
import Animated from '../components/Animated';
import AdminContainer from '../components/AdminContainer';



export const AdminRegister = () => {
    

    // This is the main admin register page
    return (
        <div className='h-screen bg-linear-to-r from-[#ECE9E6] to-[#FFFFFF]'>

            {/* main logo */}
            <img src={mainLogo} alt="" className='w-52' />

            {/* text container */}
            <div className='w-full absolute top-0 mt-10 p-5 '>
                <h2 className='text-5xl font-bold text-center text-black leading-12'>HELLO THERE 😍 <br />WELCOME TO MEDICARE ADMIN <br /> ONBOARDING</h2>
                <br />
                <p className='text-[#747272] text-center'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a <br /> galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            </div>

            {/* fallback container */}
            <div className='w-32 h-24 absolute top-5 rounded right-0'>
                <Animated color='primary:black'/>
            </div>

            {/* admin form tracker system */}
                <AdminContainer />

        </div>
    )
}


