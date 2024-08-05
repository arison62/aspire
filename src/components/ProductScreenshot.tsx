import productImg from "../assets/Product screenshot.png";

const ProductScreenshot = () => {
  return (
    <div className="max-container mt-28">
      <div className="flex justify-center border-b">
        <img src={productImg} alt="product screenshot" />
      </div>
    </div>
  );
};

export default ProductScreenshot;
