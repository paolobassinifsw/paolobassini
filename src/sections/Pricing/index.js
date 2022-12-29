const Pricing = () => {
	return (
		<>
			<div className="pricing-plan-classic pt-180 pb-200 md-pt-90 md-pb-100 pos-r">
				<div className="shape-wrapper">
					<svg className="img-shape shape-one">
						<path
							fillRule="evenodd"
							fill="rgb(255, 173, 232)"
							d="M7.500,15.000 C11.642,15.000 15.000,11.641 15.000,7.499 C15.000,3.357 11.642,-0.000 7.500,-0.000 C3.358,-0.000 -0.000,3.357 -0.000,7.499 C-0.000,11.641 3.358,15.000 7.500,15.000 Z"
						/>
					</svg>
					<svg className="img-shape shape-two">
						<path
							fillRule="evenodd"
							fill="rgb(181, 185, 255)"
							d="M6.000,12.000 C9.314,12.000 12.000,9.313 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.313 2.686,12.000 6.000,12.000 Z"
						/>
					</svg>
					<svg className="img-shape shape-three">
						<path
							fillRule="evenodd"
							fill="rgb(164, 206, 255)"
							d="M4.000,8.000 C6.209,8.000 8.000,6.208 8.000,3.999 C8.000,1.790 6.209,-0.001 4.000,-0.001 C1.791,-0.001 -0.000,1.790 -0.000,3.999 C-0.000,6.208 1.791,8.000 4.000,8.000 Z"
						/>
					</svg>
					<svg className="img-shape shape-four">
						<path
							fillRule="evenodd"
							fill="rgb(255, 214, 160)"
							d="M10.000,19.999 C15.523,19.999 20.000,15.522 20.000,10.000 C20.000,4.476 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.476 -0.000,10.000 C-0.000,15.522 4.477,19.999 10.000,19.999 Z"
						/>
					</svg>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 col-md-6 col-12 pt-120 sm-pt-60 sm-pb-40">
							<div className="theme-title-one">
								<div className="upper-title mb-5">Pricing Plan</div>
								<h2 className="main-title">
									Choose Pricing <br />
									<i>Plan.</i>
								</h2>
							</div>
							<p className="pt-20 pb-70">
								We have different type of pricing table to choose with your need with reasonable
								price.
							</p>
							<ul className="nav nav-tabs">
								<li>
									<a data-toggle="tab" href="#monthly" className="active">
										Monthly
									</a>
								</li>
								<li>
									<a data-toggle="tab" href="#yearly">
										Yearly
									</a>
								</li>
							</ul>
						</div>
						<div className="col-lg-6 col-md-6 col-12 ml-auto">
							<div
								className="tab-content pos-r"
								data-aos="fade-left"
								data-aos-duration="2000">
								<div className="table-content">
									<div id="monthly" className="tab-pane price-table in active">
										<div className="col-inner">
											<h6>Subway</h6>
											<div className="price pt-25 pb-35">
												$89.<sup>99</sup>
											</div>
											<div className="tag">Quick job, Small Work</div>
											<ul className="pt-20 pb-40">
												<li>50GB Bandwidth</li>
												<li>Business &amp; Financ Analysing</li>
												<li>24 hour support</li>
												<li>Customer Managemet</li>
											</ul>
											<a href="/" className="theme-btn line-button-two">
												<span></span> Choose Plan
											</a>
										</div>
									</div>
									<div id="yearly" className="tab-pane price-table">
										<div className="col-inner">
											<h6>Subway</h6>
											<div className="price pt-25 pb-35">
												$259.<sup>99</sup>
											</div>
											<div className="tag">Quick job, Small Work</div>
											<ul className="pt-20 pb-40">
												<li>50GB Bandwidth</li>
												<li>Business &amp; Financ Analysing</li>
												<li>24 hour support</li>
												<li>Customer Managemet</li>
											</ul>
											<a href="/" className="theme-btn line-button-two">
												<span></span> Choose Plan
											</a>
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

export default Pricing;
