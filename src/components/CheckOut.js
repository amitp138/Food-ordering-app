import React from "react";
import "./CheckOut.css";
const CheckOut = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
 let date= new Date();
 let time =date.getHours()+":"+date.getMinutes();
  return (
    <aside className="checkout">
      <div className="headcart">
        <div className="title">
          <strong>My Order</strong>
        </div>
        <div className="edit">
          <p>Edit</p>
        </div>
      </div>
      <div className="time">
        <div className="clock">
        <img src="./clock.png" alt="clock" />
        </div>
        <div>
        <p>{time}{" "}{+date.getHours()>12?"PM":"AM"}</p>
        </div>
      </div>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        <table>
        {cartItems.map((item) => (
          <tr key={item.id} >
            <td ><img src={item.url} alt="" className="url" /></td>
            <td>{item.name}</td>
            <td >
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button> {item.qty}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </td>

            <td >
              ${item.price}
            </td>
            <td>
            <button onClick={() => onRemove(item)} >
                X
              </button>
            </td>
          </tr>
        ))}
</table>
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="tprice">
              <div className="total">
                <strong>Total </strong>
              </div>
              <div className="num">
              <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="btncheckout">
              <button className="finalcheck" onClick={() => alert("Implement Checkout!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default CheckOut;
