import React from "react"
import "./index.css"

function Aboutme() {
	return (
		<div className='max-w-screen-2xl mx-auto ml-8'>
			<div className='flex flex-direction justify-between mb-10 mt-10'>
				<h2 className='text-black text-6xl mb-20 mt-8 font-bold hover:text-red-500'>
					Bio
				</h2>
			</div>
			<div className='flex flex-wrap'>
				{/* Column for Bio and Image */}
				<div className='w-full md:w-1/2 flex items-center'>
					{/* <h2 className='text-black text-6xl font-bold'>Bio</h2> */}
					<img
						className='w-1/2 h-auto rounded-2xl ml-24'
						src='https://media.licdn.com/dms/image/D4E03AQER7ZTX9sjUlA/profile-displayphoto-shrink_800_800/0/1690741760023?e=1696464000&v=beta&t=dAHp2wXeX5QNfW4fbHXtW8Vq4JAC7DffoTAZ0D-Yp88'
						alt='girl'
					/>
				</div>
				{/* Column for Software Developer */}
				<div className='w-full md:w-1/2'>
					<p className='text-3xl mb-20 mt-8  hover:font-bold'>
						I am a software developer
					</p>
					<p className='text-2xl  hover:font-bold'>
						Passionate about technology and recent completion of an intensive
						11-month software development training program, specializing in web
						development. Particular interest lies in back-end and cloud
						infrastructure. Eager to bring unique perspectives and passion for
						learning to a dynamic software development team. Actively seeking
						opportunities to grow professionally and make meaningful
						contributions to innovative software projects.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Aboutme
