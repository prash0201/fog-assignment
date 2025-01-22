import React from 'react'
import share from "../assets/ProductImages/Vector (2).png"
import compare from "../assets/ProductImages/Group (4).png"
import love from "../assets/ProductImages/Vector (3).png"

const Card = ({cardDetail}) => {
  return (
    <div className=' flex relative ' >
      <div className='flex   flex-col hover:opacity-50'>
         <div className='flex  ' class='card'>
            <img src={cardDetail.imageURL} alt=""  className='w-[12.5rem] h-[14.37rem]'   />
         </div>
         <div className='bg-rose-50 '>
            <div className='p-3'>
               <p className='font-semibold  leading-7'>{cardDetail.brandName}</p>
               <p>{cardDetail.subTitle}</p>
               <div className='flex justify-between'>
               <p className='font-semibold'>Rs. {cardDetail.prize}</p>
               {cardDetail.isDiscount === true &&  <del>Rs.{cardDetail.originalPrize}</del>}
               </div>
            </div> 
         </div>
      </div>
       
       <div className='flex flex-col  absolute top-0 w-full h-full   justify-center justify-items-center opacity-0  bg-black/50 transition-all hover:opacity-100 '    >
          <div className='mx-auto'>
            <button class='btn'>Add to cart</button>
          </div>
          <div className='flex gap-2 p-2'>
            <div className='flex'>
               <img className='text-black' src={share} alt="" width={10} height={10}/>
               <p className='text-lg'>Share</p>
            </div>
            <div className='flex'>
               <img src={compare} alt="" />
               <p>Compare </p>
            </div>
            <div className='flex'>
               <img src={love} alt="" />
               <p>Like</p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Card
