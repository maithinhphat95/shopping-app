import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@material-ui/core";

ProductItem.propTypes = {};

function ProductItem(props) {
  const { product, handleAddCart } = props;
  const addCart = () => {
    handleAddCart(product);
  };
  return (
    <div className="product-item">
      <div className="img-box">
        <img
          className="product-item-img"
          src={product.image}
          alt={product.name}
          title={product.name}
        />
      </div>

      <div className="product-item-detail">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button
          onClick={() => {
            addCart();
          }}
        >
          Add to cart
        </button>
      </div>
    </div>

    // <Card className="product-item">
    //   <CardActionArea>
    //     <CardMedia
    //       // className="product-item-img"
    //       style={{ height: 200, width: 200 }}
    //       image={product.image}
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent className="product-item-detail">
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {product.name}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         ${product.price}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button
    //       size="small"
    //       color="primary"
    //       onClick={() => {
    //         addCart();
    //       }}
    //     >
    //       Add
    //     </Button>
    //   </CardActions>
    // </Card>
  );
}

export default ProductItem;
