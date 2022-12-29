const Footer = () => {
	return (
		<>
			<footer className="theme-footer-one main-p-color pt-130">
				<div className="top-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-sm-6 col-12 footer-about-widget">
								<a href="index.html" className="logo">
									<img src="images/logo/logo.svg" alt="" />
								</a>
								<a href="/" className="email">
									rogan.inc@company.com
								</a>
								<a href="/" className="phone">
									720.661.2231
								</a>
							</div>
							<div className="col-lg-3 col-lg-3 col-sm-6 col-12 footer-list">
								<h5 className="footer-title">Services</h5>
								<ul>
									<li>
										<a href="/">Web Design</a>
									</li>
									<li>
										<a href="/">Development</a>
									</li>
									<li>
										<a href="/">Wordpress</a>
									</li>
									<li>
										<a href="/">Online Marketing</a>
									</li>
									<li>
										<a href="/">Content</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-3 col-sm-6 col-12 footer-list">
								<h5 className="footer-title">About us</h5>
								<ul>
									<li>
										<a href="about-standard.html">About us</a>
									</li>
									<li>
										<a href="portfolio-v1.html">Work Portfolio</a>
									</li>
									<li>
										<a href="team-v1.html">Team</a>
									</li>
									<li>
										<a href="/">Plan & Pricing</a>
									</li>
									<li>
										<a href="blog-v1.html">News</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-3 col-lg-2 col-sm-6 col-12 footer-information">
								<h5 className="footer-title">Our Address</h5>
								<p>
									00 Orville Road Apt. 728 <br />
									California, USA
								</p>
								<ul>
									<li>
										<a href="/">
											<i className="fa fa-facebook" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="/">
											<i className="fa fa-twitter" aria-hidden="true"></i>
										</a>
									</li>
									<li>
										<a href="/">
											<i className="fa fa-linkedin" aria-hidden="true"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="bottom-footer-content">
						<p>&copy; 2019 copyright all right reserved</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
