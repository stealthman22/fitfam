import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		// sending emails with js
		emailjs
			.sendForm(
				"service_73wts3q",
				"template_gn09kau",
				form.current,
				"KPq0Hn7jmlL4oYTxD"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="join" id="join-us">
			<div className="left-j">
				<hr />
				<div>
					<span className="stroke-text">Ready to</span>
					<span>Level up</span>
				</div>
				<div>
					<span>Your fitness</span>
					<span className="stroke-text">With us?</span>
				</div>
			</div>
			<div className="right-j">
				<form onSubmit={sendEmail} ref={form} className="email-container">
					<input
						type="email"
						name="user_email"
						placeholder="Please enter your business Email "
					/>
					<button className="btn btn-j">Join Now</button>
				</form>
			</div>
		</div>
	);
};

export default Join;
