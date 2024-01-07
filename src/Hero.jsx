import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Hero = () => {
	const backgroundImageUrl =
		"https://images.unsplash.com/photo-1638291792853-5ab967de3611?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

	return (
		<Container
			fluid
			style={{
				height: "100vh",
				backgroundImage: `url(${backgroundImageUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Row className='p-10 bg-transparent border-0'>
				<Col sm={4} md={6} className='p-5 m-5'>
					<h1
						className='fw-bold animated-text'
						style={{ color: "purple", fontSize: "5em" }}
					>
						HI, I'M <br />
						<span>IRINA</span>
					</h1>
					<h2 className='text-center text-sm-start'>Full Stack Developer</h2>
				</Col>
			</Row>
		</Container>
	)
}

export default Hero
