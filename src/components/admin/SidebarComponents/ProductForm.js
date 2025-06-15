import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productId, setProductId] = useState("");
  const [frameStyle, setFrameStyle] = useState("");
  const [modelNo, setModelNo] = useState("");
  const [frameWidth, setFrameWidth] = useState("");
  const [frameDimensions, setFrameDimensions] = useState("");
  const [frameColour, setFrameColour] = useState("");
  const [weight, setWeight] = useState("");
  const [weightGroup, setWeightGroup] = useState("");
  const [material, setMaterial] = useState("");
  const [frameMaterial, setFrameMaterial] = useState("");
  const [templeMaterial, setTempleMaterial] = useState("");
  const [prescriptionType, setPrescriptionType] = useState("");
  const [visionType, setVisionType] = useState("");
  const [frameStyleSecondary, setFrameStyleSecondary] = useState("");
  const [collection, setCollection] = useState("");
  const [productWarranty, setProductWarranty] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [condition, setCondition] = useState("");
  const [templeColour, setTempleColour] = useState("");
  const [brandName, setBrandName] = useState("");
  const [productType, setProductType] = useState("");
  const [frameType, setFrameType] = useState("");
  const [frameShape, setFrameShape] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 10000),
      name: productName,
      price: productPrice,
      stock: productStock,
      category: productCategory,
      productId,
      frameStyle,
      modelNo,
      frameWidth,
      frameDimensions,
      frameColour,
      weight,
      weightGroup,
      material,
      frameMaterial,
      templeMaterial,
      prescriptionType,
      visionType,
      frameStyleSecondary,
      collection,
      productWarranty,
      gender,
      height,
      condition,
      templeColour,
      brandName,
      productType,
      frameType,
      frameShape,
    };

    onAddProduct(newProduct);
    // Reset form fields
    setProductName("");
    setProductPrice("");
    setProductStock("");
    setProductCategory("");
    setProductId("");
    setFrameStyle("");
    setModelNo("");
    setFrameWidth("");
    setFrameDimensions("");
    setFrameColour("");
    setWeight("");
    setWeightGroup("");
    setMaterial("");
    setFrameMaterial("");
    setTempleMaterial("");
    setPrescriptionType("");
    setVisionType("");
    setFrameStyleSecondary("");
    setCollection("");
    setProductWarranty("");
    setGender("");
    setHeight("");
    setCondition("");
    setTempleColour("");
    setBrandName("");
    setProductType("");
    setFrameType("");
    setFrameShape("");
  };

  return (
    <div className="product-form">
      <h4>Add New Product</h4>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Stock"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Frame Style"
          value={frameStyle}
          onChange={(e) => setFrameStyle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Model No"
          value={modelNo}
          onChange={(e) => setModelNo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Frame Width"
          value={frameWidth}
          onChange={(e) => setFrameWidth(e.target.value)}
        />

        <input
          type="text"
          placeholder="Frame Dimensions"
          value={frameDimensions}
          onChange={(e) => setFrameDimensions(e.target.value)}
        />

        <input
          type="text"
          placeholder="Frame Colour"
          value={frameColour}
          onChange={(e) => setFrameColour(e.target.value)}
        />

        <input
          type="text"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          type="text"
          placeholder="Weight Group"
          value={weightGroup}
          onChange={(e) => setWeightGroup(e.target.value)}
        />

        <input
          type="text"
          placeholder="Material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />

        <input
          type="text"
          placeholder="Frame Material"
          value={frameMaterial}
          onChange={(e) => setFrameMaterial(e.target.value)}
        />

        <input
          type="text"
          placeholder="Temple Material"
          value={templeMaterial}
          onChange={(e) => setTempleMaterial(e.target.value)}
        />

        <input
          type="text"
          placeholder="Prescription Type"
          value={prescriptionType}
          onChange={(e) => setPrescriptionType(e.target.value)}
        />

        <input
          type="text"
          placeholder="Vision Type"
          value={visionType}
          onChange={(e) => setVisionType(e.target.value)}
        />

        <input
          type="text"
          placeholder="Frame Style Secondary"
          value={frameStyleSecondary}
          onChange={(e) => setFrameStyleSecondary(e.target.value)}
        />

        <input
          type="text"
          placeholder="Collection"
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Warranty"
          value={productWarranty}
          onChange={(e) => setProductWarranty(e.target.value)}
        />

        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <input
          type="text"
          placeholder="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <input
          type="text"
          placeholder="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />

        <input
          type="text"
          placeholder="Temple Colour"
          value={templeColour}
          onChange={(e) => setTempleColour(e.target.value)}
        />

        <input
          type="text"
          placeholder="Brand Name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Type"
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
        />

        <input
          type="text"
          placeholder="Frame Type"
          value={frameType}
          onChange={(e) => setFrameType(e.target.value)}
        />

        <input
          type="text"
          placeholder="Frame Shape"
          value={frameShape}
          onChange={(e) => setFrameShape(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
