"use client"
import React, { useState } from 'react';

const Payment = () => {

    const [loader, setLoader] = useState(false);

    const PaymentOption = async () => {
        setLoader(true)
        let res = await fetch("/api/payment", { method: 'POST' });
        let JSON = await res.json();
        setLoader(false);
        setShow(true);
        setMethod(JSON['data']['desc'])
    }

    return (
        <div className='m-10'>
            <h1>Payment here</h1>
            <button onClick={PaymentOption} className='px-4 py-2 bg-sky-200 rounded-xl hover:bg-sky-400 text-black'>Pay Here</button>
        </div>
    );
};

export default Payment;