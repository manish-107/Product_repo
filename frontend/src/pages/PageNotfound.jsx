import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center pt-52">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">Page Not Found</h1>
            <p className="mb-8 text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/')} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline">
                Go to Home
            </button>
        </div>
    );
};

export default PageNotFound;
