import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
	return (
		<div className="hero">
			<div className="left-h">
				<Header />
				{/* The best ad */}
				<div className="the-best-ad">
					<div></div>
					<span>The best fitness club in Accra</span>
				</div>
				{/* Hero heading */}
				<div className="hero-text">
					<div>
						<span className="stroke-text">Scuplt </span>
						<span>Your</span>
					</div>
					<div>
						<span>Ideal Body</span>
					</div>
					<div>
						<span>
							At fitfam we teach you how to get your fitness right, help you
							<br />
							stay motivated, consistent and healthy all through the process.
						</span>
					</div>
				</div>
				{/* Experience figures */}
				<div className="figures">
					<div>
						<span>+20 </span>
						<span>expert coaches</span>
					</div>
					<div>
						<span>+200 </span>
						<span>members joined</span>
					</div>
					<div>
						<span>+6 </span>
						<span>Gymnasium locations</span>
					</div>
					{/* <div>
						<span>+40 </span>
						<span>health & fitness programs</span>
					</div>
					<div>
						<span>+10 </span>
						<span>massage & chiro programs</span>
					</div> */}
				</div>
				{/* Hero buttons */}
				<div className="hero-buttons">
					<button className="btn">Get Started</button>
					<button className="btn">Learn More</button>
				</div>
			</div>
			<div className="right-h">
				<button className="btn">Join Now</button>
				<div className="heart-rate">
					<img src={Heart} alt="" />
					<span>Heart Rate</span>
					<span>116 Bpm</span>
				</div>
				{/* hero images */}
				<img src={hero_image} alt="" className="hero-image" />
				<img src={hero_image_back} alt="" className="hero-image-back" />

				{/* Calories */}
				<div className="calories">
					<img src={Calories} alt="" />
					<div>
						<span> Calories Burned</span>
						<span>220 kcal</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
