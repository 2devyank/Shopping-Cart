import React from 'react'
import { Navbar, Container, FormControl, Nav, Dropdown, Badge, Button } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi'
import {Link} from  'react-router-dom'
import { CartState } from '../context/Co';
const Header = () => {


    const {state:{cart},dispatch}=CartState();
    return (
        <Navbar bg="dark" variant="dark" style={{ height: 50 }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl placeholder="Search a product" style={{ width: 400 ,height:30,borderRadius:14}} className="m-auto" />
                </Navbar.Text>
                <Nav>
                    <Dropdown >
                        <Dropdown.Toggle variant="success"  >
                            <FiShoppingCart color="white" fontSize="25px" />
                            <Badge variant="success">{cart.length}</Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu   align={{ lg: 'end' }} style={{ minWidth: 370 }}> 
                        {cart.length?(
                          <>
                          {
                              cart.map((prod)=>(
                        <span className="cartitem" key={prod.key}>
                        <img 
                        src={prod.image}
                        className="cartitemimg"
                        alt={prod.itemm}
                            />
                            <div className="cartitemdetail">
                                <span>{prod.name}</span>
                                <span>${prod.price.split(".")[0]}</span>
                            </div>
                            <AiFillDelete fontSize="20px" style={{cursor:"pointer"}} onClick={()=>dispatch({
                                type:"REMOVE_FROM_CART",
                                payload:prod
                            })}/>
                        </span>
                            ))
                        }
                        <Link to="/cart">
                        <Button style={{width:"95%" ,margin:"0 10px"}}>
                            Go To Cart
                        </Button>
                        </Link>
                        </>
                        ):(
 <span style={{ padding: 10 }}>Cart is Empty</span>
                        )}
                           
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>

            </Container>

        </Navbar>
    );
};

export default Header
