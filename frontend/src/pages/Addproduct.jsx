import React from 'react'

const Addproduct = () => {
    return (
        <>
            <form className='flex items-center justify-center mt-10 '>
                <div className='p-8 rounded-lg shadow-md gap-y-1 gap-x-10 bg-gray-2 00 sm:grid-cols-1 lg:grid-cols-2 sm:grid lg:grid bg-slate-300'>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 font-semibold">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" class="p-1 form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 font-semibold">Price:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" class="p-1 form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 font-semibold">Brand:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" class="p-1 form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 font-semibold">Category:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" class="p-1 form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 font-semibold">Stock:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" class="p-1 form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 font-semibold">DiscountPercentage:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" class="p-1 form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div class="mb-4 col-span-2">
                        <label for="name" class="block text-gray-700 font-semibold">Image Link:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" class="p-1 form-input mt-1 block w-full border border-gray-300 rounded-md shadow-sm" />
                    </div>
                    <div class="mb-4 col-span-2">
                        <label for="name" class="block text-gray-700 font-semibold">Description:</label>
                        <input type="text" id="name" name="name" class="p-1 form-input mt-1 block w-full border h-16 border-gray-300 rounded-md shadow-sm" />
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