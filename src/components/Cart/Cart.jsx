import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useCart } from "react-use-cart";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
  const navigate = useNavigate();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <Typography style={{ margin: "40px" }} variant="h5">
        {" "}
        Ваша корзина пуста
      </Typography>
    );

  return (
    <Container className="cart" style={{ margin: "40px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Photo</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Edit Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>
                    <img className="photo" src={item.photo} style={{ height: "6rem" }} />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell> {item.quantity}</TableCell>
                  <TableCell>
                    <Button className="btn_cart"
                      variant="contained"
                      color="success"
                      style={{
                        width: "5px",
                        height: "30px",
                      }}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }>
                      -
                    </Button>
                    <Button className="btn_cart"
                      variant="contained"
                      color="success"
                      style={{
                        margin: "20px",
                        width: "5px",
                        height: "30px",
                      }}
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }>
                      +
                    </Button>
                    <Button className="btn_cart"
                      variant="contained"
                      color="error"
                      style={{
                        margin: "20px",
                        width: "5px",
                        height: "30px",
                      }}
                      onClick={() => removeItem(item.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        {" "}
        <h2>Total Price : {cartTotal} </h2>
      </div>
      <Button className="btn_buy"
        onClick={() => navigate("/payment")}
        variant="contained"
        endIcon={<SendIcon />}>
        Купить сейчас
      </Button>
      <Button className="btn_buy"
        onClick={() => emptyCart()}
        variant="outlined"
        startIcon={<DeleteIcon />}>
        Очистить корзину{" "}
      </Button>
    </Container>
  );
};

export default Cart;
