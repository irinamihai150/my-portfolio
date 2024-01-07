import { Container, Row, Col, Card } from "react-bootstrap"
import { useEffect } from "react"
import {
	FaDesktop,
	FaServer,
	FaJs,
	FaCss3,
	FaHtml5,
	FaReact,
	FaNode,
	FaDatabase,
	FaGithub,
	FaBootstrap,
	FaFigma,
} from "react-icons/fa"
import "./Introduction.css"
import { motion } from "framer-motion"

const Introduction = () => {
	// useEffect(() => {
	// 	window.scrollTo(0, 0)
	// }, [])

	const technologies = [
		{ name: "JavaScript", icon: <FaJs /> },
		{ name: "CSS", icon: <FaCss3 /> },
		{ name: "HTML", icon: <FaHtml5 /> },
		{ name: "React", icon: <FaReact /> },
		{ name: "Node.js", icon: <FaNode /> },
		{ name: "PostgreSQL", icon: <FaDatabase /> },
		{ name: "GitHub", icon: <FaGithub /> },
		{ name: "Bootstrap", icon: <FaBootstrap /> },
		{ name: "MongoDB", icon: <FaDatabase /> },
		{ name: "Figma", icon: <FaFigma /> },
	]
	const iconVariants = {
		hover: {
			scale: 1.2,
			rotate: 360,
			transition: {
				duration: 0.3,
			},
		},
	}
	return (
		<div>
			<Container fluid className='mb-12' id='about'>
				<Row className='justify-content-center align-items-center m-3'>
					<Col className='mx-auto text-center'>
						<Card
							className='m-2'
							style={{
								border: "2px solid purple",
								boxShadow: "0 0 10px rgba(128, 0, 128, 0.5)",
								// width: "90%",
							}}
						>
							<h2 className='animate'>Bio</h2>
							<p className='p-2'>
								As a technology enthusiast deeply passionate about web
								development, I've immersed myself in an intensive 11-month
								software development training program.
								<p>
									I have a strong affinity for backend technologies and cloud
									infrastructure, and I am driven by a desire to contribute my
									skills and enthusiasm to a dynamic software development team.
									Eager to play a key role in crafting innovative solutions.
								</p>
								<p>
									I am actively seeking opportunities to further grow and excel
									in the ever-evolving field of software development.
								</p>
							</p>
						</Card>
					</Col>
				</Row>
				<Row className='justify-content-center '>
					<Col xs={12} sm={6} md={4} className='mb-4'>
						<Card
							className='d-flex flex-column justify-content-center align-items-center'
							style={{
								backgroundColor: "black",
								color: "white",
								padding: "20px",
								margin: "10px",
								borderRadius: "20px",
							}}
						>
							<div className='d-flex flex-column align-items-center'>
								<h3>
									Frontend <br />
									Developer
								</h3>
								<FaDesktop size={60} color='white' className='m-2' />
								<ul className='m-1'>
									<li>
										<span className='tick'>&#10004;</span>HTML
									</li>
									<li>
										<span className='tick'>&#10004;</span>CSS
									</li>
									<li>
										<span className='tick'>&#10004;</span>JavaScript
									</li>
									<li>
										<span className='tick'>&#10004;</span>React
									</li>
									<li>
										<span className='tick'>&#10004;</span>Bootstrap
									</li>
								</ul>
							</div>
						</Card>
					</Col>
					<Col xs={12} sm={6} md={4} className='mb-4'>
						<Card
							className='d-flex flex-column justify-content-center align-items-center'
							style={{
								backgroundColor: "black",
								color: "white",
								padding: "20px",
								margin: "10px",
								borderRadius: "20px",
							}}
						>
							<div className='d-flex flex-column align-items-center'>
								<h3>
									Backend <br /> Developer
								</h3>
								<FaServer size={60} color='white' className='m-2' />
								<ul className='m-1'>
									<li>
										<span className='tick'>&#10004;</span>Node.js
									</li>
									<li>
										<span className='tick'>&#10004;</span>Express.js
									</li>
									<li>
										<span className='tick'>&#10004;</span>PostgreSql
									</li>
									<li>
										<span className='tick'>&#10004;</span>MongoDB
									</li>
									<li>
										<span className='tick'>&#10004;</span>REST API
									</li>
								</ul>
							</div>
						</Card>
					</Col>
					<Col xs={12} sm={6} md={4} className='mb-4'>
						<Card
							className='d-flex flex-column justify-content-center align-items-center'
							style={{
								backgroundColor: "black",
								color: "white",
								padding: "20px",
								margin: "10px",
								borderRadius: "20px",
							}}
						>
							<div className='d-flex flex-column align-items-center'>
								<h3>
									Project <br /> Management
								</h3>
								<FaDesktop size={60} color='white' className='m-2' />
								<ul className='m-1'>
									<li>
										<span className='tick'>&#10004;</span>GIT
									</li>
									<li>
										<span className='tick'>&#10004;</span>GITHUB
									</li>
									<li>
										<span className='tick'>&#10004;</span>TRELLO
									</li>
									<li>
										<span className='tick'>&#10004;</span>AGILE
									</li>
									<li>
										<span className='tick'>&#10004;</span>NETLIFY
									</li>
								</ul>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
			<Card
				className='mt-8 mb-3'
				fluid
				style={{
					height: "auto",
					width: "100%",
					backgroundImage: `url("/britain.jpg")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				<Row>
					<Col>
						<h3 className='text-center m-2 p-2 fw-bold animate'>
							Technologies
						</h3>
					</Col>

					<Col xs={12} className='d-flex justify-content-center'>
						<ul className='technology-list'>
							{technologies.map((tech, index) => (
								<motion.li
									key={index}
									className='technology-item'
									variants={iconVariants}
									whileHover='hover'
								>
									<span className='technology-icon'>{tech.icon}</span>
								</motion.li>
							))}
						</ul>
					</Col>
				</Row>
			</Card>
			{/* <Row className='flex flex-row max-w-screen-2xl mx-auto ml-8 mt-20'>
				<Col md={6} className='mx-auto'>
					<Card
						style={{
							border: "2px solid purple",
							boxShadow: "0 0 10px rgba(128, 0, 128, 0.5)",
						}}
					>
						<Card.Body>
							<h5 className='text-black text-6xl mb-4 mt-8 font-bold hover-text-red-500 pop-outin'>
								Education
							</h5>
							<ul className='ml-4 space-y-4 text-2xl'>
								<li className=' hover-font-bold'>
									Full Stack Software Development Code your Future, Birmingham,
									05/2022- 03/ 2023
								</li>
								<li className=' hover-font-bold'>
									Microsoft Certified Azure Fundamentals Learning Curve Group,
									Birmingham, 01/ 2022
								</li>
								<li className=' hover-font-bold'>
									BSc, Social Work, Faculty of Philosophy and Social-Political
									Sciences, Romania,06/2011
								</li>
							</ul>
						</Card.Body>
					</Card>
				</Col>
			</Row> */}
		</div>
	)
}

export default Introduction
