'use client'
import React, { useState } from 'react';
import axios from "axios";
 
const AddProduct = () => {
    const [name, setname] = useState('');
    const [code, setcode] = useState('');
 
    const handleSubmit = async (e: any) => {
        e.preventDefault();
    };
 
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="productName">Product Name:</label>
            <input
                type="productName"
                id="productName"
                value={name}
                onChange={(e) => setname(e.target.value)}
            /> <br/>
            <label htmlFor="productCode">Product Code:</label>
            <input
                type="productCode"
                id="productCode"
                value={code}
                onChange={(e) => setcode(e.target.value)}
            /> <br/>
 
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddProduct;
