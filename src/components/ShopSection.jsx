import React from 'react'
import image from "../assets/logos/Rectangle 1.png"
import arrow from "../assets/logos/dashicons_arrow-down-alt2.png"
const ShopSection = () => {
  return (
    <div className='flex relative'>
      <img src={image} alt="" height={316} width={1440} />
      <div className='flex absolute flex-col translate-x-[28rem] translate-y-16 '>
        <p className='text-[48px] '>Shop</p> 
        <div className='flex justify-center justify-items-center'>
            <p className='text-[16px]'>Home</p>
            <img src={arrow} alt="" height={12} width={20} />
            <p  className='text-[16px]'>Shop</p>
        </div>
      </div>
    </div>
  )
}

export default ShopSection
