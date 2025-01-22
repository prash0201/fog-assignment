import React from 'react'
import {CardsData} from "../data/CardsData"
import Card from "../components/Card"

const Products = () => {
  return (
    <div className='flex gap-5 flex-wrap mx-[4.6rem] mt-10'>
       {
        CardsData.map((cardDetail,index) => (
            <Card cardDetail={cardDetail}/>
        ))
       }
    </div>
  )
}

export default Products
