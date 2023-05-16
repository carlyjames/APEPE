import { Divider } from '@mui/material'
import CopyrightIcon from '@mui/icons-material/Copyright';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='lg:px-24 px-8 py-16 font-bold lg:text-xl'>
      <Divider />
      <div className='flex lg:flex-row flex-col items-center justify-around py-8 gap-4'>
        <Link to='/terms'>
          <p className='hover:text-[#000000] ease'>Terms of use</p>
        </Link>
        <Link to='mailto: Team@AngryPepe.wtf'>
          <p className='hover:text-[#000000] ease'>Contact Us</p>
        </Link>
        <Link to='/vision'>
          <p className='hover:text-[#000000] ease'>Vision</p>
        </Link>
        <div>
          <p> <CopyrightIcon /> 2023 Ho Lee $heet. It's okay to be Ho Lee $heet. </p>
          <p>Team @AngryPepe.wtf</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer