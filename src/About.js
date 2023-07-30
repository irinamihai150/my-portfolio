import React from "react"
import "./index.css"

function About() {
	return (
		<div className='flex m-8 bg-gray-200'>
			<div className='flex-1'>
				<p className='text-center text-xl mt-20'>PORTFOLIO</p>
				<h1 className='text-8xl text-center font-semibold mt-6'>
					IRINA
					<br /> MIHAI
				</h1>
				<div className='flex justify-around mt-20'>
					<p className='ml-4'>SOFTWARE DEVELOPER</p>
					<a
						href='mailto:irinamihai150@gmail.com'
						className='pl-4 text-black hover:text-blue-500'
					>
						EMAIL ME
					</a>
				</div>
			</div>
			<div className='flex-1'>
				<img
					className='w-full h-auto rounded-lg'
					src='https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80'
					alt='computer'
				/>
			</div>
		</div>
	)
}

export default About
