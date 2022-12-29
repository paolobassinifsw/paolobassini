const Hero = () => {
	return (
		<>
			<div className="rogan-hero-section rogan-hero-three pt-300 pb-350 md-pt-200 md-pb-130 pos-r">
				<div className="shape-wrapper">
					<img
						src="images/home/8.jpg"
						alt=""
						className="main-image-shape img-shape wow fadeInRight animated"
						data-wow-duration="3s"
					/>
					<div
						className="img-shape shape-one wow fadeInRight animated"
						data-wow-duration="2.3s"></div>
					<div
						className="img-shape shape-two wow zoomIn animated"
						data-wow-duration="2.3s"
						data-wow-delay="2.2s"></div>
					<div
						className="img-shape shape-three wow zoomIn animated"
						data-wow-duration="2.3s"
						data-wow-delay="2.2s"></div>
					<svg className="img-shape shape-four">
						<path
							fillRule="evenodd"
							fill="rgb(255, 223, 204)"
							d="M6.000,12.000 C9.314,12.000 12.000,9.313 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.313 2.686,12.000 6.000,12.000 Z"
						/>
					</svg>
					<svg className="img-shape shape-five">
						<path
							fillRule="evenodd"
							fill="rgb(171, 247, 242)"
							d="M12.500,25.000 C19.404,25.000 25.000,19.403 25.000,12.500 C25.000,5.596 19.404,-0.000 12.500,-0.000 C5.596,-0.000 -0.000,5.596 -0.000,12.500 C-0.000,19.403 5.596,25.000 12.500,25.000 Z"
						/>
					</svg>
					<svg className="img-shape shape-six">
						<path
							fillRule="evenodd"
							fill="rgb(255, 156, 161)"
							d="M7.500,15.000 C11.642,15.000 15.000,11.642 15.000,7.500 C15.000,3.358 11.642,-0.000 7.500,-0.000 C3.358,-0.000 -0.000,3.358 -0.000,7.500 C-0.000,11.642 3.358,15.000 7.500,15.000 Z"
						/>
					</svg>
					<svg className="img-shape shape-seven">
						<path
							fillRule="evenodd"
							fill="rgb(181, 198, 255)"
							d="M6.000,12.000 C9.314,12.000 12.000,9.313 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.313 2.686,12.000 6.000,12.000 Z"
						/>
					</svg>
				</div>
				<div className="container">
					<div className="main-wrapper pos-r">
						<div className="banner-upper-heading wow fadeInDown animated">
							Digital Agency
						</div>
						<h1
							className="banner-main-title pt-15 pb-45 md-pb-20 wow fadeInUp animated"
							data-wow-delay="0.4s">
							Paolo Bassini
							<br />
							<span>Creative web</span>
						</h1>
						<p
							className="banner-sub-title pb-45 wow fadeInUp animated"
							data-wow-delay="0.9s">
							Grow your business & boost up sale with rogan
						</p>
						<a
							href="about-agency.html"
							className="theme-btn solid-button-one button-rose wow fadeInLeft animated"
							data-wow-delay="1.5s">
							Explore More
						</a>
						<a
							data-fancybox
							href="https://www.youtube.com/embed/vVXAXDvgPiQ"
							className="fancybox video-button button-rose video-button-one wow fadeInRight animated"
							data-wow-delay="1.5s">
							See live demo. <i className="flaticon-play-button"></i>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
