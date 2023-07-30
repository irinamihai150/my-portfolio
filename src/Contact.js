import React from "react"
import "./index.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"

function Contact() {
	return (
		<div className='py-8 mx-4 my-4'>
			<div className='max-w-screen-2xl mx-auto ml-8'>
				<h2 className='text-black text-6xl mb-20 mt-8 font-bold'>
					Work with me
				</h2>
				<div className='flex'>
					<img
						className='w-1/2 mr-8 rounded-lg'
						src='https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
						alt='office'
					/>
					<div className=' w-1/2 flex justify-center ml-20'>
						<div className='text-black text-xl mt-10'>
							<p className='mb-2 font-bold'>Address</p>
							<p className='mb-2'>Birmingham</p>
							<p className='mb-2'>United Kingdom</p>
							<p className='mb-2 font-bold'>Email</p>
							<p className='mb-2'>Irinamihai150@gmail.com</p>
							<p className='font-bold mt-6'>Find me</p>
							<div className='flex mt-2'>
								<a
									className='ml-4'
									href='https://www.linkedin.com/in/irinamih/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaLinkedin size={32} />
								</a>
								<a
									className='ml-2'
									href='https://github.com/irinamihai150'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaGithub size={32} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact