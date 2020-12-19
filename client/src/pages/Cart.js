import React, { useState } from "react";
import {
  DeleteOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

export default function Cart({}) {
  return (
    <div>
      <div class="shopping-cart">
        <h1 class="title">Shopping Cart</h1>

        <div class="item">
          <div class="buttons">
            <DeleteOutlined style={{ fontSize: 25 }} />
          </div>
          <div class="image">
            <img src="http://placeimg.com/140/200/animals" alt="" />
          </div>
          <div class="description">
            <span>Common Projects</span>
            <span>Bball High</span>
            <span>White</span>
          </div>
          <div class="quantity">
            <button class="minus-btn" type="button" name="button">
              <MinusCircleOutlined />
            </button>
            <input type="text" name="name" value="1" />
            <button class="plus-btn" type="button" name="button">
              <PlusCircleOutlined />
            </button>
          </div>
          <div class="total-price">$549</div>
        </div>
        <StripeCheckout
          stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
          token={() => toast("OK")}
          name="Pay with Stripe"
          //  billingAddress
          //  shippingAddress
          panelLabel="Pay" // prepended to the amount in the bottom pay button
          amount={54900} // cents
          currency="USD"
        />
      </div>
    </div>
  );
}
