import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postProducts } from '../assets/api'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate,
        isError: isPostError,
        isPending,
        onSuccess,
        isError,
        error: postError,
    } = useMutation({
        mutationFn: postProducts,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["product"],
                exact: true,
            })

            navigate('/')
        },

    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const price = parseFloat(e.target.elements.price.value);
        const brand = e.target.elements.brand.value;
        const category = e.target.elements.category.value;
        const discountPercentage = parseFloat(e.target.elements.discountpercentage.value);
        const stock = parseInt(e.target.elements.stock.value, 10);
        const image = e.target.elements.image.value;
        const description = e.target.elements.desc.value;
        mutate({ name, price, brand, category, discountPercentage, stock, image, description });
    };

    return (
        <>
            <form className='flex items-center justify-center mt-10 ' onSubmit={handleSubmit}>
                <div className='w-3/5 p-8 rounded-lg shadow-md gap-y-1 gap-x-10 bg-gray-2 00 sm:grid-cols-1 lg:grid-cols-2 sm:grid lg:grid bg-slate-300'>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-semibold text-gray-700">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="price" className="block font-semibold text-gray-700">Price:</label>
                        <input type="number" id="price" name="price" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="brand" className="block font-semibold text-gray-700">Brand:</label>
                        <input type="text" id="brand" name="brand" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block font-semibold text-gray-700">Category:</label>
                        <select id="category" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input">
                            <option value="phone">Smartphones</option>
                            <option value="laptop">Laptops</option>
                            <option value="fragrance">Fragrances</option>
                            <option value="skincare">Skincare</option>
                            <option value="groceries">Groceries</option>
                            <option value="home-decoration">home-decoration</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="stock" className="block font-semibold text-gray-700">Stock:</label>
                        <input type="number" id="stock" name="stock" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="discountpercentage" className="block font-semibold text-gray-700">DiscountPercentage:</label>
                        <input type="number" id="discountpercentage" name="discountpercentage" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" required />
                    </div>
                    <div className="col-span-2 mb-4">
                        <label htmlFor="image" className="block font-semibold text-gray-700">Image Link:</label>
                        <input type="text" id="image" name="image" placeholder="Enter the text" className="block w-full p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" required />
                    </div>
                    <div className="col-span-2 mb-4">
                        <label htmlFor="desc" className="block font-semibold text-gray-700">Description:</label>
                        <input type="text" id="desc" name="desc" className="block w-full h-16 p-1 mt-1 border border-gray-300 rounded-md shadow-sm form-input" required />
                    </div>
                    <div className='col-span-2'>
                        <button type='submit' className='w-full p-2 font-extrabold text-white bg-blue-500 rounded-lg shadow-2xl' >Button</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Addproduct