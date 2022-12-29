import React, { useEffect } from "react";
import $ from "jquery";

import Loader from "components/Loader";
import Header from "components/Header";
import Main from "sections/Hero/Main";
import About from "sections/About";
import Features from "sections/Features";
import Gallery from "sections/Gallery";
import Pricing from "sections/Pricing";
import Testimonial from "sections/Testimonial";
import Partner from "sections/Partner";
import Contact from "sections/Contact";
import Newsletter from "sections/Newsletter";
import Footer from "components/Footer";

function Home() {
	useEffect(() => {
		$(function () {
			$("#ctn-preloader").fadeOut(); //fadeOut animazione di loading
			$("#preloader").delay(500).fadeOut("slow"); //
			$("body").delay(500).css({ overflow: "visible" });
		});
	}, []);

	return (
		<>
			<div className="main-page-wrapper">
				<Loader />
				<Header />

				<Main />

				<About />

				<Features />

				<Gallery />

				<Pricing />

				<Testimonial />

				<Partner />

				<Contact />

				<Newsletter />

				<Footer />

				<button className="scroll-top tran3s">
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</button>
			</div>
		</>
	);
}

export default Home;
