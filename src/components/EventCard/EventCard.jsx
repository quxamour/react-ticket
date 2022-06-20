import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { eventContext } from "../../contexts/eventContext";
import { useNavigate } from "react-router-dom";
import "./EventCard.css"
// import { cartContext } from "../../contexts/cartContext";


const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function EventCard({ item }) {
  // const {
  //   getCart,
  //   cart,
  //   changeProductCount,
  //   deleteFromCart,
  //   addProductToCart,
  // } = React.useContext(cartContext);
  const { deleteEvent } = React.useContext(eventContext);
  // console.log(addProductToCart);
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box lassName="event_card">
    <Card className="edit_card"
      style={{
        margin: "35px",
        padding: "10px",
        border: "1px solid",
        boxShadow: "1px 2px 9px #F4AAB9",
        // maxWidth: "350px",
      }}
      sx={{ maxWidth: 300 }}
      display="flex">
      <CardHeader
        style={{ textAlign: "center", height: "50px" }}
        title={item.title}
      />
      <CardMedia className="edit_photo"
        style={{
          objectFit: "fill",
          boxShadow: "1px 2px 9px #F4AAB9",
          borderRadius: "10px",
        }}
        component="img"
        height="200"
        image={item.photo}
        alt="Photo"
      />
      <CardContent>
        <Box style={{ display: "flex" }}>
          <CalendarMonthIcon />
          <Typography variant="body2" color="text.secondary">
            {item.date}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <LocationOnIcon />
          <Typography variant="body2" color="text.secondary">
            {item.place}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <CurrencyRubleIcon />
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </Box>
      </CardContent>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "10px",
        }}>
        <Button className="edit_btn"
          variant="contained"
          color="success"
          onClick={() => navigate(`/events/${item.id}`)}>
          Купить билет
        </Button>
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={() => deleteEvent(item.id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => navigate(`/edit/${item.id}`)}>
          <EditIcon />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  );
}
