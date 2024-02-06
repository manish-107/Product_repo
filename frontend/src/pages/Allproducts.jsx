import React from 'react'
import ProCard from '../components/ProCard'

const Allproducts = () => {
    return (
        <div className=' bg-slate-500'>
            <div className='flex justify-center p-3 text-3xl font-semibold'>All Products</div>
            <div className='grid grid-rows-3 p-5'>
                <div className="grid grid-cols-4 gap-5">
                    <ProCard />
                    <ProCard />
                    <ProCard />
                    <ProCard />
                    <ProCard />
                </div>
            </div>
        </div >
    )
}

export default Allproducts