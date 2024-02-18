import React, { useState } from 'react'
import ProCard from '../components/ProCard';
import { useQuery } from '@tanstack/react-query';
import { fetchPage } from '../assets/api';
import LoadingPage from './LoadingPage';
import Error from './Error';

const Pagination = () => {
    const [page, setPage] = useState(1);
    const { isLoading, isError, data: pageData } = useQuery({
        queryKey: ["getpage", { page }],
        queryFn: () => fetchPage(page),
        staleTime: 10 * (60 * 1000),
    });

    if (isLoading) return <LoadingPage />;
    if (isError) return <Error />;
    return (
        <div className='pb-5 bg-slate-500'>
            <div >
                <div className='flex justify-center p-3 text-3xl font-bold'>Pagination</div>
                <div className='grid p-5'>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {pageData.products.map((pro) => (
                            <ProCard key={pro.id} pro={pro} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-5 ml-5 mr-5 shadow-lg rounded-2xl bg-slate-400'>
                <button className='px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300' disabled={!pageData.hasPreviousPage} onClick={() => setPage((oldPage) => Math.max(oldPage - 1, 1))}> prev</button>
                <p className='pt-2 pl-5 pr-5 font-extrabold font'>{pageData.currentPage}</p>
                <button className='px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300' disabled={!pageData.hasNextPage} onClick={() => setPage((oldPage) => oldPage + 1)}>Next</button>
            </div>
        </div>
    );
}

export default Pagination