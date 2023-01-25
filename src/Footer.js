import "./App.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer(){
    return (
			<div>
				<section className="middle">
					<section className="footerTop">
						<section>
							<img src="logo.png" alt="" />
							<span>
								<a href="#header">Safety Precautions</a>
							</span>
							<p>
								Due to the effects the COVID 19 we are limiting dining to 50
								percent capacity. Please call ahead to reserve your seat.
							</p>
						</section>
						<section>
							<h4>Open Hours</h4>
							<span>Mon-Fri: 9 AM - 7 PM</span>
							<span>Saturday: 9 AM - 4 PM</span>
							<span>Sunday: Closed</span>
						</section>
						<section>
							<h4>Contact Us</h4>
							<address>176 W street name, New York, NY 10014</address>
							<span>
								Email: <a href="#">info@contactus.com</a>
							</span>
							<span>
								Telephone: <a href="#">+1(800)000-2356</a>
							</span>
						</section>
						<section>
							<h4>Subscribe </h4>
							<form action="">
								<input placeholder="Email Address" type="email" />
							</form>
						</section>
					</section>
					<div className="logo-container">
						<section className="footerBottom">
							<small>2021 Exquisite Cuisines</small>
						</section>
						<div className="socialMedia">
							<ul className="hero-social-media">
								<li className="social-li">
									<FaFacebookF />
								</li>
								<li className="social-li">
									<FaInstagram />
								</li>
								<li className="social-li">
									<FaTwitter />
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>
		);
}

export default Footer;