import { Typography, Container, TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const { cartTotal } = useCart();
  const navigate = useNavigate();
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "50px",
        alignItems: "center",
      }}>
      <Typography
        style={{ marginTop: "40px", fontWeight: "800px" }}
        variant="h4">
        Реквизиты платежа
      </Typography>
      <img
        width={"350px"}
        height={"300px"}
        src="https://cliply.co/wp-content/uploads/2019/08/371908930_CREDIT_CARD_400px.gif"
      />
      <TextField
        style={{ width: "350px", margin: "10px" }}
        value={cardNumber}
        onChange={e => setCardNumber(e.target.value)}
        label="Введите номер карты"
        color="secondary"
        placeholder="5555 5555 5555 5555"
        focused
      />
      <TextField
        style={{ width: "350px", margin: "10px" }}
        value={cardDate}
        onChange={e => setCardDate(e.target.value)}
        label="Срок окончания действия карты"
        placeholder="22/22"
        color="secondary"
        focused
      />
      <TextField
        style={{ width: "350px", margin: "10px" }}
        value={cardCvv}
        onChange={e => setCardCvv(e.target.value)}
        label="CVV"
        placeholder="222"
        color="secondary"
        focused
      />
      <Typography> Итого: {cartTotal} </Typography>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          alert("Поздравляем! Оплата прошла успешно!");
          navigate("/events");
        }}>
        Оплатить сейчас
      </Button>
    </Container>
  );
};

export default Payment;
