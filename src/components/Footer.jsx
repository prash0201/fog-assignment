import React from 'react'
import { FooterData } from '../data/FooterData'

const Footer = () => {
  return (
    <div className='h-[10rem] w-full bg-orange-100 flex justify-evenly pt-[3.5rem] mt-[3rem] '>
        {
            FooterData.map((data,index) => (
                <div  className=' flex justify-items-center '>
                    <div>
                    <img src={data.image} alt="" height={40} width={40} />
                    </div>
                    
                    <div>
                        <p className='font-semibold'>{data.title}</p>
                        <p className='text-gray-500 font-medium'>{data.subTitle}</p>
                    </div>
                    
                </div>
            ))
        }
       

        

    </div>
  )
}

export default Footer
