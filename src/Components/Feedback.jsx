import React from 'react'
import Profile_Pic from '../assets/image/ashwani-01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faSave, faSmile } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';

const Feedback = () => {
  return (
    <div className='pl-[700px]'>

      {/* Status bar */}
    
      <div className=' h-[200px] w-[60%] flex  justify-end pt-6  gap-4 overflow-y-hidden'>

        <div className='w-[100px] h-[150px] text-center overflow-hidden flex flex-col  justify-center'>

            <img src={Profile_Pic} className='h-[80p] w-[80px] rounded-[50%] border-2 border-red-500 p-1 ' alt="" />

            <p className='w-[80px]'>ashwani__singh63</p>

        </div>

        <div className='w-[100px] h-[150px] text-center overflow-hidden flex flex-col  justify-center'>

            <img src={Profile_Pic} className='h-[80p] w-[80px] rounded-[50%] border-2 border-red-500 p-1 ' alt="" />

            <p className='w-[80px]'>ashwani__singh63</p>

        </div>

        <div className='w-[100px] h-[150px] text-center overflow-hidden flex flex-col  justify-center'>

            <img src={Profile_Pic} className='h-[80p] w-[80px] rounded-[50%] border-2 border-red-500 p-1 ' alt="" />

            <p className='w-[80px]'>ashwani__singh63</p>

        </div>

        <div className='w-[100px] h-[150px] text-center overflow-hidden flex flex-col justify-center'>

            <img src={Profile_Pic} className='h-[80p] w-[80px] rounded-[50%] border-2 border-red-500 p-1 ' alt="" />

            <p className='w-[80px]'>ashwani__singh63</p>

        </div>

        <div className='w-[100px] h-[150px] text-center overflow-hidden flex flex-col justify-center'>

            <img src={Profile_Pic} className='h-[80p] w-[80px] rounded-[50%] border-2 border-red-500 p-1 ' alt="" />

            <p className='w-[80px]'>ashwani__singh63</p>

        </div>

        <div className='w-[100px] h-[150px] text-center overflow-hidden flex flex-col  justify-center'>

            <img src={Profile_Pic} className='h-[80p] w-[80px] rounded-[50%] border-2 border-red-500 p-1 ' alt="" />

            <p className='w-[80px]'>ashwani__singh63</p>

        </div>

        <div className='w-[100px] h-[150px] text-center overflow-hidden flex flex-col  justify-center'>

            <img src={Profile_Pic} className='h-[80p] w-[80px] rounded-[50%] border-2 border-red-500 p-1 ' alt="" />

            <p className='w-[80px]'>ashwani__singh63</p>

        </div>

        

      
        
      </div>

      {/* Image Section */}

      <div className='w-[50%] h-[100%] mt-8 pl-12'>

        {/* First pic */}

        <div className='flex flex-col'>

          <div className='flex justify-between'>

            <div className='flex justify-start gap-2'>
              <img src={Profile_Pic} className='h-8 w-8 rounded-[50%] object-center ' alt="" />
              <p>ashwani__singh63 . 2d</p>
            </div>

            <div className=''>...</div>
            
          </div>

          <div >

            <img src={Profile_Pic} className='mt-2' alt="" />

          </div>

          <div className='flex justify-between'>

            <div className='flex justify-start items-center gap-5'>

              <FontAwesomeIcon className='my-2 h-5 w-5' icon={faHeart} />

              <FontAwesomeIcon className='my-2 h-5 w-5 ' icon={faCommentAlt} />

            </div>

            <div className=''>

              <FontAwesomeIcon className='my-2 h-5 w-5' icon={faBookmark} />

            </div>

          </div>

          <div className=''>20 likes</div>

          <div>View 1 comment</div>

          <div className='flex justify-between'>

            <p>Add a comment...</p>

            <FontAwesomeIcon icon={faSmile}/>

          </div>

        </div>

        <div className='w-[100%] h-[1px] bg-slate-400 my-8'></div>

        {/* Second pic */}

        <div className='flex flex-col'>

          <div className='flex justify-between'>

            <div className='flex justify-start gap-2'>
              <img src={Profile_Pic} className='h-8 w-8 rounded-[50%] object-center ' alt="" />
              <p>ashwani__singh63 . 2d</p>
            </div>

            <div className=''>...</div>
            
          </div>

          <div >

            <img src={Profile_Pic} className='mt-2' alt="" />

          </div>

          <div className='flex justify-between'>

            <div className='flex justify-start items-center gap-5'>

              <FontAwesomeIcon className='my-2 h-5 w-5' icon={faHeart} />

              <FontAwesomeIcon className='my-2 h-5 w-5 ' icon={faCommentAlt} />

            </div>

            <div className=''>

              <FontAwesomeIcon className='my-2 h-5 w-5' icon={faBookmark} />

            </div>

          </div>

          <div className=''>20 likes</div>

          <div>View 1 comment</div>

          <div className='flex justify-between'>

            <p>Add a comment...</p>

            <FontAwesomeIcon icon={faSmile}/>

          </div>

        </div>

        <div className='w-[100%] h-[1px] bg-slate-400 my-8'></div>

        {/* Third pic */}

        <div className='flex flex-col'>

          <div className='flex justify-between'>

            <div className='flex justify-start gap-2'>
              <img src={Profile_Pic} className='h-8 w-8 rounded-[50%] object-center ' alt="" />
              <p>ashwani__singh63 . 2d</p>
            </div>

            <div className=''>...</div>
            
          </div>

          <div >

            <img src={Profile_Pic} className='mt-2' alt="" />

          </div>

          <div className='flex justify-between'>

            <div className='flex justify-start items-center gap-5'>

              <FontAwesomeIcon className='my-2 h-5 w-5' icon={faHeart} />

              <FontAwesomeIcon className='my-2 h-5 w-5 ' icon={faCommentAlt} />

            </div>

            <div className=''>

              <FontAwesomeIcon className='my-2 h-5 w-5' icon={faBookmark} />

            </div>

          </div>

          <div className=''>20 likes</div>

          <div>View 1 comment</div>

          <div className='flex justify-between'>

            <p>Add a comment...</p>

            <FontAwesomeIcon icon={faSmile}/>

          </div>

        </div>



      </div>
    
    </div>
    
  )
}

export default Feedback
