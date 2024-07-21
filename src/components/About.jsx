import React from 'react'
import pic from '../assets/Front.png'

const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

            <div>
                <div className='w-[400px] h-full'>
                    <img
                        src={pic}
                        alt=""
                        className='object-cover rounded-xl h-[300px] filter grayscale brightness-50'
                    />
                </div>
            </div>

            <div>
                <div className='p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>   I'm Reva Enad, a passionate software programmer with a keen interest in front-end development. 
                         With a background in Information Technology from the University of San Carlos and two years and five months of experience working as a Programmer, I've honed my skills in HTML, CSS, JavaScript, and React, enabling me to create dynamic and user-friendly web interfaces. 
                        </p>
                    </div>
                </div>
            

            <div className='flex mt-10 items-center gap-7'>
                <div className='bg-[#333333]/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>5
                            <span>+</span>
                    </h3>
                    <p><span className='md:text-base text-xs'>Projects</span></p>

                </div>

                <div className='bg-[#333333]/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>3
                            <span>+</span>
                    </h3>
                    <p><span className='md:text-base text-xs'>years experience</span></p>

                </div>

                {/* <div className='bg-[#333333]/40 p-5 rounded-lg'>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>5
                            <span>+</span>
                    </h3>
                    <p><span className='md:text-base text-xs'>Projects</span></p>

                </div> */}

            </div>


        </div>
        </div>
    </div>
  )
}

export default About