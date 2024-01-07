// Portfolio.js

import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const Portfolio = () => {
	const projects = [
		{
			id: 1,
			name: "Nail Art Website",
			description:
				"This project serves as a Minimum Viable Product (MVP) designed to boost the visibility of a friend's nail business. Developed with Next.js, the website offers a high-performance and SEO-friendly foundation. Bootstrap is employed for a sleek and responsive design, ensuring an optimal user experience across various devices. This MVP not only showcases the artistry of the nail business but also demonstrates the use of modern technologies to create a visually appealing and accessible online presence for promotional purposes.",
			githubLink: "https://github.com/irinamihai150/hobby",
			demoLink: "https://nail-art-m.netlify.app/",
		},
		{
			id: 2,
			name: "Chic Boutique",
			description:
				"This is a dynamic e-commerce website crafted using React and React Redux for a seamless front-end experience. Leveraging the power of Bootstrap for a polished and responsive design, the website also features a robust Express backend to handle server-side functionalities. From interactive user interfaces to secure transactions, this project showcases the integration of cutting-edge technologies to deliver a feature-rich and user-friendly e-commerce solution.",
			githubLink: "https://github.com/irinamihai150/shop",
			demoLink: "https://chic-boutique.onrender.com",
		},
		{
			id: 3,
			name: "Knowledge Checklist",
			description:
				"During our time at Code Your Future, our team of four worked together using Agile principles to build a helpful application. This app allows students to easily keep track of their progress throughout the course using a checklist. We used React for the user-friendly interface, Node.js for a strong backend, and Knex for managing the database. To add a personal touch, we integrated Robohash for unique user profiles. By following Agile practices, we stayed flexible and collaborated closely, making improvements quickly. This project reflects not only our technical skills but also our commitment to creating useful solutions for education.",
			githubLink: "https://github.com/kawaMANMI/wm4_3_Final_Project",
			demoLink: "",
		},
		
	]

	return (
		<Container id='projects' className='mt-4'>
			<h2 className='text-center mb-4 animate'>Projects</h2>
			<Row xs={1} md={2} lg={3} className='g-4'>
				{projects.map((project) => (
					<Col key={project.id}>
						<Card
							className='h-100 d-flex flex-column justify-content-between'
							style={{
								border: "2px solid purple",
								boxShadow: "0 0 10px rgba(128, 0, 128, 0.5)",
							}}
						>
							<Card.Body className='d-flex flex-column align-items-center'>
								<Card.Title className='text-center mb-3 '>
									{project.name}
								</Card.Title>
								<Card.Text>{project.description}</Card.Text>
							</Card.Body>
							<Card.Footer className='text-center'>
								<Button
									variant='dark'
									href={project.githubLink}
									target='_blank'
									className='me-2'
								>
									GitHub
								</Button>
								{project.demoLink && (
									<Button
										variant='secondary'
										href={project.demoLink}
										target='_blank'
									>
										Demo
									</Button>
								)}
							</Card.Footer>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default Portfolio
