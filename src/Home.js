import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
// import { FaShoppingCart  } from "react-icons/fa";

function Home() {
	// const element = <FontAwesomeIcon icon={faCoffee} />;

	return (
		<main className="hero-body">
			<div className="homePage">
			
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className="home-container">
					<h1 className="greeting">
						Welcome <br /> to Our Cuisine <br /> Restaurant
					</h1>
					<div>
						<form action="">
							<label for="site-search"> </label>
							<input
								type="search"
								id="site-search"
								name="q"
								placeholder=" Search here "
							/>

							<select className="dropDownList">
								<option value="Home">
									{" "}
									<a href="#">Home</a>
								</option>
								<option value="Home">
									{" "}
									<a href="#">About Us</a>
								</option>
								<option value="Home">
									{" "}
									<a href="#">Menu</a>
								</option>
								<option value="Home">
									{" "}
									<a href="#">Order Now</a>
								</option>
								<option value="Home">
									{" "}
									<a href="#">Blog</a>
								</option>
								<option value="Home">
									{" "}
									<a href="#">Location</a>
								</option>
							</select>
						</form>
					</div>
					<div className="socialMedia">
						<ul className="hero-social-media">
							<li className="social-li">
								<FaFacebookF /> 125K
							</li>
							<li className="social-li">
								<FaInstagram /> 80K
							</li>
							<li className="social-li">
								<FaTwitter /> 35K
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Home;
