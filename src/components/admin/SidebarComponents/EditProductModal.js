import React, { useState, useEffect } from 'react';
import './EditProductModal.css';

const EditProductModal = ({ product, onUpdateProduct, onClose }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productId, setProductId] = useState('');
  const [frameStyle, setFrameStyle] = useState('');
  const [modelNo, setModelNo] = useState('');
  const [frameWidth, setFrameWidth] = useState('');
  const [frameDimensions, setFrameDimensions] = useState('');
  const [frameColour, setFrameColour] = useState('');
  const [weight, setWeight] = useState('');
  const [weightGroup, setWeightGroup] = useState('');
  const [material, setMaterial] = useState('');
  const [frameMaterial, setFrameMaterial] = useState('');
  const [templeMaterial, setTempleMaterial] = useState('');
  const [prescriptionType, setPrescriptionType] = useState('');
  const [visionType, setVisionType] = useState('');
  const [frameStyleSecondary, setFrameStyleSecondary] = useState('');
  const [collection, setCollection] = useState('');
  const [productWarranty, setProductWarranty] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [condition, setCondition] = useState('');
  const [templeColour, setTempleColour] = useState('');
  const [brandName, setBrandName] = useState('');
  const [productType, setProductType] = useState('');
  const [frameType, setFrameType] = useState('');
  const [frameShape, setFrameShape] = useState('');

  useEffect(() => {
    if (product) {
      setProductName(product.name || '');
      setProductPrice(product.price || '');
      setProductStock(product.stock || '');
      setProductCategory(product.category || '');
      setProductId(product.productId || '');
      setFrameStyle(product.frameStyle || '');
      setModelNo(product.modelNo || '');
      setFrameWidth(product.frameWidth || '');
      setFrameDimensions(product.frameDimensions || '');
      setFrameColour(product.frameColour || '');
      setWeight(product.weight || '');
      setWeightGroup(product.weightGroup || '');
      setMaterial(product.material || '');
      setFrameMaterial(product.frameMaterial || '');
      setTempleMaterial(product.templeMaterial || '');
      setPrescriptionType(product.prescriptionType || '');
      setVisionType(product.visionType || '');
      setFrameStyleSecondary(product.frameStyleSecondary || '');
      setCollection(product.collection || '');
      setProductWarranty(product.productWarranty || '');
      setGender(product.gender || '');
      setHeight(product.height || '');
      setCondition(product.condition || '');
      setTempleColour(product.templeColour || '');
      setBrandName(product.brandName || '');
      setProductType(product.productType || '');
      setFrameType(product.frameType || '');
      setFrameShape(product.frameShape || '');
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: product.id,
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

    onUpdateProduct(updatedProduct);
    onClose();
  };

  return (
    <div className="edit-product-modal">
      <div className="modal-content">
        <h4>Edit Product</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            placeholder="Product Name"
          />
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
            placeholder="Product Price"
          />
          <input
            type="text"
            value={productStock}
            onChange={(e) => setProductStock(e.target.value)}
            required
            placeholder="Stock"
          />
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
            placeholder="Category"
          />
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Product ID"
          />
          <input
            type="text"
            value={frameStyle}
            onChange={(e) => setFrameStyle(e.target.value)}
            placeholder="Frame Style"
          />
          <input
            type="text"
            value={modelNo}
            onChange={(e) => setModelNo(e.target.value)}
            placeholder="Model No"
          />
          <input
            type="text"
            value={frameWidth}
            onChange={(e) => setFrameWidth(e.target.value)}
            placeholder="Frame Width"
          />
          <input
            type="text"
            value={frameDimensions}
            onChange={(e) => setFrameDimensions(e.target.value)}
            placeholder="Frame Dimensions"
          />
          <input
            type="text"
            value={frameColour}
            onChange={(e) => setFrameColour(e.target.value)}
            placeholder="Frame Colour"
          />
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight"
          />
          <input
            type="text"
            value={weightGroup}
            onChange={(e) => setWeightGroup(e.target.value)}
            placeholder="Weight Group"
          />
          <input
            type="text"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            placeholder="Material"
          />
          <input
            type="text"
            value={frameMaterial}
            onChange={(e) => setFrameMaterial(e.target.value)}
            placeholder="Frame Material"
          />
          <input
            type="text"
            value={templeMaterial}
            onChange={(e) => setTempleMaterial(e.target.value)}
            placeholder="Temple Material"
          />
          <input
            type="text"
            value={prescriptionType}
            onChange={(e) => setPrescriptionType(e.target.value)}
            placeholder="Prescription Type"
          />
          <input
            type="text"
            value={visionType}
            onChange={(e) => setVisionType(e.target.value)}
            placeholder="Vision Type"
          />
          <input
            type="text"
            value={frameStyleSecondary}
            onChange={(e) => setFrameStyleSecondary(e.target.value)}
            placeholder="Frame Style Secondary"
          />
          <input
            type="text"
            value={collection}
            onChange={(e) => setCollection(e.target.value)}
            placeholder="Collection"
          />
          <input
            type="text"
            value={productWarranty}
            onChange={(e) => setProductWarranty(e.target.value)}
            placeholder="Product Warranty"
          />
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Gender"
          />
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height"
          />
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder="Condition"
          />
          <input
            type="text"
            value={templeColour}
            onChange={(e) => setTempleColour(e.target.value)}
            placeholder="Temple Colour"
          />
          <input
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="Brand Name"
          />
          <input
            type="text"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            placeholder="Product Type"
          />
          <input
            type="text"
            value={frameType}
            onChange={(e) => setFrameType(e.target.value)}
            placeholder="Frame Type"
          />
          <input
            type="text"
            value={frameShape}
            onChange={(e) => setFrameShape(e.target.value)}
            placeholder="Frame Shape"
          />
          <button type="submit">Update Product</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;

