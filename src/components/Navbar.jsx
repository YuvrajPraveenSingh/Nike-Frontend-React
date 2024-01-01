const Navbar = () => {
return (
    <>
    <div className="nav-box">
    <nav>
    <div className="logo">
        <img src="../public/assets/brand_logo.png" alt="logo" />
    </div>
    <div className="menu">
        <ul className="nav-link">
            <li>menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    </div>
    <div className="login">
        <button className="login_btn">Login</button>
        <button className="signup_btn">Sign Up</button>
    </div>
    </nav>
    </div>
    </>
    );
}

export default Navbar;