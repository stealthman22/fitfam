import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
	return (
		<div className="programs" id="Programs">
			<div className="programs-header">
				<span className="stroke-text">Check out our</span>
				<span>Programs</span>
				<span className="stroke-text">that will get you into shape</span>
			</div>
			<div className="program-categories">
				{programsData.map((program) => (
					<div className="category">
						{program.image}
						<span>{program.heading}</span>
						<span>{program.details}</span>
						<div className="join-now">
							<span>Join Now</span>
							<span>
								<img src={RightArrow} alt="" />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Programs;
