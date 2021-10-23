import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/giorgi.png"
					alt="Image of Giorgi Alvarez"
					width={800}
					height={800}
				/>
			</div>
			<h1>Hi, I'm Giorgi</h1>
			<p>
				I blog about web development - especially frontend frameworks like
				ReactJS.
			</p>
		</section>
	);
}
