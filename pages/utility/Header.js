import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react";


function Header(props){
    return (
        <nav className='py-10 mb-3 flex justify-between'>
            <h1 className='text-xl font-burtons' >Abhishek</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer'
                  onClick={() => props.switchMode()}
                />
              </li> 
              <li>
                <a 
                  className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8  '
                  href='https://drive.google.com/file/d/15qQTzyQY8OaVV_XLfV9912veLQ59S33j/view?usp=sharing'
                  >
                    Resume
                </a>
              </li>
            </ul>
          </nav>
    )
}

export default Header;