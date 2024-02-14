import React from 'react';

const Error = () => {
    return (
        <div className="flex items-center justify-center pt-52">
            <div className="p-6 text-white bg-red-500 rounded-lg shadow-lg">
                <h2 className="mb-4 text-3xl font-semibold">Internal Server Error</h2>
                <p className="text-lg">Oops! Something went wrong on our end. Please try again later.</p>
            </div>
        </div>
    );
};

export default Error;
