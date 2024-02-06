import React from 'react'

const Addproduct = () => {
    return (
        <>
            <form className='flex items-center justify-center mt-10 '>
                <div className='w-3/5 p-8 rounded-lg shadow-md  gap-y-1 gap-x-10 bg-gray-2 00 sm:grid-cols-1 lg:grid-cols-2 sm:grid lg:grid bg-slate-300'>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold text-gray-700">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold text-gray-700">Price:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold text-gray-700">Brand:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold text-gray-700">Category:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold text-gray-700">Stock:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold text-gray-700">DiscountPercentage:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" />
                    </div>
                    <div className="col-span-2 mb-4">
                        <label htmlFor="name" className="block font-semibold text-gray-700">Image Link:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" />
                    </div>
                    <div className="col-span-2 mb-4">
                        <label htmlFor="name" className="block font-semibold text-gray-700">Description:</label>
                        <input type="text" id="name" name="name" className="block w-full h-16 p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" />
                    </div>
                    <div className='col-span-2'>
                        <button className='w-full p-2 font-extrabold text-white bg-blue-500 rounded-lg shadow-2xl' type="button">Button</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Addproduct