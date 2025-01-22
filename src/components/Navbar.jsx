import React from 'react'
import logo from "../assets/logos/Meubel House_Logos-05.png"
import { Link, NavLink } from 'react-router-dom'
import { NavbarLinks } from '../data/navBarLinks'
import { NavbarIcons } from '../data/navBarIcons'

const navBar = () => {
  return (
    <div className='flex bg-white justify-around h-14 w-full items-center justify-center '>
      <div className='  flex '>   
        <img src={logo} alt="Logo" width={50} height={32} loading="lazy"  />
        <p className='text-black'>Furniro</p>
      </div>

      <div className='text-black flex gap-8'>
        {
            NavbarLinks.map((link,index) => (
                <p>{link.title}</p>
            ))
        }
      </div>

      <div className='text-black flex gap-8'>
        {
            NavbarIcons.map((icon,index) => (
                 <img src={icon.image} alt=""  width={28} height={28} loading="lazy"/>
            ))
        }
      </div>
    </div>
  )
}

export default navBar




// import { useEffect, useState } from "react"
// import { NavbarLinks } from "../data/navBarLinks"
// import { Link, matchPath, useLocation } from "react-router-dom"

// import logo from "../assets/logos/Meubel House_Logos-05.png"
  
 

// function Navbar() {
   
//   const location = useLocation()

 

   

  

//   const matchRoute = (route) => {
//     return matchPath({ path: route }, location.pathname)
//   }

//   return (
//     <div
//       className={`flex w-11/12 h-14 items-center justify-center border-b-[1px] border-b-richblack-700 ${
//         location.pathname !== "/" ? "bg-richblack-800" : ""
//       } transition-all duration-200`}
//     >
//       <div className="flex w-11/12 max-w-maxContent items-center justify-between">
//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
//         </Link>
//         {/* Navigation links */}
//         <nav className="hidden md:block">
//           <ul className="flex gap-x-6 text-richblack-25">
//             {NavbarLinks.map((link, index) => (
//               <li key={index}>
//                 {
//                  (
//                   <Link to={link?.path} >
//                     <p
//                       className={`${
//                         matchRoute(link?.path)
//                           ? "text-yellow-25"
//                           : "text-richblack-25"
//                       }`}
//                     >
//                       {link.title}
//                     </p>
//                     <p>ferfre</p>
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </nav>
//         {/* Login / Signup / Dashboard */}
//         <div className="hidden items-center gap-x-4 md:flex">
           
           
           
           
//         </div>
         
//       </div>
//     </div>
//   )
// }

// export default Navbar
