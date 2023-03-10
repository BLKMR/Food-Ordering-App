import { useContext } from 'react'

import CartContext from '../../store/cart-context';

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);

    const numberOfItemsInCart = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)


    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
            <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{numberOfItemsInCart}</span>
        </button>
    );
}
 
export default HeaderCartButton;