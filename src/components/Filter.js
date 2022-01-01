import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'

const Filter = () => {
    const [rate, setrate] = useState(3)
    return (
        <div className="filter">
        <span className="title">Filter Product</span>
        <span>
            <Form.Check
            inline
            label="Ascending"
            name="Group1"
            type="radio"
            id='{inline-1}'
                />
        </span>
        <span>
            <Form.Check
            inline
            label="Descending"
            name="Group1"
            type="radio"
            id='{inline-2}'
                />
        </span>
        <span>
            <Form.Check
            inline
            label="Include Out of stock"
            name="Group1"
            type="checkbox"
            id='{inline-3}'
                />
        </span>
        <span>
            <Form.Check
            inline
            label="Fast Deliveery Only"
            name="Group1"
            type="checkbox"
            id='{inline-4}'
                />
        </span> 
        <span>
            <label style={{paddingRight:10}} >Rating</label>
            <Rating  rating={rate} onClick={(i)=>setrate(i+1)} style={{cursor:"pointer"}}/>
            
        </span>
        <Button variant="light">clear Filters</Button>
        </div>
    )
}

export default Filter
