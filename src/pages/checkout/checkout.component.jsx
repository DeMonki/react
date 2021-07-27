import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { S } from 'xmlchars/xml/1.0/ed5';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page' >
        <div className='checkout-header'>
            <div className='header-block'>
                <span > Product </span>
            </div>
            <div className='header-block'>
                <span > Description </span>
            </div>
            <div className='header-block'>
                <span > Quantity  </span>
            </div>
            <div className='header-block'>
                <span > Price </span>
            </div>
            <div className='header-block'>
                <span > Remove </span>
            </div>
        </div>
        {
            cartItems.map(cartItem => ( <CheckoutItem key={cartItem.id}  cartItem={cartItem}  />   ))
        }
        <div className='total'> <span> Total:  ${total}</span></div>
        <div className='test-warning'>
            *Please use a test credit card for payments - See stripe docs 
            <a href='https://dashboard.stripe.com/test/developers' target='_blank' rel='noreferrer' > Stripe Docs</a>
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);