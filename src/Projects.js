import React from "react"
import "./index.css"
const Projects = () => {
	return (
		<div>
			<h2 className='text-black text-6xl mb-20 mt-8 font-bold p-8 hover:text-red-500'>
				Projects
			</h2>
			<div className='max-w-screen-2xl ml-8 ml-8 grid grid-cols-3 gap-8'>
				<div className='flex-grow'>
					<h3 className='text-2xl mb-4 font-bold'>Knowledge Checklist </h3>
					<p className='text-xl mb-4 hover:bg-red-400 transition  hover:font-bold'>
						As part of our graduation requirements at Code your Future, our team
						of 4 followed Agile development principles to create an application
						that allows students to track their progress in a knowledge
						checklist throughout the course. Our project involved using a
						variety of skills.
					</p>
					<img
						className='w-full h-auto'
						src='https://images.unsplash.com/photo-1654931799020-ce7cf3f4a2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80'
						alt=''
					/>
				</div>
				<div className='flex-grow flex flex-col items-center'>
					<h3 className='text-2xl mb-4 font-bold'>Tv show</h3>
					<p className='text-xl mb-4 hover:bg-red-400 transition  hover:font-bold'>
						This MVP (Minimum Viable Product) is a web application that offers
						users the ability to watch TV shows, giving them the option to
						browse and stream either all available shows or a specific episode
						of their choice. The application aims to provide an enjoyable and
						seamless user experience for TV show enthusiasts.
					</p>
					<img
						className='w-full h-auto'
						src='https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
						alt='tv'
					/>
					<a
						href='https://cyf-irinamihai150-tv.netlify.app'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className='hover:bg-red-500 text-black center font-bold py-2 px-4 rounded mt-4'>
							Visit Website
						</button>
					</a>
				</div>
				<div className='flex-grow flex flex-col items-center'>
					<h3 className='text-2xl mb-4 font-bold'>City Mini Guide</h3>
					<p className='text-xl mb-4 hover:bg-red-400 transition  hover:font-bold'>
						This city mini guide project is designed to be an all-in-one
						resource that offers users a concise yet comprehensive overview of a
						specific city. It aims to be a go-to guide for both tourists and
						locals alike, providing essential information that helps users
						explore and navigate the city more effectively.
					</p>
					<img
						className='w-full h-auto'
						src='https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
						alt='maps'
					/>
					<a
						href='https://london-guide-react.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button className=' hover:bg-red-500 text-black center font-bold py-2 px-4 rounded mt-4'>
							Visit Website
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Projects
