import React, { useEffect } from 'react'
import ProCard from '../components/ProCard';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../assets/api';
import LoadingPage from './LoadingPage';
import Error from './Error';

const Allproducts = () => {

    const { isLoading, isError, data } = useQuery({
        queryKey: ["product"],
        queryFn: fetchProducts,
        staleTime: 10 * (60 * 1000),
    })
    if (isLoading) return <LoadingPage />

    if (isError) return <Error />

    return (
        <div className=' bg-slate-500'>
            <div className='flex justify-center p-3 text-3xl font-semibold'>All Products</div>
            <div className='grid p-5'>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.map((pro) => (
                        <ProCard key={pro._id} pro={pro} />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Allproducts