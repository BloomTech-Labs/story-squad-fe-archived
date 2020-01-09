  
import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import axios from 'axios';

interface CheckoutFormProps {}

const CheckoutForm = injectStripe((props) => {
    const submit = async (ev) => {
        if (!props.stripe) return;
        const { token } = await props.stripe.createToken({ name: 'Name' });
        console.log(token);
        if (!token) return;
        const response = await axios.post('http://localhost:4000/charge', { token: token.id });
        console.log(response);
    };

    return (
        <div className='checkout'>
            <p>Would you like to complete the purchase?</p>
            <CardElement />
            <button onClick={submit}>Purchase</button>
        </div>
    );
});

export { CheckoutForm };