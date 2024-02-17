import React from 'react'

const ProCard = (props) => {
    const { name, brand, description, price, stock, discountPercentage, image
    } = props.pro;
    return (
        <div className='p-3 border-4 rounded-lg bg-slate-200 ' >
            <div className='flex justify-between'>
                <h2 className='pb-2 font-bold '>{name}<p className='text-red-500 '>{brand}</p></h2>
                <h2 className='pb-2 font-bold text-green-800'>${price}</h2>
            </div>
            <div className='flex justify-center h-44'>
                <img className='rounded-md shadow-lg w-60' src={image} />
            </div>
            <p className='p-3 font-semibold '>{description}</p>
            <div className='flex justify-between pl-2'>
                <h3 className='p-1 pl-1 pr-1 font-semibold bg-white backdrop-blur-sm rounded-2xl '>Stock :{stock}</h3>
                <h2 className='pb-2 font-bold text-orange-700'>{discountPercentage} discount</h2>
            </div>
        </div>
    )
}

export default ProCard