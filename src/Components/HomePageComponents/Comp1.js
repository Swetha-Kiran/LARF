import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";


function Comp1() {
    return (
        <div className='w-full h-[calc(100vh-(80px))] pt-4 relative px-4'>
            <div className='bg-gradient-to-r from-transparent via-[#d7f3a8] to-transparent  absolute top-0 left-0'>
                <img className='w-[35vw] Laptop-lg:w-[26vw] h-[40vh]' src="/HomePageImages/Comp1-Images/image1.svg" alt="img1" />
            </div>

            <div className="absolute bg-gradient-to-t from-transparent via-[#b9ebcf] to-transparent bottom-0 right-0 -z-10">
                <img className='h-[25vh] Tablet:h-[30vh] Laptop-lg:h-[40vh]' src="/HomePageImages/Comp1-Images/image2.svg" alt="img2" />
            </div>
            
            <div className="absolute bg-gradient-to-t from-transparent via-[#b9ebcf] to-transparent -bottom-12 left-0 object-cover">
                <img className='h-[25vh] Tablet:h-[30vh] Laptop-lg:h-[50vh]' src="/HomePageImages/Comp1-Images/image3.jpg" alt="img3" />
            </div>

            <NavLink to="/experts" className="w-auto p-4 h-auto flex items-center justify-center bg-gradient-to-r from-blue-200 to-green-300 rounded-3xl button1 absolute top-4 left-[38vw] Tablet:left-[50vw] Laptop-lg:left-[45vw] Desktop:left-[50vw] text-[#FFFFFF] font-poppins font-medium text-sm Mobile:text-base Tablet:text-xl Laptop-lg:text-2xl">Global Research Experts</NavLink>
            <NavLink to="/research" className="w-auto p-4 h-auto flex items-center justify-center bg-gradient-to-r from-[#368CDB] to-[#AEF72F]  rounded-3xl button1 absolute top-24 Laptop-lg:top-4 left-[38vw] Tablet:left-[50vw] Laptop-lg:left-[72vw] Desktop:left-[75vw] text-[#FFFFFF] font-poppins font-medium  text-sm Mobile:text-base Tablet:text-xl Laptop-lg:text-2xl">Research and Innovation</NavLink>
            <div className='text-[#1B2D37] absolute top-[24vh] Tablet:top-[18vh] left-[35vw] Laptop-lg:left-[30vw] leading-normal font-poppins font-medium text-xl Tablet:text-3xl Laptop-lg:text-5xl text-center'>
                <p>Largest Agro Research Foundation</p>
                <p>{`(LARF)`}</p>
            </div>
            <div className='w-full Tablet:w-[700px] h-auto p-4 absolute left-0 Tablet:left-[8vw] Laptop-lg:left-[30vw] Desktop:left-[34vw] top-[40vh] flex justify-center items-center font-inter font-medium text-center rounded-[32px] text-[#FFFFFF] bg-gradient-to-r from-[#00B09B] to-[#96C93D]'>
                <p className='hidden Tablet:flex text-base Tablet:text-xl '>The Farmer is the only man in our economy who buys <br /> everything in retail, sells everything in wholesale and <br /> pays the freight both ways</p>
                <p className='Tablet:hidden text-base'>The Farmer is the only man in our economy who buys everything in retail, sells everything in wholesale and pays the freight both ways</p>
            </div>
            <NavLink to="/membership" className='w-auto h-auto px-6 py-4 flex items-center justify-center absolute left-[22vw] Laptop-lg:left-[48vw] top-[65vh] Mobile:top-[63vh] Tablet:top-[55vh] Laptop-lg:top-[60vh] rounded-3xl bg-[#6DAD8A] font-poppins font-medium text-lg Tablet:text-2xl text-[#FFFFFF]'>Join Now</NavLink>

        </div>
    )
}

export default Comp1