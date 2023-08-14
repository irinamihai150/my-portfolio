import React, { useState, useEffect } from "react"
import "./index.css"
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa"

function Contact() {
	const email = "irinamihai150@gmail.com"
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

	useEffect(() => {
		setCurrentYear(new Date().getFullYear())
	}, [])
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}
	return (
		<div className='py-8 mx-4 my-4'>
			<div className='max-w-screen-2xl mx-auto ml-8'>
				<h2 className='text-black text-6xl mb-20 mt-8 font-bold hover:text-red-500 wavy pop-outin'>
					Let's Meet
				</h2>

				<div className='flex'>
					<img
						className='w-1/2 mr-8 rounded-lg'
						src='https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
						alt='office'
					/>
					<div className=' w-1/2 flex justify-center ml-20'>
						<div className='text-black text-xl mt-10'>
							<p className='mb-2 font-bold hover:text-red-500'>Address</p>
							<p className='mb-2'>Birmingham</p>
							<p className='mb-2'>United Kingdom</p>
							<p className='mb-2 font-bold hover:text-red-500'>Email</p>
							<p className='mb-2 pop-outin'>Irinamihai150@gmail.com</p>
							<p className='font-bold mt-6 hover:text-red-500'>Find me</p>
							<div className='flex mt-2'>
								<a
									className='ml-4 hover:text-red-500'
									href='https://www.linkedin.com/in/irinamih/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaLinkedin size={32} />
								</a>
								<a
									className='ml-2 hover:text-red-500'
									href='https://github.com/irinamihai150'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaGithub size={32} />
								</a>
								<a
									className='ml-2 hover:text-red-500'
									href={`mailto:${email}`}
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaEnvelope size={32} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer>
				<p>&copy;{currentYear} Irina Mihai. All rights reserved.</p>
				<FaArrowUp size={24} onClick={() => scrollToTop()} />
			</footer>
		</div>
	)
}

export default Contact
