import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
	const [selected, setSelected] = useState(0);
	const tLength = testimonialsData.length;

	return (
		<div className="testimonials">
			<div className="left-t">
				<span>Testimonials </span>
				<span className="stroke-text">What our clients </span>
				<span>are saying </span>
				<span>{testimonialsData[selected].review}</span>
				<span>
					<span style={{ color: "var(--orange)" }}>
						{testimonialsData[selected].name}
					</span>{" "}
					- {testimonialsData[selected].status}
				</span>
			</div>
			<div className="right-t">
				<div></div>
				<div></div>

				<img src={testimonialsData[selected].image} alt="" />

				<div className="arrows">
					{/* basic logic for carousel */}
					<img
						src={leftArrow}
						alt=""
						onClick={() => {
							// if you are at the first item, give me the last item on the list,
							// if you are not on the first item, then give me the item before the current item
							selected === 0
								? setSelected(tLength - 1)
								: setSelected((prev) => prev - 1);
						}}
					/>
					<img
						src={rightArrow}
						alt=""
						onClick={() => {
							// if you are already at the last item, give me the first item
							// if you are not at the last item, return the next item in the list
							selected === tLength - 1
								? setSelected(0)
								: setSelected((prev) => prev + 1);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
