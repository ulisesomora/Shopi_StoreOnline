import React, {useContext} from 'react'

import { PlusIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Card = ({data}) => {
    const context = useContext(ShoppingCartContext)
  return (
    <div className='bg-white coursor-pointer w-56 h60 rounded-lg'
    onClick={()=>context.openProductDetail()}
    >
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
            <img className='w-full h-full object-cover rounded-lg' src={data.images[0]} alt={data.title} />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 cursor-pointer rounded-full m-2 p-1'
            onClick={()=>context.setCount((context.count + 1))}
            >
                <PlusIcon></PlusIcon>
            </div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>{data.title}</span>
            <span className='text-lg font-medium'>${data.price}</span>
        </p>
    </div>
  )
}

export default Card