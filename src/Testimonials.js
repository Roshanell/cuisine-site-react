import "./App.css";

function Testimonials() {
	return (
		<div>
			<section className="testimonial">
				<span> Testimonials</span>
				<h2> Customers Say</h2>
				<img
					className="client"
					src="https://i.imgur.com/0RIfGf7.png"
					alt="Image of Client"
				/>
				<h5>Mr. John Davidson</h5>
				<span> Art Director </span>
				<br />
				<i className="fa-solid fa-star"></i>
				<i className="fa-solid fa-star"></i>
				<i className="fa-solid fa-star"></i>
				<i className="fa-solid fa-star"></i>
				<i className="fa-solid fa-star"></i>
				{/* <!-- <img className= "testimonialImg"src="#" alt="rating review"> --> */}
				<p className="testimomial-content">
					
					"I thoroughly enjoy eating their delicious boneless, skinless chicken
					breasts which are smothered with fresh mushrooms in garlic and white
					wine sauce. Exquisite Cuisine's service is top tier. I highly
					recommend!"
				</p>
			</section>
		</div>
	);
}

export default Testimonials;
