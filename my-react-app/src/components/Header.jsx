import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return(
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect >
                <Container>
                    <Navbar.Brand href="/">BLUEPRINT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart">Cart</Nav.Link>
                        <Nav.Link href="/login">Sign In</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>    
    ) 
}

export default Header