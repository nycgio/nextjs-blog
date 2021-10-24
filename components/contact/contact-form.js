import { useRef } from "react";
import classes from "./contact-form.module.css";

export default function ContactForm() {
	const emailRef = useRef();
	const nameRef = useRef();
	const messageRef = useRef();

	const contactForm = (e) => {
		e.preventDefault();

		const currentEmail = emailRef.current.value;
		const currentName = nameRef.current.value;
		const currentMessage = messageRef.current.value;

		fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify({
				email: currentEmail,
				name: currentName,
				message: currentMessage,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	return (
		<section className={classes.contact}>
			<h1>How can i help you?</h1>
			<form className={classes.form} onSubmit={contactForm}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input type="email" id="email" required ref={emailRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input type="text" id="name" required ref={nameRef} />
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea id="message" rows="5" ref={messageRef}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	);
}
