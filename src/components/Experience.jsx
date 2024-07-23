import React from 'react'

const Experience = () => {
  return (
    <div class='py-10 bg-[#232325]' id='experience'>
      <h2 className='mb-8 text-3xl text-white text-center'>My <span>Experience</span></h2>

      <div class='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
          <p>Bluewind Asia Corporation</p>
          <p className='text-gray-400'><i>Software Engineer</i></p>
          <p className='text-gray-400'>(November 2021-present)</p>
          <ul className='text-gray-500 list-disc pl-5'>
              <li>Developed responsive web applications using HTML5, CSS3, and React.js, ensuring compatibility across various devices and screen sizes.</li>
              <li>Collaborated with cross-functional teams to maintain a cohesive user experience for a real estate web platform, contributing to Agile development and sprint planning.</li>
              <li>Debugged and resolved front-end and back-end issues, ensuring smooth functionality across iOS, Android, web, and microservices.</li>
          </ul>
    </div>

      <div class='h-[50px]  w-[2px] bg-slate-400 my-1 mx-auto'></div>
      <div class='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
        <p>Fixel Co,. Ltd.</p>
        <p className='text-gray-400'><i>Front-end Developer</i></p>
        <p className='text-gray-400'>(June 2023 - September 2023)</p>
        <p className='text-gray-500'> HABJHVDSJHVAJDHVAJHV
        </p>
      </div>

      <div class='h-[50px]  w-[2px] bg-slate-400 my-1 mx-auto'></div>
      <div class='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
        <p>Increment Technologies</p>
        <p className='text-gray-400'><i>Front-end Developer Intern</i></p>
        <p className='text-gray-400'>(August 2020 - November 2020)</p>
        <p className='text-gray-500'> HABJHVDSJHVAJDHVAJHV
        </p>
      </div>


    </div>
  )
}

export default Experience