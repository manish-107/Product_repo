import React from 'react'
import MyLoader from '../components/MyLoader'

const LoadingPage = () => {
    return (
        <div className="grid justify-center grid-cols-1 gap-5 pt-8 pl-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:pr-12">
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
            <MyLoader />
        </div>
    )
}

export default LoadingPage