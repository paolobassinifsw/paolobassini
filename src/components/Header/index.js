const Header = () => {
	return (
		<div className="theme-main-menu theme-menu-two main-p-color sticky-menu">
			<div className="d-flex align-items-center">
				<div className="logo">
					<a href="index.html">
						<img src="images/logo/logo.svg" alt="" />
					</a>
				</div>
				<div className="right-content ml-auto order-lg-3">
					<a
						href="contact-v1.html"
						className="theme-btn line-button-one button-rose contact-button button-white-bg">
						Contact us
					</a>
				</div>
				<nav id="mega-menu-holder" className="navbar navbar-expand-lg order-lg-2">
					<div className="container nav-container">
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<i className="flaticon-setup"></i>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav">
								<li className="nav-item dropdown mega-dropdown-holder active">
									<a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
										Home
									</a>
									<ul className="dropdown-menu mega-container">
										<li>
											<div className="clearfix">
												<div className="row">
													<div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
														<a href="index.html" className="img-box">
															<span className="img">
																<img src="images/menu-img/home-1.jpg" alt="" />
															</span>
															<span className="text">Creative Agency 2</span>
														</a>
													</div>
													<div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
														<a href="index-2.html" className="img-box">
															<span className="img">
																<img src="images/menu-img/home-2.jpg" alt="" />
															</span>
															<span className="text">SEO Agency</span>
														</a>
													</div>
													<div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3 ml-auto">
														<a href="index-3.html" className="img-box">
															<span className="img">
																<img src="images/menu-img/home-3.jpg" alt="" />
															</span>
															<span className="text">Business Agency</span>
														</a>
													</div>
													<div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
														<a href="index-4.html" className="img-box">
															<span className="img">
																<img src="images/menu-img/home-4.jpg" alt="" />
															</span>
															<span className="text">Creative Agency 3</span>
														</a>
													</div>
													<div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
														<a href="index-5.html" className="img-box">
															<span className="img">
																<img src="images/menu-img/home-5.jpg" alt="" />
															</span>
															<span className="text">Business Agency 2</span>
														</a>
													</div>
													<div className="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3 mr-auto">
														<a href="/" className="img-box">
															<span className="img">
																<img src="images/menu-img/cs.jpg" alt="" />
															</span>
															<span className="text">Coming Soon</span>
														</a>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
										Pages.
									</a>
									<ul className="dropdown-menu">
										<li className="dropdown-submenu dropdown">
											<a className="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
												About Us
											</a>
											<ul className="dropdown-menu">
												<li>
													<a href="about-agency.html" className="dropdown-item">
														About Us agency
													</a>
												</li>
												<li>
													<a href="about-standard.html" className="dropdown-item">
														About Us standard
													</a>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu dropdown">
											<a className="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
												Project
											</a>
											<ul className="dropdown-menu">
												<li>
													<a href="portfolio-v1.html" className="dropdown-item">
														Project Full width
													</a>
												</li>
												<li>
													<a href="portfolio-v4.html" className="dropdown-item">
														Project minimal
													</a>
												</li>
												<li>
													<a href="portfolio-v5.html" className="dropdown-item">
														Project with sidebar
													</a>
												</li>
												<li>
													<a href="portfolio-v2.html" className="dropdown-item">
														Project masonry full
													</a>
												</li>
												<li>
													<a href="portfolio-v3.html" className="dropdown-item">
														Project Standard
													</a>
												</li>
												<li className="dropdown-submenu dropdown">
													<a className="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
														Project Details
													</a>
													<ul className="dropdown-menu">
														<li>
															<a href="portfolio-details-v1.html" className="dropdown-item">
																Project Details One
															</a>
														</li>
														<li>
															<a href="portfolio-details-v2.html" className="dropdown-item">
																Project Details Two
															</a>
														</li>
														<li>
															<a href="portfolio-details-v3.html" className="dropdown-item">
																Project Details Three
															</a>
														</li>
														<li>
															<a href="portfolio-details-v4.html" className="dropdown-item">
																Project Details Four
															</a>
														</li>
														<li>
															<a href="portfolio-details-v5.html" className="dropdown-item">
																Project Details five
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu dropdown">
											<a className="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
												Services
											</a>
											<ul className="dropdown-menu">
												<li>
													<a href="service-v1.html" className="dropdown-item">
														Service creative
													</a>
												</li>
												<li>
													<a href="service-v2.html" className="dropdown-item">
														service minimal
													</a>
												</li>
												<li>
													<a href="service-v3.html" className="dropdown-item">
														service modern
													</a>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu dropdown">
											<a className="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
												Team
											</a>
											<ul className="dropdown-menu">
												<li>
													<a href="team-v1.html" className="dropdown-item">
														Team Business
													</a>
												</li>
												<li>
													<a href="team-v2.html" className="dropdown-item">
														Team minimal
													</a>
												</li>
												<li>
													<a href="team-v3.html" className="dropdown-item">
														Team standard
													</a>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu dropdown">
											<a className="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
												Contact Us
											</a>
											<ul className="dropdown-menu">
												<li>
													<a href="contact-v1.html" className="dropdown-item">
														Contact Agency
													</a>
												</li>
												<li>
													<a href="contact-v2.html" className="dropdown-item">
														Contact Minimal
													</a>
												</li>
												<li>
													<a href="contact-v3.html" className="dropdown-item">
														Contact standard
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a className="dropdown-item" href="error-v1.html">
												Error
											</a>
										</li>
									</ul>
								</li>
								<li className="nav-item dropdown icon-menu">
									<a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
										Features.
									</a>
									<ul className="dropdown-menu">
										<li className="dropdown-submenu dropdown">
											<a className="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
												<i className="fa fa-shopping-bag icon" aria-hidden="true"></i>
												Shop
											</a>
											<ul className="dropdown-menu">
												<li>
													<a href="shop-full-width.html" className="dropdown-item">
														Shop Full width
													</a>
												</li>
												<li>
													<a href="shop-sidebar.html" className="dropdown-item">
														Shop With sidebar
													</a>
												</li>
												<li>
													<a href="shop-details.html" className="dropdown-item">
														Single product
													</a>
												</li>
											</ul>
										</li>
										<li className="dropdown-submenu dropdown">
											<a href="/" className="dropdown-item dropdown-toggle" data-toggle="dropdown">
												<i className="fa fa-question-circle icon" aria-hidden="true"></i>
												Faq
											</a>
											<ul className="dropdown-menu">
												<li>
													<a href="faq-v2.html" className="dropdown-item">
														Faq Standard
													</a>
												</li>
												<li>
													<a href="faq-v1.html" className="dropdown-item">
														Faq Minimal
													</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="checkout.html" className="dropdown-item">
												<i className="fa fa-check-circle icon" aria-hidden="true"></i>
												Checkout
											</a>
										</li>
										<li>
											<a href="cart.html" className="dropdown-item">
												<i className="fa fa-shopping-cart icon" aria-hidden="true"></i>
												Cart
											</a>
										</li>
										<li className="dropdown-submenu dropdown">
											<a className="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
												<i className="fa fa-user icon" aria-hidden="true"></i>
												User pages
											</a>
											<ul className="dropdown-menu">
												<li>
													<a href="signin-standard.html" className="dropdown-item">
														Login Standard
													</a>
												</li>
												<li>
													<a href="signin-minimal.html" className="dropdown-item">
														Login Minimal
													</a>
												</li>
												<li>
													<a href="sign-up-standard.html" className="dropdown-item">
														Sign-Up Standard
													</a>
												</li>
												<li>
													<a href="sign-up-minimal.html" className="dropdown-item">
														Sign-Up Minimal
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li className="nav-item dropdown mega-dropdown-holder">
									<a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
										elements.
									</a>
									<ul className="dropdown-menu mega-container">
										<li>
											<div className="container">
												<div className="row">
													<div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
														<h6 className="mega-menu-title">Element 1</h6>
														<ul className="list-unstyled mega-dropdown-list">
															<li>
																<a href="ui-testimonial.html">
																	<img src="images/menu-icon/icon1.svg" alt="" className="svg" />
																	Testimonials
																</a>
															</li>
															<li>
																<a href="ui-pricing-table.html">
																	<img src="images/menu-icon/icon2.svg" alt="" className="svg" />
																	Pricing Plan
																</a>
															</li>
															<li>
																<a href="ui-team.html">
																	<img src="images/menu-icon/icon3.svg" alt="" className="svg" />
																	Team
																</a>
															</li>
															<li>
																<a href="ui-dropdown.html">
																	<img src="images/menu-icon/icon4.svg" alt="" className="svg" />
																	Dropdown
																</a>
															</li>
															<li>
																<a href="ui-tooltips.html">
																	<img src="images/menu-icon/icon5.svg" alt="" className="svg" />
																	Tooltips
																</a>
															</li>
															<li>
																<a href="ui-fancy-text.html">
																	<img src="images/menu-icon/icon6.svg" alt="" className="svg" />
																	Fancy Text
																</a>
															</li>
															<li>
																<a href="ui-header.html">
																	<img src="images/menu-icon/icon16.svg" alt="" className="svg" />
																	Header <span>New</span>
																</a>
															</li>
														</ul>
													</div>
													<div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
														<h6 className="mega-menu-title">Element 2</h6>
														<ul className="list-unstyled mega-dropdown-list">
															<li>
																<a href="ui-accordion.html">
																	<img src="images/menu-icon/icon7.svg" alt="" className="svg" />
																	Accordion
																</a>
															</li>
															<li>
																<a href="ui-alert.html">
																	<img src="images/menu-icon/icon8.svg" alt="" className="svg" />
																	Alert
																</a>
															</li>
															<li>
																<a href="ui-badges.html">
																	<img src="images/menu-icon/icon9.svg" alt="" className="svg" />
																	Badges
																</a>
															</li>
															<li>
																<a href="ui-gallery.html">
																	<img src="images/menu-icon/icon10.svg" alt="" className="svg" />
																	Gallery
																</a>
															</li>
															<li>
																<a href="ui-typography.html">
																	<img src="images/menu-icon/icon11.svg" alt="" className="svg" />
																	Typography
																</a>
															</li>
															<li>
																<a href="ui-tabs.html">
																	<img src="images/menu-icon/icon18.svg" alt="" className="svg" />
																	Tabs
																</a>
															</li>
														</ul>{" "}
													</div>
													<div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
														<h6 className="mega-menu-title">Element 3</h6>
														<ul className="list-unstyled mega-dropdown-list">
															<li>
																<a href="ui-blog-post.html">
																	<img src="images/menu-icon/icon12.svg" alt="" className="svg" />
																	Post
																</a>
															</li>
															<li>
																<a href="ui-breadcrumbs.html">
																	<img src="images/menu-icon/icon13.svg" alt="" className="svg" />
																	Breadcrumbs
																</a>
															</li>
															<li>
																<a href="ui-button.html">
																	<img src="images/menu-icon/icon14.svg" alt="" className="svg" />
																	Button
																</a>
															</li>
															<li>
																<a href="ui-list.html">
																	<img src="images/menu-icon/icon15.svg" alt="" className="svg" />
																	List
																</a>
															</li>
															<li>
																<a href="ui-footer.html">
																	<img src="images/menu-icon/icon16.svg" alt="" className="svg" />
																	Footer
																</a>
															</li>
															<li>
																<a href="ui-subscribe.html">
																	<img src="images/menu-icon/icon4.svg" alt="" className="svg" />
																	Newsletter{" "}
																</a>
															</li>
														</ul>
													</div>
													<div className="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
														<h6 className="mega-menu-title">Element 4</h6>
														<ul className="list-unstyled mega-dropdown-list">
															<li>
																<a href="ui-color.html">
																	<img src="images/menu-icon/icon17.svg" alt="" className="svg" />
																	Color
																</a>
															</li>
															<li>
																<a href="ui-contact-form.html">
																	<img src="images/menu-icon/icon18.svg" alt="" className="svg" />
																	Contact Form
																</a>
															</li>
															<li>
																<a href="ui-counter.html">
																	<img src="images/menu-icon/icon19.svg" alt="" className="svg" />
																	Counter
																</a>
															</li>
															<li>
																<a href="ui-pagination.html">
																	<img src="images/menu-icon/icon20.svg" alt="" className="svg" />
																	Pagination
																</a>
															</li>
															<li>
																<a href="ui-modal.html">
																	<i className="icon flaticon-login"></i> Modal
																</a>
															</li>
															<li>
																<a href="ui-client.html">
																	<img src="images/menu-icon/icon3.svg" alt="" className="svg" />
																	Client
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
										News.
									</a>
									<ul className="dropdown-menu">
										<li>
											<a href="blog-v1.html" className="dropdown-item">
												Blog default
											</a>
										</li>
										<li>
											<a href="blog-v5.html" className="dropdown-item">
												Blog filter
											</a>
										</li>
										<li>
											<a href="blog-v3.html" className="dropdown-item">
												Blog Creative
											</a>
										</li>
										<li>
											<a href="blog-v4.html" className="dropdown-item">
												Blog Full Grid
											</a>
										</li>
										<li>
											<a href="blog-v2.html" className="dropdown-item">
												blog 2 Column
											</a>
										</li>
										<li>
											<a href="blog-details-v2.html" className="dropdown-item">
												blog details default
											</a>
										</li>
										<li>
											<a href="blog-details-v1.html" className="dropdown-item">
												blog details full grid
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
