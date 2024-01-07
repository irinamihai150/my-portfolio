import React from "react"
import { Navbar, Nav, Container, Image } from "react-bootstrap"
import "./MyNavBar.css"

const MyNavBar = () => {
	const brandStyle = {
		fontFamily: "'Pacifico', cursive",
		fontSize: "2rem",
	}

	return (
		<>
			<Navbar className='sticky-top bg-light' expand='lg'>
				<Container>
					<Navbar.Brand style={brandStyle} className='text-center m-3'>
						<Image
							src='/logo.png'
							alt='Logo'
							width='30'
							height='30'
							className='d-inline-block align-top mt-3'
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link
								href='#about'
								style={{ fontSize: "0.5em", fontWeight: "bold" }}
							>
								About
							</Nav.Link>
							<Nav.Link
								href='#projects'
								style={{ fontSize: "0.5em", fontWeight: "bold" }}
							>
								Projects
							</Nav.Link>
							<Nav.Link
								href='#contact'
								style={{ fontSize: "0.5em", fontWeight: "bold" }}
							>
								Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		
		</>
	)
}

export default MyNavBar
