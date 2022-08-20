import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

AddProduct.propTypes = {};

function AddProduct(props) {
  // Props
  const { productList, handlePost } = props;
  // Hook
  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    image: "",
    id: 0,
  });

  // Variable
  const urlReg = /^(http:)|(https:)/gim;
  const alertMessage = "*";

  // Handle change value
  const handleChangeValue = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  // Handle submit form
  const handleSubmitForm = () => {
    // Validate data

    const checkInput =
      formValue.name != "" &&
      formValue.price > 0 &&
      formValue.image.match(urlReg) != "";
    let checkExisting = productList.some((e) => e.name == formValue.name);

    if (checkInput) {
      if (!checkExisting) {
        formValue.id = productList.length;
        handlePost(formValue);
      } else {
        alert("The product is existing");
      }
    } else {
      alert("Please fill correct form");
    }
  };

  return (
    <form
      className="add-form"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitForm(e);
      }}
    >
      <h2>Add New Product</h2>

      {/* Input product name */}
      <div className="form-item">
        <label htmlFor="form-name">Name:</label>
        <input
          id="form-name"
          name="name"
          type="text"
          defaultValue={""}
          title="Input the name of the product"
          onChange={(e) => {
            handleChangeValue(e);
          }}
        />
        <div className="alert-note" title="The name of product cann't be empty">
          {formValue.name == "" && alertMessage}
        </div>
      </div>

      {/* Input product price */}
      <div className="form-item">
        <label htmlFor="form-price">Price:</label>
        <input
          id="form-price"
          name="price"
          type="number"
          defaultValue=""
          title="Input the price of the product"
          onChange={(e) => {
            handleChangeValue(e);
          }}
        />
        <div
          className="alert-note"
          title="Input the price of the product have to > $0"
        >
          {formValue.price <= 0 && alertMessage}
        </div>
      </div>

      {/* Input Image Link */}
      <div className="form-item">
        <label htmlFor="form-image">Image:</label>
        <input
          id="form-image"
          name="image"
          type="text"
          defaultValue={""}
          title="Input the image link of the product"
          onChange={(e) => {
            handleChangeValue(e);
          }}
        />
        <div
          className="alert-note"
          title="You must input the correct link (http://...)"
        >
          {!urlReg.test(formValue.image) && alertMessage}
        </div>
      </div>
      <div className="form-action">
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}

export default AddProduct;
