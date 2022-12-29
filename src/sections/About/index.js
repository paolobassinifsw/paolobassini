const About = () => {
	return (
		<>
			<div className="about-us-block-two pt-250 pb-250 md-pt-30 md-pb-100 pos-r">
				<div className="shape-wrapper">
					<svg
						className="img-shape shape-one"
						data-aos="fade-right"
						data-aos-duration="3000">
						<defs>
							<linearGradient id="PSgrad_11" x1="0%" x2="42.262%" y1="0%" y2="90.631%">
								<stop offset="0%" stopColor="rgb(250,110,185)" stopOpacity="1" />
								<stop offset="100%" stopColor="rgb(255,207,170)" stopOpacity="1" />
							</linearGradient>
						</defs>
						<path
							fillRule="evenodd"
							opacity="0.247"
							fill="url(#PSgrad_11)"
							d="M481.000,961.999 C746.649,961.999 962.000,746.649 962.000,480.999 C962.000,215.351 746.649,-0.000 481.000,-0.000 C215.351,-0.000 -0.000,215.351 -0.000,480.999 C-0.000,746.649 215.351,961.999 481.000,961.999 Z"
						/>
					</svg>

					<svg
						className="img-shape shape-two"
						data-aos="fade-right"
						data-aos-duration="3000">
						<defs>
							<linearGradient id="PSgrad_22" x1="0%" x2="42.262%" y1="0%" y2="90.631%">
								<stop offset="0%" stopColor="rgb(250,110,185)" stopOpacity="1" />
								<stop offset="100%" stopColor="rgb(255,207,170)" stopOpacity="1" />
							</linearGradient>
						</defs>
						<path
							fillRule="evenodd"
							opacity="0.082"
							fill="url(#PSgrad_22)"
							d="M481.000,961.999 C746.649,961.999 962.000,746.649 962.000,481.000 C962.000,215.351 746.649,-0.000 481.000,-0.000 C215.351,-0.000 -0.000,215.351 -0.000,481.000 C-0.000,746.649 215.351,961.999 481.000,961.999 Z"
						/>
					</svg>
					<svg className="img-shape shape-three">
						<path
							fillRule="evenodd"
							fill="rgb(255, 234, 208)"
							d="M10.000,20.000 C15.523,20.000 20.000,15.523 20.000,10.000 C20.000,4.477 15.523,-0.001 10.000,-0.001 C4.477,-0.001 -0.000,4.477 -0.000,10.000 C-0.000,15.523 4.477,20.000 10.000,20.000 Z"
						/>
					</svg>
					<svg className="img-shape shape-four">
						<path
							fillRule="evenodd"
							opacity="0.451"
							fill="rgb(255, 126, 190)"
							d="M10.000,20.000 C15.523,20.000 20.000,15.522 20.000,10.000 C20.000,4.477 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.477 -0.000,10.000 C-0.000,15.522 4.477,20.000 10.000,20.000 Z"
						/>
					</svg>
					<svg className="img-shape shape-five">
						<path
							fillRule="evenodd"
							fill="rgb(255, 156, 161)"
							d="M5.000,9.999 C7.761,9.999 10.000,7.761 10.000,5.000 C10.000,2.238 7.761,-0.001 5.000,-0.001 C2.238,-0.001 -0.000,2.238 -0.000,5.000 C-0.000,7.761 2.238,9.999 5.000,9.999 Z"
						/>
					</svg>
				</div>
				<div className="inner-wrapper pos-r">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 order-lg-last">
								<div className="theme-title-one pt-70 md-p0">
									<div className="upper-title mb-5">About us</div>
									<h2 className="main-title">
										Great Digital Agency <i>Since 1980.</i>
									</h2>
								</div>
								<div className="mark-text pt-25 pb-35">Creative & Proffesional Digital</div>
								<p className="pb-60">
									We put your ideas and thus your wishes in the m of a unique web project that
									inspires you and you customers. We’ve expert team to solve your problems.
								</p>
								<a
									href="about-agency.html"
									className="theme-btn solid-button-one button-rose"
									data-aos="fade-up">
									Explore More
								</a>
							</div>
							<div className="col-lg-6 order-lg-first">
								<div className="main-img-box pos-r hide-pr md-mt-50">
									<div className="img-one pos-r wow fadeInLeft" data-wow-duration="2s">
										<img src="images/home/9.jpg" alt="" />
									</div>
									<div
										className="img-two pos-r wow fadeInLeft"
										data-wow-duration="2s"
										data-wow-delay="0.2s">
										<img src="images/home/10.jpg" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
