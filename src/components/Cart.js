import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../context/Co';
import Rating from './Rating';

const Cart = () => {
  const {state:{cart},dispatch}=CartState();

  const [total, settotal] = useState();
  useEffect(() => {
    settotal(cart.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
  }, [cart])
    return (
        <div className='home'>
          <div className="productcontainer">
            <ListGroup>
              {
                cart.map(prod=>(
                 <ListGroup.Item>
                   <Row>
                   <Col md={2}>
                      <Image src={prod.image} alt={prod.name} fluid rounded/>
                     </Col>
                     <Col md={2}>
                       <span>{prod.name}</span>
                     </Col>
                     <Col md={2}>
                       <span>${prod.price}</span>
                     </Col>
                     <Col md={2}>
                      <Rating rating={prod.rating}/>
                                           </Col>
                    <Col md={2}>
                    <Form.Control as="select" value={prod.qty}
                    onChange={(e)=>
                      dispatch(
                        {
                          type:"CHANGE_CART_QTY",
                          payload:{
                            id:prod.id,
                            qty:e.target.value, 
                          }
                        }
                      )

               

                    }
                    >
                      {
                        [...Array(prod.instock).keys()].map((x)=>(
                        <option key={x+1}>{x+1}</option>
                        ))
                      }

                    </Form.Control>
                     </Col>
                    
                     <AiFillDelete fontSize="20px" style={{cursor:"pointer"}} onClick={()=>dispatch({
                                type:"REMOVE_FROM_CART",
                                payload:prod
                            })}/>

                     

                   </Row>
                 </ListGroup.Item>
                 
                ))
              }
            </ListGroup>

          </div>
          <div className="filter summary" >
<span className="title">Subtotal {cart.length} items </span>
<span style={{fontWeight:700,fontSize:20}}>Total ${total}</span>
<Button disabled={cart.length===0} type="button">
  Proceed to checkout
</Button>


          </div>
           
        </div>
    )
}

export default Cart

