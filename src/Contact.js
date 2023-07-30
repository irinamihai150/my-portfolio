import React from "react"
import "./index.css"

function Contact() {
	return (
		<div className='py-8 mx-10 my-10'>
			<div className='max-w-screen-lg mx-auto ml-8'>
				<h1 className='text-black text-6xl mb-20 mt-8 font-bold'>Work with me</h1>
				<div className='flex'>
					<img
						className='w-1/2 mr-8'
						src='https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
						alt='office'
					/>
					<div className='flex justify-center ml-20'>
						<div className='text-black text-xl'>
							<p className='mb-2 font-bold'>Address</p>
							<p className='mb-2'>Birmingham</p>
							<p className='mb-2'>United Kingdom</p>
							<p className='mb-2 font-bold'>Email</p>
							<p className='mb-2'>Irinamihai150@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
