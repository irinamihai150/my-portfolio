import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import "./Contact.css"

const Contact = () => {
	return (
		<Container id='contact' className='mt-5 mb-5 contact-container'>
			<h2 className='text-center mb-4'>Let's Get in Touch</h2>
			<Row className='justify-content-center'>
				<Col md={8} xs={12}>
					<p className='text-center'>
						Thank you for your interest in connecting with me. I welcome your
						feedback, questions, and suggestions. If you have comments, please
						feel free to email me directly by clicking the
						<strong>
							<a
								href='mailto:irinamihai150@gmail.com'
								className='text-decoration-none text-dark m-1'
							>
								<FaEnvelope size={20} /> envelope
							</a>
						</strong>
						icon. If you prefer to connect on social media, you can find me on
						LinkedIn or GitHub. Don't hesitate to reach out; I look forward to
						hearing from you.
					</p>
					<div className='d-flex justify-content-center mt-4'>
						<a
							href='https://github.com/irinamihai150'
							target='_blank'
							rel='noopener noreferrer'
							className='me-3 text-dark'
						>
							<FaGithub size={30} />
						</a>
						<a
							href='https://www.linkedin.com/in/irinamih/'
							target='_blank'
							rel='noopener noreferrer'
							className='me-3 text-dark'
						>
							<FaLinkedin size={30} />
						</a>
						<a href='mailto:irinamihai150@gmail.com' className='text-dark'>
							<FaEnvelope size={30} />
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Contact
