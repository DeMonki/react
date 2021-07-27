import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JHqy7KTMcxYv0t5P0LGg1Y9VwMOtqXHCatsfSFbQVaREf8G612bmZQ0kmiDbc82SLP9pDDjtr3fbA6qPp2NJlbH007tdPDyqU';

    const onToken = token => {
        console.log(token);
        alert('Payment successful!');
    }
 
    return (
        <StripeCheckout
        label='Pay Now'
        name='Crown Clothing'
        biilingAddress
        shippingAddressimage
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken} 
        stripeKey={publishableKey}     
        />
    )

}

export default StripeCheckoutButton;

