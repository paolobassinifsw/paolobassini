const Testimonial = () => {
	return (
		<>
			<div className="testimonial-section-standard pos-r pt-300 pb-225 md-pt-70 md-pb-30">
				<div className="shape-wrapper">
					<svg
						className="img-shape shape-one"
						data-aos="fade-right"
						data-aos-duration="3000">
						<defs>
							<linearGradient id="PSgrad_914g" x1="0%" x2="0%" y1="0%" y2="100%">
								<stop offset="0%" stopColor="rgb(250,217,97)" stopOpacity="1" />
								<stop offset="100%" stopColor="rgb(255,142,78)" stopOpacity="1" />
							</linearGradient>
						</defs>
						<path
							fillRule="evenodd"
							opacity="0.416"
							fill="url(#PSgrad_914g)"
							d="M425.500,850.999 C660.497,850.999 851.000,660.496 851.000,425.499 C851.000,190.502 660.497,-0.001 425.500,-0.001 C190.503,-0.001 0.000,190.502 0.000,425.499 C0.000,660.496 190.503,850.999 425.500,850.999 Z"
						/>
					</svg>

					<svg
						className="img-shape shape-two"
						data-aos="fade-right"
						data-aos-duration="3000">
						<defs>
							<linearGradient id="PSgrad_xcty" x1="0%" x2="0%" y1="0%" y2="100%">
								<stop offset="0%" stopColor="rgb(250,217,97)" stopOpacity="1" />
								<stop offset="100%" stopColor="rgb(255,142,78)" stopOpacity="1" />
							</linearGradient>
						</defs>
						<path
							fillRule="evenodd"
							opacity="0.11"
							fill="url(#PSgrad_xcty)"
							d="M425.500,850.999 C660.497,850.999 851.000,660.497 851.000,425.500 C851.000,190.502 660.497,-0.000 425.500,-0.000 C190.503,-0.000 -0.000,190.502 -0.000,425.500 C-0.000,660.497 190.503,850.999 425.500,850.999 Z"
						/>
					</svg>
					<svg className="img-shape shape-three">
						<path
							fillRule="evenodd"
							fill="rgb(92, 230, 187)"
							d="M4.500,9.000 C6.985,9.000 9.000,6.985 9.000,4.499 C9.000,2.014 6.985,-0.000 4.500,-0.000 C2.015,-0.000 -0.000,2.014 -0.000,4.499 C-0.000,6.985 2.015,9.000 4.500,9.000 Z"
						/>
					</svg>
					<svg className="img-shape shape-four">
						<path
							fillRule="evenodd"
							fill="rgb(56, 248, 189)"
							d="M10.000,19.999 C15.523,19.999 20.000,15.522 20.000,9.999 C20.000,4.476 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.476 -0.000,9.999 C-0.000,15.522 4.477,19.999 10.000,19.999 Z"
						/>
					</svg>
				</div>
				<div className="main-container d-xl-flex align-items-center">
					<div className="order-lg-last">
						<div className="theme-title-one">
							<div className="upper-title mb-5">Testimonials</div>
							<h2 className="main-title">
								Our Customers <br />
								<i>Feedback.</i>
							</h2>
						</div>
					</div>

					<div className="order-lg-first">
						<div className="slider-wrapper">
							<div className="standard-testimonial-slider">
								<div className="item">
									<div className="customer-content">
										<img src="images/logo/c-1.png" alt="" />
										<p className="pt-25 pb-30">
											Having a home based business is a wonderful assets to your life.Those problem
											still stands.
										</p>
										<div className="d-flex align-items-center">
											<img src="images/home/2.jpg" alt="" className="c-img" />
											<div>
												<h6>Gerald Tucker</h6>
												<span>Dhaka, BD</span>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="customer-content">
										<img src="images/logo/c-2.png" alt="" />
										<p className="pt-25 pb-30">
											Having a home based business is a wonderful assets to your life.Those problem
											still stands.
										</p>
										<div className="d-flex align-items-center">
											<img src="images/home/3.jpg" alt="" className="c-img" />
											<div>
												<h6>Rashed Ka.</h6>
												<span>Dhaka, BD</span>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="customer-content">
										<img src="images/logo/c-1.png" alt="" />
										<p className="pt-25 pb-30">
											Having a home based business is a wonderful assets to your life.Those problem
											still stands.
										</p>
										<div className="d-flex align-items-center">
											<img src="images/home/7.jpg" alt="" className="c-img" />
											<div>
												<h6>Z. Hasan</h6>
												<span>Dhaka, BD</span>
											</div>
										</div>
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

export default Testimonial;
