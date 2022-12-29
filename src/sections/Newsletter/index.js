const Newsletter = () => {
	return (
		<>
			<div className="newsletter-section newsletter-two pos-r mt-190 md-mt-150">
				<div className="shape-wrapper">
					<svg className="img-shape shape-one">
						<path
							fillRule="evenodd"
							fill="rgb(255, 205, 111)"
							d="M8.000,15.999 C12.418,15.999 16.000,12.417 16.000,7.999 C16.000,3.581 12.418,-0.001 8.000,-0.001 C3.582,-0.001 -0.000,3.581 -0.000,7.999 C-0.000,12.417 3.582,15.999 8.000,15.999 Z"
						/>
					</svg>
					<svg className="img-shape shape-two">
						<path
							fillRule="evenodd"
							fill="rgb(206, 124, 255)"
							d="M5.500,10.999 C8.537,10.999 11.000,8.537 11.000,5.499 C11.000,2.462 8.537,-0.001 5.500,-0.001 C2.462,-0.001 -0.000,2.462 -0.000,5.499 C-0.000,8.537 2.462,10.999 5.500,10.999 Z"
						/>
					</svg>
				</div>
				<div className="container">
					<div className="main-wrapper">
						<div className="theme-title-one text-center pb-55">
							<h2 className="main-title">
								Subscribe Newslatter & get
								<br /> <i>Company News.</i>
							</h2>
						</div>
						<form className="ajax-sub-form" method="post">
							<input
								type="email"
								placeholder="Enter your email"
								id="subscription-email"></input>
							<button className="button-rose">
								<i className="flaticon-next"></i>
							</button>
							<label className="subscription-label" htmlFor="subscription-email"></label>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Newsletter;
