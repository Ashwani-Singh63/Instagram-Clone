import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBars, faAt, faSearch, faCompass, faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import instaLogo from '../assets/insta.svg'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import Ashwani_pic from '../assets/image/ashwani-01.jpg'

const Navbar = () => {
  return (
    <div className='h-[100vh] w-[15%] flex flex-col justify-between '>
    
      <div className='px-4'>
        <div className='flex justify-start my-12 ml-4'>
          <img src={instaLogo} className="logo" alt="Insta logo" />
        </div>

        <div className='flex mt-2 hover:bg-slate-100 duration-300 rounded-lg p-4'>
          <FontAwesomeIcon className='my-1 h-5 w-12' icon={faHouse} />
          <p className=' mx-4 '>Home</p>
        </div>

        <div className='flex mt-2 hover:bg-slate-100 duration-300 rounded-lg p-4'>
          <FontAwesomeIcon className='my-1 h-5 w-12' icon={faSearch} />
          <p className=' mx-4'>Search</p>
        </div>

        <div className='flex mt-2 hover:bg-slate-100 duration-300 rounded-lg p-4'>
          <FontAwesomeIcon className='my-1 h-5 w-12' icon={faCompass} />
          <p className=' mx-4'>Explore</p>
        </div>

        <div className='flex mt-2 hover:bg-slate-100 duration-300 rounded-lg p-4'>
          <FontAwesomeIcon className='my-1 h-5 w-12' icon={faFacebookMessenger} />
          <p className=' mx-4'>Messages</p>
        </div>

        <div className='flex mt-2 hover:bg-slate-100 duration-300 rounded-lg p-4'>
          <FontAwesomeIcon className='my-1 h-5 w-12' icon={faSquarePlus} />
          <p className=' mx-4'>Create</p>
        </div>

        <div className='flex mt-2 hover:bg-slate-100 duration-300 rounded-lg p-4 pl-6'>
          <img src={Ashwani_pic} className='h-8 w-8 rounded-[50%] object-center ' alt="Profile Pic"  />
          <p className=' mx-4'>Profile</p>
        </div>

      </div>  


      <div className='px-4'>


        <div className='flex mt-2 hover:bg-slate-100 duration-300 rounded-lg p-4'>
          <FontAwesomeIcon className='my-1 h-5 w-12' icon={faAt} />
          <p className=' mx-4'>Thread</p>
        </div>

        <div className='flex mt-2 mb-8 hover:bg-slate-100 duration-300 rounded-lg p-4'>
          <FontAwesomeIcon className='my-1 h-5 w-12' icon={faBars} />
          <p className=' mx-4'>More</p>
        </div>

      </div>
    
    </div>
  )
}

export default Navbar
