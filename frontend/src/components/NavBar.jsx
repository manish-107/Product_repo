import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div className="flex gap-6 p-6 font-bold text-white bg-black">
            <div className='cursor-pointer ' onClick={() => navigate('/addproduct')}>Add Products</div>
            <div className='cursor-pointer ' onClick={() => navigate('/')}>Products</div>
            <div className='cursor-pointer ' onClick={() => navigate('/page')}>Pagination</div>
        </div>


    )
}

export default NavBar