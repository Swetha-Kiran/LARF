import React from 'react'

function Comp2() {
    return (
        <div className='w-full h-auto Tablet:h-[calc(100vh-(80px))] bg-comp2-background opacity-80 relative flex flex-col justify-center items-center '>
            <div className='w-full h-auto Tablet:h-full   flex flex-col items-center justify-start space-y-8 pt-8'>
            <h1 className='text-[#000000] font-poppins font-normal text-2xl Laptop-lg:text-4xl '>Welcome To</h1>
            <h1 className='text-[#000000] font-poppins font-medium text-xl Tablet:text-3xl Laptop-lg:text-5xl text-center'>Largest Agro Research Foundation</h1>
            <p className='text-[#000000] w-full Laptop-lg:w-[70%] h-auto Tablet:h-[170px] text-center font-inter font-medium text-lg Tablet:text-2xl px-4'>We are an organization working into the field of research in agriculture and organic crops/medicinal plants. We have conducted various consultancies into these fields and successfully achieved good results...</p>
            <button className='h-[80px] w-[180px] Tablet:w-[300px] rounded-[50px] bg-[#051731] text-[#F8F8F8] font-poppins font-medium text-lg Tablet:text-2xl'>Read More</button>
           
            </div>
           
            <img className="flex Tablet:absolute h-auto Tablet:h-[60vh] bottom-0 right-0 z-10 " src="/HomePageImages/Comp2-Images/image1.svg" alt="img2" />
         
           
           
        </div>
    )
}

export default Comp2