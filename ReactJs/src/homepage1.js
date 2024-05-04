// import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

function Homepage() {
  return (
    <div>

      <ul className='mt-2'>
        <li><h3>Create Shopping site home page with Styled- component</h3></li>
      </ul>

      <div className='mt-5 borderd d-flex justify-content-between nav-1 ddx'>
        <div className='a'>
          <a href="#">Usd </a>
          <a href="#">English</a>
          <a href="#">1900+900</a>
          <a href="#">Need help?Call:Us</a>
        </div>

        <div className='a'>
          <a href="#">Order Tracking</a>
          <a href="#"> Wishlist</a>
          <a href="#">My Account</a>
          <a href="#">About Us</a>
        </div>
      </div>


      <Navbar expand="lg" className="bg-body-tertiary mt-3">

        <Container fluid>

          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <div className='container-flued row'> 

              <div className='col-xl-4'>
                <Nav
                  style={{ maxHeight: '100px' }}
                  navbarScroll>

                  <NavDropdown title="Account" id="navbarScrollingDropdown">
                  

                    <NavDropdown.Item href="#action3">
                      <p>My Account</p>
                      <p>Order Tracking</p>
                      <p>My Voucher</p>
                      <p>My Wishlist</p>
                      <p>Setting</p>
                      <p>Sing out</p>
                    </NavDropdown.Item>

                  </NavDropdown>

                  <Nav.Link href="#action1">Car
                  <i class="fa-solid fa-cart-shopping fs-3  "></i>
                  </Nav.Link>
                  <Nav.Link href="#action2">Wishlist
                  <i class="fa-solid fa-heart fs-3  "></i>
                  </Nav.Link>

                  <Nav.Link href="#">
                    Compare
                    <i class="fa-solid fa-arrows-rotate fs-3"></i>
                  </Nav.Link>
                </Nav>

              </div>

              <div className="col-xl-6 row search">
              
                  <i class="fa-solid fa-magnifying-glass col-1  col-xl-1 fs-2 pt-1"></i>
                  <input type="" name="" className=' col-7 col-xl-7 text-end inp mx-2' />
                  <select className='sel col-2 col-xl-2'>

                    <option value=""> All catagories</option>
                  </select>
                

              </div>

              <div className='col-xl-1'>
              <img src="nest.svg" alt="" className='nest'/>
              </div>

              <div className='row mt-5 border num p-2'>

                <div className='col-xl-2 du'>
                  <h4>-1900  888  <i class="fa-solid fa-headphones"></i></h4>
                  <span>24/7 Support Cente</span>
                </div>

                <div className='col-xl-7 '>
                  <Nav className='hvr'>
                    <NavDropdown title="Pages" id="navbarScrollingDropdown" className='x1'>

                      <NavDropdown.Item href="#action3" className=''>
                        <p>My Account</p>
                        <p>Order Tracking</p>
                        <p>My Voucher</p>
                        <p>My Wishlist</p>
                        <p>Setting</p>
                        <p>Sing out</p>
                      </NavDropdown.Item>

                    </NavDropdown>

                    <NavDropdown title="Blog" id="navbarScrollingDropdown">

                      <NavDropdown.Item href="#action3">
                        <p>My Account</p>
                        <p>Order Tracking</p>
                        <p>My Voucher</p>
                        <p>My Wishlist</p>
                        <p>Setting</p>
                        <p>Sing out</p>
                      </NavDropdown.Item>

                    </NavDropdown>

                    <NavDropdown title="Mega Menu" id="navbarScrollingDropdown">

                      <NavDropdown.Item href="#action3">

                        <div className='d-flex'>
                          <div className=''>
                            <p>My Account</p>
                            <p>Order Tracking</p>
                            <p>My Voucher</p>
                            <p>My Wishlist</p>
                            <p>Setting</p>
                            <p>Sing out</p>
                          </div>

                          <div>
                            <p>My Account</p>
                            <p>Order Tracking</p>
                            <p>My Voucher</p>
                            <p>My Wishlist</p>
                            <p>Setting</p>
                            <p>Sing out</p>
                          </div>

                          <div>
                            <p>My Account</p>
                            <p>Order Tracking</p>
                            <p>My Voucher</p>
                            <p>My Wishlist</p>
                            <p>Setting</p>
                            <p>Sing out</p>
                          </div>


                          <div>
                            <p>My Account</p>
                            <p>Order Tracking</p>
                            <p>My Voucher</p>
                            <p>My Wishlist</p>
                            <p>Setting</p>
                            <p>Sing out</p>
                          </div>
                        </div>
                      </NavDropdown.Item>

                    </NavDropdown>

                    <NavDropdown title="Vendors" id="navbarScrollingDropdown">

                      <NavDropdown.Item href="#action3">
                        <p>My Account</p>
                        <p>Order Tracking</p>
                        <p>My Voucher</p>
                        <p>My Wishlist</p>
                        <p>Setting</p>
                        <p>Sing out</p>
                      </NavDropdown.Item>

                    </NavDropdown>

                    <NavDropdown title="Shop" id="navbarScrollingDropdown">

                      <NavDropdown.Item href="#action3">
                        <p>My Account</p>
                        <p>Order Tracking</p>
                        <p>My Voucher</p>
                        <p>My Wishlist</p>
                        <p>Setting</p>
                        <p>Sing out</p>
                      </NavDropdown.Item>

                    </NavDropdown>

                    <NavDropdown title="About" id="navbarScrollingDropdown">

                      <NavDropdown.Item href="#action3">
                        <p>My Account</p>
                        <p>Order Tracking</p>
                        <p>My Voucher</p>
                        <p>My Wishlist</p>
                        <p>Setting</p>
                        <p>Sing out</p>
                      </NavDropdown.Item>

                      <NavDropdown title="Deals" id="navbarScrollingDropdown">

                        <NavDropdown.Item href="#action3">
                          <p>My Account</p>
                          <p>Order Tracking</p>
                          <p>My Voucher</p>
                          <p>My Wishlist</p>
                          <p>Setting</p>
                          <p>Sing out</p>
                        </NavDropdown.Item>

                      </NavDropdown>

                    </NavDropdown>

                  </Nav>
                </div>

                <div className='col-xl-3'>
                  <button className=' btn1'>
                    <h6>ALL</h6>
                   <h6>Browser <i class="fa-solid fa-arrows-to-dot"></i> </h6>
             
                
              
                   </button>
                </div>
              </div>

            </div>

          </Navbar.Collapse>
        </Container>

      </Navbar>

    </div>
  )
}

export default Homepage