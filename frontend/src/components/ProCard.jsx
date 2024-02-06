import React from 'react'

const ProCard = () => {
    return (
        <div className='p-3 border-4 rounded-lg bg-slate-200 ' >
            <div className='flex justify-between'>
                <h2 className='pb-2 font-bold '>iPhone 9 <p className='text-red-500 '>Apple</p></h2>
                <h2 className='pb-2 font-bold text-green-800'>$899</h2>
            </div>
            <img className='rounded-md shadow-lg ' src='https://cdn.dummyjson.com/product-images/1/thumbnail.jpg' />
            <p className='p-3 font-semibold '>SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...</p>
            <div className='flex justify-between pl-2'>
                <h3 className='p-1 pl-1 pr-1 font-semibold bg-white backdrop-blur-sm rounded-2xl '>Stock :34</h3>
                <h2 className='pb-2 font-bold text-orange-700'>17.94</h2>
            </div>
        </div>
    )
}

export default ProCard