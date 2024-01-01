const HeroSection = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h2>YOUR FEET DESERVE THE BEST</h2>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="Hero_btn">
          <button className="login_btn">SHOP NOW</button>
          <button className="category_btn">Category</button>
        </div>
        <div>
          <p>Also Available On</p>
          <div className="Hero-link">
            <img src="../public/assets/flipkart.png" alt="" />
            <img src="../public/assets/amazon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="Hero-image">
        <img src="../public/assets/shoe_image.png" alt="" />
      </div>
    </div>
  );
};
export default HeroSection;
