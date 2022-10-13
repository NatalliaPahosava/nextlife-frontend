



const Header = () => {
  return (
  //  <Navbar bg="primary" expand="lg">
  //     <Container bg="primary">
  //       <Navbar.Brand href="/home"><img
  //           width='100px'
  //           src='https://freesvg.org/img/1661256469diamond-heart.png'
  //           alt=''
  //         /></Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link href="/">Home</Nav.Link>
  //           <Nav.Link href="/all">All Items</Nav.Link>
  //           <Nav.Link href="/men">Men</Nav.Link>
  //           <Nav.Link href="/women">Women</Nav.Link>
  //           <Nav.Link href="/kids-item">Kids</Nav.Link>
  //           <Nav.Link href="/pets">Pets</Nav.Link>
  //           <Nav.Link href="/furniture">Furniture</Nav.Link>
  //           <Nav.Link href="/electronics">Electronics</Nav.Link>
  //           <Nav.Link href="/add-item">Add-item</Nav.Link>
  //           <Nav.Link href="/contacts">Contacts</Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
<div className='header'>
      <ul>
        <a href='/'> <img
            width='100px'
            src='https://freesvg.org/img/1661256469diamond-heart.png'
            alt=''
          />
        </a>
        <h1>NextLive</h1>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/all'>All Items</a>
        </li>
        <li>
          <a href='/men'>Men</a>
        </li>
        <li>
          <a href='/women'>Women</a>
        </li>
        <li>
          <a href='/kids-item'>Kids </a>
        </li>
        <li>
          <a href='/pets'>Pets </a>
        </li>
        <li>
          <a href='/furniture'>Furniture</a>
        </li>
        <li>
          <a href='/electronics'>Electronics</a>
        </li>
        <li>
          <a href='/add-item'>Add Item</a>
        </li>
        <li>
          <a href='/contacts'>Contacts</a>
      </li>
      </ul>
    </div> 
  )
}

export default Header
