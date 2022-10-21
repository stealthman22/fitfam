import React from "react";
import "./Plans.css";
import "../../data/plansData";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
	return (
		<div className="plans-container">
			{/* Plans header */}
			<div className="programs-header" style={{ gap: "2rem" }}>
				<span className="stroke-text">Ready to begin </span>
				<span> Your Fitness Journey </span>
				<span className="stroke-text">with us ?</span>
			</div>

			{/* Plans Card */}
			<div className="plans">
				{plansData.map((plan, i) => (
					<div className="plan" key={i}>
						{plan.icon}
						<span>{plan.name} </span>
						<span>$ {plan.price} </span>

						<div className="features">
							{plan.features.map((feature, i) => (
								<div className="feature ">
									<img src={whiteTick} alt="" />
									<span key={i}>{feature}</span>
								</div>
							))}
						</div>
						<div>
							<span>See more benefits</span>
						</div>
						<button className="btn">Join now</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Plans;
