import React from "react";

function Home() {
	return (
		<>
			<div class="main-page-wrapper">
				{/* <!-- ===================================================
				Loading Transition
			==================================================== -->
			<!-- Preloader --> */}
				<section>
					<div id="preloader">
						<div id="ctn-preloader" class="ctn-preloader">
							<div class="animation-preloader">
								<div class="icon">
									<img src="images/1.svg" alt="" />
								</div>
								<div class="txt-loading">
									<span data-text-preloader="R" class="letters-loading">
										P
									</span>
									<span data-text-preloader="O" class="letters-loading">
										A
									</span>
									<span data-text-preloader="G" class="letters-loading">
										O
									</span>
									<span data-text-preloader="A" class="letters-loading">
										L
									</span>
									<span data-text-preloader="N" class="letters-loading">
										O
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- 
			=============================================
				Theme Main Menu
			============================================== 
			--> */}
				<div class="theme-main-menu theme-menu-two main-p-color sticky-menu">
					<div class="d-flex align-items-center">
						<div class="logo">
							<a href="index.html">
								<img src="images/logo/logo.svg" alt="" />
							</a>
						</div>
						<div class="right-content ml-auto order-lg-3">
							<a
								href="contact-v1.html"
								class="theme-btn line-button-one button-rose contact-button button-white-bg">
								Contact us
							</a>
						</div>
						<nav id="mega-menu-holder" class="navbar navbar-expand-lg order-lg-2">
							<div class="container nav-container">
								<button
									class="navbar-toggler navbar-toggler-right"
									type="button"
									data-toggle="collapse"
									data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation">
									<i class="flaticon-setup"></i>
								</button>
								<div class="collapse navbar-collapse" id="navbarSupportedContent">
									<ul class="navbar-nav">
										<li class="nav-item dropdown mega-dropdown-holder active">
											<a class="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
												Home
											</a>
											<ul class="dropdown-menu mega-container">
												<li>
													<div class="clearfix">
														<div class="row">
															<div class="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
																<a href="index.html" class="img-box">
																	<span class="img">
																		<img src="images/menu-img/home-1.jpg" alt="" />
																	</span>
																	<span class="text">Creative Agency 2</span>
																</a>
															</div>
															<div class="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
																<a href="index-2.html" class="img-box">
																	<span class="img">
																		<img src="images/menu-img/home-2.jpg" alt="" />
																	</span>
																	<span class="text">SEO Agency</span>
																</a>
															</div>
															<div class="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3 ml-auto">
																<a href="index-3.html" class="img-box">
																	<span class="img">
																		<img src="images/menu-img/home-3.jpg" alt="" />
																	</span>
																	<span class="text">Business Agency</span>
																</a>
															</div>
															<div class="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
																<a href="index-4.html" class="img-box">
																	<span class="img">
																		<img src="images/menu-img/home-4.jpg" alt="" />
																	</span>
																	<span class="text">Creative Agency 3</span>
																</a>
															</div>
															<div class="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3">
																<a href="index-5.html" class="img-box">
																	<span class="img">
																		<img src="images/menu-img/home-5.jpg" alt="" />
																	</span>
																	<span class="text">Business Agency 2</span>
																</a>
															</div>
															<div class="col-lg-2 col-md-4 col-sm-6 mt-3 mb-3 mt-lg-3 mb-lg-3 mr-auto">
																<a href="/" class="img-box">
																	<span class="img">
																		<img src="images/menu-img/cs.jpg" alt="" />
																	</span>
																	<span class="text">Coming Soon</span>
																</a>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</li>
										<li class="nav-item dropdown">
											<a class="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
												Pages.
											</a>
											<ul class="dropdown-menu">
												<li class="dropdown-submenu dropdown">
													<a class="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
														About Us
													</a>
													<ul class="dropdown-menu">
														<li>
															<a href="about-agency.html" class="dropdown-item">
																About Us agency
															</a>
														</li>
														<li>
															<a href="about-standard.html" class="dropdown-item">
																About Us standard
															</a>
														</li>
													</ul>
												</li>
												<li class="dropdown-submenu dropdown">
													<a class="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
														Project
													</a>
													<ul class="dropdown-menu">
														<li>
															<a href="portfolio-v1.html" class="dropdown-item">
																Project Full width
															</a>
														</li>
														<li>
															<a href="portfolio-v4.html" class="dropdown-item">
																Project minimal
															</a>
														</li>
														<li>
															<a href="portfolio-v5.html" class="dropdown-item">
																Project with sidebar
															</a>
														</li>
														<li>
															<a href="portfolio-v2.html" class="dropdown-item">
																Project masonry full
															</a>
														</li>
														<li>
															<a href="portfolio-v3.html" class="dropdown-item">
																Project Standard
															</a>
														</li>
														<li class="dropdown-submenu dropdown">
															<a class="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
																Project Details
															</a>
															<ul class="dropdown-menu">
																<li>
																	<a href="portfolio-details-v1.html" class="dropdown-item">
																		Project Details One
																	</a>
																</li>
																<li>
																	<a href="portfolio-details-v2.html" class="dropdown-item">
																		Project Details Two
																	</a>
																</li>
																<li>
																	<a href="portfolio-details-v3.html" class="dropdown-item">
																		Project Details Three
																	</a>
																</li>
																<li>
																	<a href="portfolio-details-v4.html" class="dropdown-item">
																		Project Details Four
																	</a>
																</li>
																<li>
																	<a href="portfolio-details-v5.html" class="dropdown-item">
																		Project Details five
																	</a>
																</li>
															</ul>
														</li>
													</ul>
												</li>
												<li class="dropdown-submenu dropdown">
													<a class="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
														Services
													</a>
													<ul class="dropdown-menu">
														<li>
															<a href="service-v1.html" class="dropdown-item">
																Service creative
															</a>
														</li>
														<li>
															<a href="service-v2.html" class="dropdown-item">
																service minimal
															</a>
														</li>
														<li>
															<a href="service-v3.html" class="dropdown-item">
																service modern
															</a>
														</li>
													</ul>
												</li>
												<li class="dropdown-submenu dropdown">
													<a class="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
														Team
													</a>
													<ul class="dropdown-menu">
														<li>
															<a href="team-v1.html" class="dropdown-item">
																Team Business
															</a>
														</li>
														<li>
															<a href="team-v2.html" class="dropdown-item">
																Team minimal
															</a>
														</li>
														<li>
															<a href="team-v3.html" class="dropdown-item">
																Team standard
															</a>
														</li>
													</ul>
												</li>
												<li class="dropdown-submenu dropdown">
													<a class="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
														Contact Us
													</a>
													<ul class="dropdown-menu">
														<li>
															<a href="contact-v1.html" class="dropdown-item">
																Contact Agency
															</a>
														</li>
														<li>
															<a href="contact-v2.html" class="dropdown-item">
																Contact Minimal
															</a>
														</li>
														<li>
															<a href="contact-v3.html" class="dropdown-item">
																Contact standard
															</a>
														</li>
													</ul>
												</li>
												<li>
													<a class="dropdown-item" href="error-v1.html">
														Error
													</a>
												</li>
											</ul>
										</li>
										<li class="nav-item dropdown icon-menu">
											<a class="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
												Features.
											</a>
											<ul class="dropdown-menu">
												<li class="dropdown-submenu dropdown">
													<a class="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
														<i class="fa fa-shopping-bag icon" aria-hidden="true"></i>
														Shop
													</a>
													<ul class="dropdown-menu">
														<li>
															<a href="shop-full-width.html" class="dropdown-item">
																Shop Full width
															</a>
														</li>
														<li>
															<a href="shop-sidebar.html" class="dropdown-item">
																Shop With sidebar
															</a>
														</li>
														<li>
															<a href="shop-details.html" class="dropdown-item">
																Single product
															</a>
														</li>
													</ul>
												</li>
												<li class="dropdown-submenu dropdown">
													<a href="/" class="dropdown-item dropdown-toggle" data-toggle="dropdown">
														<i class="fa fa-question-circle icon" aria-hidden="true"></i>
														Faq
													</a>
													<ul class="dropdown-menu">
														<li>
															<a href="faq-v2.html" class="dropdown-item">
																Faq Standard
															</a>
														</li>
														<li>
															<a href="faq-v1.html" class="dropdown-item">
																Faq Minimal
															</a>
														</li>
													</ul>
												</li>
												<li>
													<a href="checkout.html" class="dropdown-item">
														<i class="fa fa-check-circle icon" aria-hidden="true"></i>
														Checkout
													</a>
												</li>
												<li>
													<a href="cart.html" class="dropdown-item">
														<i class="fa fa-shopping-cart icon" aria-hidden="true"></i>
														Cart
													</a>
												</li>
												<li class="dropdown-submenu dropdown">
													<a class="dropdown-item dropdown-toggle" href="/" data-toggle="dropdown">
														<i class="fa fa-user icon" aria-hidden="true"></i>
														User pages
													</a>
													<ul class="dropdown-menu">
														<li>
															<a href="signin-standard.html" class="dropdown-item">
																Login Standard
															</a>
														</li>
														<li>
															<a href="signin-minimal.html" class="dropdown-item">
																Login Minimal
															</a>
														</li>
														<li>
															<a href="sign-up-standard.html" class="dropdown-item">
																Sign-Up Standard
															</a>
														</li>
														<li>
															<a href="sign-up-minimal.html" class="dropdown-item">
																Sign-Up Minimal
															</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li class="nav-item dropdown mega-dropdown-holder">
											<a class="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
												elements.
											</a>
											<ul class="dropdown-menu mega-container">
												<li>
													<div class="container">
														<div class="row">
															<div class="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
																<h6 class="mega-menu-title">Element 1</h6>
																<ul class="list-unstyled mega-dropdown-list">
																	<li>
																		<a href="ui-testimonial.html">
																			<img src="images/menu-icon/icon1.svg" alt="" class="svg" />
																			Testimonials
																		</a>
																	</li>
																	<li>
																		<a href="ui-pricing-table.html">
																			<img src="images/menu-icon/icon2.svg" alt="" class="svg" />
																			Pricing Plan
																		</a>
																	</li>
																	<li>
																		<a href="ui-team.html">
																			<img src="images/menu-icon/icon3.svg" alt="" class="svg" />
																			Team
																		</a>
																	</li>
																	<li>
																		<a href="ui-dropdown.html">
																			<img src="images/menu-icon/icon4.svg" alt="" class="svg" />
																			Dropdown
																		</a>
																	</li>
																	<li>
																		<a href="ui-tooltips.html">
																			<img src="images/menu-icon/icon5.svg" alt="" class="svg" />
																			Tooltips
																		</a>
																	</li>
																	<li>
																		<a href="ui-fancy-text.html">
																			<img src="images/menu-icon/icon6.svg" alt="" class="svg" />
																			Fancy Text
																		</a>
																	</li>
																	<li>
																		<a href="ui-header.html">
																			<img src="images/menu-icon/icon16.svg" alt="" class="svg" />
																			Header <span>New</span>
																		</a>
																	</li>
																</ul>
															</div>
															<div class="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
																<h6 class="mega-menu-title">Element 2</h6>
																<ul class="list-unstyled mega-dropdown-list">
																	<li>
																		<a href="ui-accordion.html">
																			<img src="images/menu-icon/icon7.svg" alt="" class="svg" />
																			Accordion
																		</a>
																	</li>
																	<li>
																		<a href="ui-alert.html">
																			<img src="images/menu-icon/icon8.svg" alt="" class="svg" />
																			Alert
																		</a>
																	</li>
																	<li>
																		<a href="ui-badges.html">
																			<img src="images/menu-icon/icon9.svg" alt="" class="svg" />
																			Badges
																		</a>
																	</li>
																	<li>
																		<a href="ui-gallery.html">
																			<img src="images/menu-icon/icon10.svg" alt="" class="svg" />
																			Gallery
																		</a>
																	</li>
																	<li>
																		<a href="ui-typography.html">
																			<img src="images/menu-icon/icon11.svg" alt="" class="svg" />
																			Typography
																		</a>
																	</li>
																	<li>
																		<a href="ui-tabs.html">
																			<img src="images/menu-icon/icon18.svg" alt="" class="svg" />
																			Tabs
																		</a>
																	</li>
																</ul>{" "}
															</div>
															<div class="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
																<h6 class="mega-menu-title">Element 3</h6>
																<ul class="list-unstyled mega-dropdown-list">
																	<li>
																		<a href="ui-blog-post.html">
																			<img src="images/menu-icon/icon12.svg" alt="" class="svg" />
																			Post
																		</a>
																	</li>
																	<li>
																		<a href="ui-breadcrumbs.html">
																			<img src="images/menu-icon/icon13.svg" alt="" class="svg" />
																			Breadcrumbs
																		</a>
																	</li>
																	<li>
																		<a href="ui-button.html">
																			<img src="images/menu-icon/icon14.svg" alt="" class="svg" />
																			Button
																		</a>
																	</li>
																	<li>
																		<a href="ui-list.html">
																			<img src="images/menu-icon/icon15.svg" alt="" class="svg" />
																			List
																		</a>
																	</li>
																	<li>
																		<a href="ui-footer.html">
																			<img src="images/menu-icon/icon16.svg" alt="" class="svg" />
																			Footer
																		</a>
																	</li>
																	<li>
																		<a href="ui-subscribe.html">
																			<img src="images/menu-icon/icon4.svg" alt="" class="svg" />
																			Newsletter{" "}
																		</a>
																	</li>
																</ul>
															</div>
															<div class="col-lg-3 col-md-3 mt-md-3 mb-md-3 mt-lg-3 mb-lg-3">
																<h6 class="mega-menu-title">Element 4</h6>
																<ul class="list-unstyled mega-dropdown-list">
																	<li>
																		<a href="ui-color.html">
																			<img src="images/menu-icon/icon17.svg" alt="" class="svg" />
																			Color
																		</a>
																	</li>
																	<li>
																		<a href="ui-contact-form.html">
																			<img src="images/menu-icon/icon18.svg" alt="" class="svg" />
																			Contact Form
																		</a>
																	</li>
																	<li>
																		<a href="ui-counter.html">
																			<img src="images/menu-icon/icon19.svg" alt="" class="svg" />
																			Counter
																		</a>
																	</li>
																	<li>
																		<a href="ui-pagination.html">
																			<img src="images/menu-icon/icon20.svg" alt="" class="svg" />
																			Pagination
																		</a>
																	</li>
																	<li>
																		<a href="ui-modal.html">
																			<i class="icon flaticon-login"></i> Modal
																		</a>
																	</li>
																	<li>
																		<a href="ui-client.html">
																			<img src="images/menu-icon/icon3.svg" alt="" class="svg" />
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
										<li class="nav-item dropdown">
											<a class="nav-link dropdown-toggle" href="/" data-toggle="dropdown">
												News.
											</a>
											<ul class="dropdown-menu">
												<li>
													<a href="blog-v1.html" class="dropdown-item">
														Blog default
													</a>
												</li>
												<li>
													<a href="blog-v5.html" class="dropdown-item">
														Blog filter
													</a>
												</li>
												<li>
													<a href="blog-v3.html" class="dropdown-item">
														Blog Creative
													</a>
												</li>
												<li>
													<a href="blog-v4.html" class="dropdown-item">
														Blog Full Grid
													</a>
												</li>
												<li>
													<a href="blog-v2.html" class="dropdown-item">
														blog 2 Column
													</a>
												</li>
												<li>
													<a href="blog-details-v2.html" class="dropdown-item">
														blog details default
													</a>
												</li>
												<li>
													<a href="blog-details-v1.html" class="dropdown-item">
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

				{/* <!-- 
			=============================================
				Theme Main Banner One
			============================================== 
			--> */}
				<div class="rogan-hero-section rogan-hero-three pt-300 pb-350 md-pt-200 md-pb-130 pos-r">
					<div class="shape-wrapper">
						<img
							src="images/home/8.jpg"
							alt=""
							class="main-image-shape img-shape wow fadeInRight animated"
							data-wow-duration="3s"
						/>
						<div
							class="img-shape shape-one wow fadeInRight animated"
							data-wow-duration="2.3s"></div>
						<div
							class="img-shape shape-two wow zoomIn animated"
							data-wow-duration="2.3s"
							data-wow-delay="2.2s"></div>
						<div
							class="img-shape shape-three wow zoomIn animated"
							data-wow-duration="2.3s"
							data-wow-delay="2.2s"></div>
						<svg class="img-shape shape-four">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 223, 204)"
								d="M6.000,12.000 C9.314,12.000 12.000,9.313 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.313 2.686,12.000 6.000,12.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-five">
							<path
								fill-rule="evenodd"
								fill="rgb(171, 247, 242)"
								d="M12.500,25.000 C19.404,25.000 25.000,19.403 25.000,12.500 C25.000,5.596 19.404,-0.000 12.500,-0.000 C5.596,-0.000 -0.000,5.596 -0.000,12.500 C-0.000,19.403 5.596,25.000 12.500,25.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-six">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 156, 161)"
								d="M7.500,15.000 C11.642,15.000 15.000,11.642 15.000,7.500 C15.000,3.358 11.642,-0.000 7.500,-0.000 C3.358,-0.000 -0.000,3.358 -0.000,7.500 C-0.000,11.642 3.358,15.000 7.500,15.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-seven">
							<path
								fill-rule="evenodd"
								fill="rgb(181, 198, 255)"
								d="M6.000,12.000 C9.314,12.000 12.000,9.313 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.313 2.686,12.000 6.000,12.000 Z"
							/>
						</svg>
					</div>
					<div class="container">
						<div class="main-wrapper pos-r">
							<div class="banner-upper-heading wow fadeInDown animated">Digital Agency</div>
							<h1
								class="banner-main-title pt-15 pb-45 md-pb-20 wow fadeInUp animated"
								data-wow-delay="0.4s">
								Digital Agency <br /> <span>& Solution.</span>
							</h1>
							<p class="banner-sub-title pb-45 wow fadeInUp animated" data-wow-delay="0.9s">
								Grow your business & boost up sale with rogan
							</p>
							<a
								href="about-agency.html"
								class="theme-btn solid-button-one button-rose wow fadeInLeft animated"
								data-wow-delay="1.5s">
								Explore More
							</a>
							<a
								data-fancybox
								href="https://www.youtube.com/embed/vVXAXDvgPiQ"
								class="fancybox video-button button-rose video-button-one wow fadeInRight animated"
								data-wow-delay="1.5s">
								See live demo. <i class="flaticon-play-button"></i>
							</a>
						</div>
					</div>
				</div>

				{/* <!-- 
			=============================================
				About Us Two
			============================================== 
			--> */}
				<div class="about-us-block-two pt-250 pb-250 md-pt-30 md-pb-100 pos-r">
					<div class="shape-wrapper">
						<svg class="img-shape shape-one" data-aos="fade-right" data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_11" x1="0%" x2="42.262%" y1="0%" y2="90.631%">
									<stop offset="0%" stop-color="rgb(250,110,185)" stop-opacity="1" />
									<stop offset="100%" stop-color="rgb(255,207,170)" stop-opacity="1" />
								</linearGradient>
							</defs>
							<path
								fill-rule="evenodd"
								opacity="0.247"
								fill="url(#PSgrad_11)"
								d="M481.000,961.999 C746.649,961.999 962.000,746.649 962.000,480.999 C962.000,215.351 746.649,-0.000 481.000,-0.000 C215.351,-0.000 -0.000,215.351 -0.000,480.999 C-0.000,746.649 215.351,961.999 481.000,961.999 Z"
							/>
						</svg>

						<svg class="img-shape shape-two" data-aos="fade-right" data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_22" x1="0%" x2="42.262%" y1="0%" y2="90.631%">
									<stop offset="0%" stop-color="rgb(250,110,185)" stop-opacity="1" />
									<stop offset="100%" stop-color="rgb(255,207,170)" stop-opacity="1" />
								</linearGradient>
							</defs>
							<path
								fill-rule="evenodd"
								opacity="0.082"
								fill="url(#PSgrad_22)"
								d="M481.000,961.999 C746.649,961.999 962.000,746.649 962.000,481.000 C962.000,215.351 746.649,-0.000 481.000,-0.000 C215.351,-0.000 -0.000,215.351 -0.000,481.000 C-0.000,746.649 215.351,961.999 481.000,961.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-three">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 234, 208)"
								d="M10.000,20.000 C15.523,20.000 20.000,15.523 20.000,10.000 C20.000,4.477 15.523,-0.001 10.000,-0.001 C4.477,-0.001 -0.000,4.477 -0.000,10.000 C-0.000,15.523 4.477,20.000 10.000,20.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-four">
							<path
								fill-rule="evenodd"
								opacity="0.451"
								fill="rgb(255, 126, 190)"
								d="M10.000,20.000 C15.523,20.000 20.000,15.522 20.000,10.000 C20.000,4.477 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.477 -0.000,10.000 C-0.000,15.522 4.477,20.000 10.000,20.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-five">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 156, 161)"
								d="M5.000,9.999 C7.761,9.999 10.000,7.761 10.000,5.000 C10.000,2.238 7.761,-0.001 5.000,-0.001 C2.238,-0.001 -0.000,2.238 -0.000,5.000 C-0.000,7.761 2.238,9.999 5.000,9.999 Z"
							/>
						</svg>
					</div>
					<div class="inner-wrapper pos-r">
						<div class="container">
							<div class="row">
								<div class="col-lg-6 order-lg-last">
									<div class="theme-title-one pt-70 md-p0">
										<div class="upper-title mb-5">About us</div>
										<h2 class="main-title">
											Great Digital Agency <i>Since 1980.</i>
										</h2>
									</div>
									<div class="mark-text pt-25 pb-35">Creative & Proffesional Digital</div>
									<p class="pb-60">
										We put your ideas and thus your wishes in the form of a unique web project that
										inspires you and you customers. We’ve expert team to solve your problems.
									</p>
									<a
										href="about-agency.html"
										class="theme-btn solid-button-one button-rose"
										data-aos="fade-up">
										Explore More
									</a>
								</div>
								<div class="col-lg-6 order-lg-first">
									<div class="main-img-box pos-r hide-pr md-mt-50">
										<div class="img-one pos-r wow fadeInLeft" data-wow-duration="2s">
											<img src="images/home/9.jpg" alt="" />
										</div>
										<div
											class="img-two pos-r wow fadeInLeft"
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

				{/* <!-- 
			=============================================
				Our Core Feature
			============================================== 
			--> */}
				<div class="our-core-feature style-two pt-130 pb-300 md-pt-50 md-pb-150 pos-r">
					<div class="shape-wrapper">
						<svg class="img-shape shape-one" data-aos="fade-left" data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_srf" x1="0%" x2="42.699%" y1="0%" y2="90.425%">
									<stop offset="0%" stop-color="rgb(0,238,191)" stop-opacity="1" />
									<stop offset="100%" stop-color="rgb(204,255,133)" stop-opacity="1" />
								</linearGradient>
							</defs>
							<path
								fill-rule="evenodd"
								opacity="0.22"
								fill="url(#PSgrad_srf)"
								d="M533.500,1067.000 C828.144,1067.000 1067.000,828.143 1067.000,533.499 C1067.000,238.856 828.144,-0.000 533.500,-0.000 C238.856,-0.000 -0.000,238.856 -0.000,533.499 C-0.000,828.143 238.856,1067.000 533.500,1067.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-two" data-aos="fade-left" data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_jhr" x1="0%" x2="43.837%" y1="0%" y2="89.879%">
									<stop offset="0%" stop-color="rgb(0,238,191)" stop-opacity="1" />
									<stop offset="100%" stop-color="rgb(204,255,133)" stop-opacity="1" />
								</linearGradient>
							</defs>
							<path
								fill-rule="evenodd"
								opacity="0.115"
								fill="url(#PSgrad_jhr)"
								d="M533.500,1067.000 C828.144,1067.000 1067.000,828.143 1067.000,533.499 C1067.000,238.855 828.144,-0.000 533.500,-0.000 C238.856,-0.000 -0.000,238.855 -0.000,533.499 C-0.000,828.143 238.856,1067.000 533.500,1067.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-three">
							<path
								fill-rule="evenodd"
								fill="rgb(165, 197, 255)"
								d="M10.000,20.000 C15.523,20.000 20.000,15.522 20.000,10.000 C20.000,4.477 15.523,-0.001 10.000,-0.001 C4.477,-0.001 -0.000,4.477 -0.000,10.000 C-0.000,15.522 4.477,20.000 10.000,20.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-four">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 212, 114)"
								d="M5.000,9.999 C7.761,9.999 10.000,7.761 10.000,5.000 C10.000,2.238 7.761,-0.000 5.000,-0.000 C2.239,-0.000 -0.000,2.238 -0.000,5.000 C-0.000,7.761 2.239,9.999 5.000,9.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-five">
							<path
								fill-rule="evenodd"
								fill="rgb(167, 185, 255)"
								d="M5.000,9.999 C7.761,9.999 10.000,7.761 10.000,5.000 C10.000,2.238 7.761,-0.001 5.000,-0.001 C2.239,-0.001 -0.000,2.238 -0.000,5.000 C-0.000,7.761 2.239,9.999 5.000,9.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-six">
							<path
								fill-rule="evenodd"
								fill="rgb(133, 255, 212)"
								d="M10.000,19.999 C15.523,19.999 20.000,15.522 20.000,10.000 C20.000,4.477 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.477 -0.000,10.000 C-0.000,15.522 4.477,19.999 10.000,19.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-seven">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 196, 133)"
								d="M5.000,10.000 C7.761,10.000 10.000,7.761 10.000,4.999 C10.000,2.238 7.761,-0.000 5.000,-0.000 C2.238,-0.000 -0.000,2.238 -0.000,4.999 C-0.000,7.761 2.238,10.000 5.000,10.000 Z"
							/>
						</svg>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-lg-5 mt-225 md-m0">
								<div class="theme-title-one">
									<div class="upper-title mb-5">Features</div>
									<h2 class="main-title">
										Our Features & <i>Services.</i>
									</h2>
								</div>
								<p class="pt-35 pb-55">
									Lorem ipsum dolor sit amet, omittan mel diva lorem animal iracu altera sinto
									cosi somthing will be here in short details. Ipsum dolor sit amet omittan
								</p>
								<a
									href="service-v1.html"
									class="theme-btn solid-button-one button-rose"
									data-aos="fade-up">
									All Services
								</a>
							</div>
							<div class="col-lg-7">
								<div class="row feature-block-wrapper">
									<div class="col-md-6">
										<div class="feature-block-one main-p-color hover-state mb-40 mt-40">
											<div class="icon icon-three flaticon-menu-2 tran3s"></div>
											<h5 class="pt-30 pb-25 tran3s title">UI/UX Analysis.</h5>
											<p class="tran3s">
												Lorem ipsum dolor amet, an dusino situ sinto constituto, mir es pertin.
											</p>
											<a href="/" class="read-more tran3s">
												<i class="flaticon-next-1"></i>
											</a>
										</div>

										<div class="feature-block-one main-p-color hover-state">
											<div class="icon icon-three flaticon-login tran3s"></div>
											<h5 class="pt-30 pb-25 tran3s title">Strong Security.</h5>
											<p class="tran3s">
												Lorem ipsum dolor amet, an dusino situ sinto constituto, mir es pertin.
											</p>
											<a href="/" class="read-more tran3s">
												<i class="flaticon-next-1"></i>
											</a>
										</div>
									</div>
									<div class="col-md-6">
										<div class="feature-block-one main-p-color hover-state mt-200 sm-mt-40">
											<div class="icon icon-three flaticon-web tran3s"></div>
											<h5 class="pt-30 pb-25 tran3s title">Creative Layout.</h5>
											<p class="tran3s">
												Lorem ipsum dolor amet, an dusino situ sinto constituto, mir es pertin.
											</p>
											<a href="/" class="read-more tran3s">
												<i class="flaticon-next-1"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--
			=====================================================
				Project Gallery
			=====================================================
			--> */}
				<div class="project-gallery-home-one pos-r md-pt-20">
					<div class="container">
						<div class="d-md-flex align-items-center justify-content-between pos-r">
							<div class="theme-title-one">
								<div class="upper-title mb-5">Porject</div>
								<h2 class="main-title">
									Project <i>Gallery.</i>
								</h2>
							</div>
							<a
								href="portfolio-v1.html"
								class="theme-btn solid-button-one button-rose sm-mt-40">
								View Gallery
							</a>
						</div>
					</div>

					<div class="slider-item-wrapper">
						<div class="home-gallery-slider">
							<div class="item">
								<div class="gallery-polar-state">
									<div class="img-holder pos-r">
										<img src="images/gallery/img1.jpg" alt="" />
										<a
											href="images/gallery/img1.jpg"
											class="icon zoom fancybox"
											data-fancybox="images"
											data-caption="My caption">
											+
										</a>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="gallery-polar-state">
									<div class="img-holder pos-r">
										<img src="images/gallery/img2.jpg" alt="" />
										<a
											href="images/gallery/img2.jpg"
											class="icon zoom fancybox"
											data-fancybox="images"
											data-caption="My caption">
											+
										</a>
									</div>
								</div>
							</div>
							<div class="item">
								<div class="gallery-polar-state">
									<div class="img-holder pos-r">
										<img src="images/gallery/img3.jpg" alt="" />
										<a
											href="images/gallery/img3.jpg"
											class="icon zoom fancybox"
											data-fancybox="images"
											data-caption="My caption">
											+
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--
			=====================================================
				Pricing Plan One
			=====================================================
			--> */}
				<div class="pricing-plan-classic pt-180 pb-200 md-pt-90 md-pb-100 pos-r">
					<div class="shape-wrapper">
						<svg class="img-shape shape-one">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 173, 232)"
								d="M7.500,15.000 C11.642,15.000 15.000,11.641 15.000,7.499 C15.000,3.357 11.642,-0.000 7.500,-0.000 C3.358,-0.000 -0.000,3.357 -0.000,7.499 C-0.000,11.641 3.358,15.000 7.500,15.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-two">
							<path
								fill-rule="evenodd"
								fill="rgb(181, 185, 255)"
								d="M6.000,12.000 C9.314,12.000 12.000,9.313 12.000,6.000 C12.000,2.686 9.314,-0.000 6.000,-0.000 C2.686,-0.000 -0.000,2.686 -0.000,6.000 C-0.000,9.313 2.686,12.000 6.000,12.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-three">
							<path
								fill-rule="evenodd"
								fill="rgb(164, 206, 255)"
								d="M4.000,8.000 C6.209,8.000 8.000,6.208 8.000,3.999 C8.000,1.790 6.209,-0.001 4.000,-0.001 C1.791,-0.001 -0.000,1.790 -0.000,3.999 C-0.000,6.208 1.791,8.000 4.000,8.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-four">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 214, 160)"
								d="M10.000,19.999 C15.523,19.999 20.000,15.522 20.000,10.000 C20.000,4.476 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.476 -0.000,10.000 C-0.000,15.522 4.477,19.999 10.000,19.999 Z"
							/>
						</svg>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-lg-5 col-md-6 col-12 pt-120 sm-pt-60 sm-pb-40">
								<div class="theme-title-one">
									<div class="upper-title mb-5">Pricing Plan</div>
									<h2 class="main-title">
										Choose Pricing <br />
										<i>Plan.</i>
									</h2>
								</div>
								<p class="pt-20 pb-70">
									We have different type of pricing table to choose with your need with reasonable
									price.
								</p>
								<ul class="nav nav-tabs">
									<li>
										<a data-toggle="tab" href="#monthly" class="active">
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
							<div class="col-lg-6 col-md-6 col-12 ml-auto">
								<div class="tab-content pos-r" data-aos="fade-left" data-aos-duration="2000">
									<div class="table-content">
										<div id="monthly" class="tab-pane price-table in active">
											<div class="col-inner">
												<h6>Subway</h6>
												<div class="price pt-25 pb-35">
													$89.<sup>99</sup>
												</div>
												<div class="tag">Quick job, Small Work</div>
												<ul class="pt-20 pb-40">
													<li>50GB Bandwidth</li>
													<li>Business &amp; Financ Analysing</li>
													<li>24 hour support</li>
													<li>Customer Managemet</li>
												</ul>
												<a href="/" class="theme-btn line-button-two">
													<span></span> Choose Plan
												</a>
											</div>
										</div>
										<div id="yearly" class="tab-pane price-table">
											<div class="col-inner">
												<h6>Subway</h6>
												<div class="price pt-25 pb-35">
													$259.<sup>99</sup>
												</div>
												<div class="tag">Quick job, Small Work</div>
												<ul class="pt-20 pb-40">
													<li>50GB Bandwidth</li>
													<li>Business &amp; Financ Analysing</li>
													<li>24 hour support</li>
													<li>Customer Managemet</li>
												</ul>
												<a href="/" class="theme-btn line-button-two">
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

				{/* <!--
			=====================================================
				Testimonial
			=====================================================
			--> */}
				<div class="testimonial-section-standard pos-r pt-300 pb-225 md-pt-70 md-pb-30">
					<div class="shape-wrapper">
						<svg class="img-shape shape-one" data-aos="fade-right" data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_914g" x1="0%" x2="0%" y1="0%" y2="100%">
									<stop offset="0%" stop-color="rgb(250,217,97)" stop-opacity="1" />
									<stop offset="100%" stop-color="rgb(255,142,78)" stop-opacity="1" />
								</linearGradient>
							</defs>
							<path
								fill-rule="evenodd"
								opacity="0.416"
								fill="url(#PSgrad_914g)"
								d="M425.500,850.999 C660.497,850.999 851.000,660.496 851.000,425.499 C851.000,190.502 660.497,-0.001 425.500,-0.001 C190.503,-0.001 0.000,190.502 0.000,425.499 C0.000,660.496 190.503,850.999 425.500,850.999 Z"
							/>
						</svg>

						<svg class="img-shape shape-two" data-aos="fade-right" data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_xcty" x1="0%" x2="0%" y1="0%" y2="100%">
									<stop offset="0%" stop-color="rgb(250,217,97)" stop-opacity="1" />
									<stop offset="100%" stop-color="rgb(255,142,78)" stop-opacity="1" />
								</linearGradient>
							</defs>
							<path
								fill-rule="evenodd"
								opacity="0.11"
								fill="url(#PSgrad_xcty)"
								d="M425.500,850.999 C660.497,850.999 851.000,660.497 851.000,425.500 C851.000,190.502 660.497,-0.000 425.500,-0.000 C190.503,-0.000 -0.000,190.502 -0.000,425.500 C-0.000,660.497 190.503,850.999 425.500,850.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-three">
							<path
								fill-rule="evenodd"
								fill="rgb(92, 230, 187)"
								d="M4.500,9.000 C6.985,9.000 9.000,6.985 9.000,4.499 C9.000,2.014 6.985,-0.000 4.500,-0.000 C2.015,-0.000 -0.000,2.014 -0.000,4.499 C-0.000,6.985 2.015,9.000 4.500,9.000 Z"
							/>
						</svg>
						<svg class="img-shape shape-four">
							<path
								fill-rule="evenodd"
								fill="rgb(56, 248, 189)"
								d="M10.000,19.999 C15.523,19.999 20.000,15.522 20.000,9.999 C20.000,4.476 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.476 -0.000,9.999 C-0.000,15.522 4.477,19.999 10.000,19.999 Z"
							/>
						</svg>
					</div>
					<div class="main-container d-xl-flex align-items-center">
						<div class="order-lg-last">
							<div class="theme-title-one">
								<div class="upper-title mb-5">Testimonials</div>
								<h2 class="main-title">
									Our Customers <br />
									<i>Feedback.</i>
								</h2>
							</div>
						</div>

						<div class="order-lg-first">
							<div class="slider-wrapper">
								<div class="standard-testimonial-slider">
									<div class="item">
										<div class="customer-content">
											<img src="images/logo/c-1.png" alt="" />
											<p class="pt-25 pb-30">
												Having a home based business is a wonderful assets to your life.Those problem
												still stands.
											</p>
											<div class="d-flex align-items-center">
												<img src="images/home/2.jpg" alt="" class="c-img" />
												<div>
													<h6>Gerald Tucker</h6>
													<span>Dhaka, BD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="customer-content">
											<img src="images/logo/c-2.png" alt="" />
											<p class="pt-25 pb-30">
												Having a home based business is a wonderful assets to your life.Those problem
												still stands.
											</p>
											<div class="d-flex align-items-center">
												<img src="images/home/3.jpg" alt="" class="c-img" />
												<div>
													<h6>Rashed Ka.</h6>
													<span>Dhaka, BD</span>
												</div>
											</div>
										</div>
									</div>
									<div class="item">
										<div class="customer-content">
											<img src="images/logo/c-1.png" alt="" />
											<p class="pt-25 pb-30">
												Having a home based business is a wonderful assets to your life.Those problem
												still stands.
											</p>
											<div class="d-flex align-items-center">
												<img src="images/home/7.jpg" alt="" class="c-img" />
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

				{/* <!--
			=====================================================
				Partner Section
			=====================================================
			--> */}
				<div class="op-partner-section-one pt-80 pb-110">
					<div class="container">
						<div class="row">
							<div class="col-lg-3 col-md-4 col-6">
								<div class="img-box bx-a">
									<a href="/">
										<img src="images/logo/p-1.png" alt="" />
									</a>
								</div>
							</div>
							<div class="col-lg-2 col-md-4 col-6">
								<div class="img-box bx-b">
									<a href="/">
										<img src="images/logo/p-2.png" alt="" />
									</a>
								</div>
							</div>
							<div class="col-lg-3 col-md-4 col-6">
								<div class="img-box bx-c">
									<a href="/">
										<img src="images/logo/p-3.png" alt="" />
									</a>
								</div>
							</div>
							<div class="col-xl-2 col-lg-3 col-md-4 col-6">
								<div class="img-box bx-d">
									<a href="/">
										<img src="images/logo/p-4.png" alt="" />
									</a>
								</div>
							</div>
							<div class="col-xl-2 col-lg-3 col-md-4 col-6">
								<div class="img-box bx-e">
									<a href="/">
										<img src="images/logo/p-5.png" alt="" />
									</a>
								</div>
							</div>
							<div class="col-xl-4 col-lg-2 col-md-4 col-6">
								<div class="img-box bx-f">
									<a href="/">
										<img src="images/logo/p-6.png" alt="" />
									</a>
								</div>
							</div>
							<div class="col-xl-2 col-lg-3 col-md-4 col-6">
								<div class="img-box bx-g">
									<a href="/">
										<img src="images/logo/p-7.png" alt="" />
									</a>
								</div>
							</div>
							<div class="col-xl-3 col-lg-3 col-md-4 col-6">
								<div class="img-box bx-h">
									<a href="/">
										<img src="images/logo/p-8.png" alt="" />
									</a>
								</div>
							</div>
							<div class="col-xl-3 col-lg-11 col-md-4 col-6">
								<div class="img-box bx-i">
									<a href="/">
										<img src="images/logo/p-9.png" alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!--
			=====================================================
				Contact Us
			=====================================================
			--> */}
				<div class="contact-home-one pt-225 pb-160 pos-r md-pt-30 md-pb-20">
					<div class="shape-wrapper">
						<svg class="img-shape shape-one" data-aos="fade-left" data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_uyto" x1="42.262%" x2="0%" y1="90.631%" y2="0%">
									<stop offset="0%" stop-color="rgb(126,83,255)" stop-opacity="1" />
									<stop offset="100%" stop-color="rgb(87,177,255)" stop-opacity="1" />
								</linearGradient>
							</defs>
							<path
								fill-rule="evenodd"
								opacity="0.278"
								fill="url(#PSgrad_uyto)"
								d="M443.500,890.999 C688.438,890.999 887.000,691.542 887.000,445.499 C887.000,199.457 688.438,-0.001 443.500,-0.001 C198.562,-0.001 -0.000,199.457 -0.000,445.499 C-0.000,691.542 198.562,890.999 443.500,890.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-two" data-aos="fade-left" data-aos-duration="3000">
							<defs>
								<linearGradient id="yuthy_lg" x1="42.262%" x2="0%" y1="90.631%" y2="0%">
									<stop offset="0%" stop-color="rgb(126,83,255)" stop-opacity="1" />
									<stop offset="100%" stop-color="rgb(87,177,255)" stop-opacity="1" />
								</linearGradient>
							</defs>
							<path
								fill-rule="evenodd"
								opacity="0.094"
								fill="url(#yuthy_lg)"
								d="M443.500,890.999 C688.438,890.999 887.000,691.542 887.000,445.499 C887.000,199.456 688.438,-0.001 443.500,-0.001 C198.562,-0.001 -0.000,199.456 -0.000,445.499 C-0.000,691.542 198.562,890.999 443.500,890.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-three">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 151, 238)"
								d="M8.500,16.999 C13.194,16.999 17.000,13.194 17.000,8.499 C17.000,3.805 13.194,-0.001 8.500,-0.001 C3.805,-0.001 -0.000,3.805 -0.000,8.499 C-0.000,13.194 3.805,16.999 8.500,16.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-four">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 206, 92)"
								d="M5.500,10.999 C8.537,10.999 11.000,8.537 11.000,5.499 C11.000,2.462 8.537,-0.001 5.500,-0.001 C2.462,-0.001 -0.000,2.462 -0.000,5.499 C-0.000,8.537 2.462,10.999 5.500,10.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-five">
							<path
								fill-rule="evenodd"
								fill="rgb(56, 248, 189)"
								d="M10.000,19.999 C15.523,19.999 20.000,15.522 20.000,9.999 C20.000,4.476 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.476 -0.000,9.999 C-0.000,15.522 4.477,19.999 10.000,19.999 Z"></path>
						</svg>
					</div>
					<div class="container">
						<div class="row align-items-center">
							<div class="col-xl-5 col-lg-6">
								<div class="contact-text">
									<div class="theme-title-one">
										<div class="upper-title mb-5">Contact us</div>
										<h2 class="main-title">
											Don’t Hesitate to Contact us for any <br />
											<i>Information.</i>
										</h2>
									</div>
									<p>Call us for immidiate support to this number</p>
									<a href="/" class="call-to-dial">
										880 1723 801 29
									</a>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 ml-auto">
								<div class="theme-form-style-two">
									<form action="#">
										<input type="email" placeholder="Your Email*"></input>
										<input type="text" placeholder="Subject*"></input>
										<textarea placeholder="Message"></textarea>
										<button class="theme-btn button-rose solid-button-one">Send Request</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- 
			=============================================
				Newsletter Section
			============================================== 
			--> */}
				<div class="newsletter-section newsletter-two pos-r mt-190 md-mt-150">
					<div class="shape-wrapper">
						<svg class="img-shape shape-one">
							<path
								fill-rule="evenodd"
								fill="rgb(255, 205, 111)"
								d="M8.000,15.999 C12.418,15.999 16.000,12.417 16.000,7.999 C16.000,3.581 12.418,-0.001 8.000,-0.001 C3.582,-0.001 -0.000,3.581 -0.000,7.999 C-0.000,12.417 3.582,15.999 8.000,15.999 Z"
							/>
						</svg>
						<svg class="img-shape shape-two">
							<path
								fill-rule="evenodd"
								fill="rgb(206, 124, 255)"
								d="M5.500,10.999 C8.537,10.999 11.000,8.537 11.000,5.499 C11.000,2.462 8.537,-0.001 5.500,-0.001 C2.462,-0.001 -0.000,2.462 -0.000,5.499 C-0.000,8.537 2.462,10.999 5.500,10.999 Z"
							/>
						</svg>
					</div>
					<div class="container">
						<div class="main-wrapper">
							<div class="theme-title-one text-center pb-55">
								<h2 class="main-title">
									Subscribe Newslatter & get
									<br /> <i>Company News.</i>
								</h2>
							</div>
							<form class="ajax-sub-form" method="post">
								<input
									type="email"
									placeholder="Enter your email"
									id="subscription-email"></input>
								<button class="button-rose">
									<i class="flaticon-next"></i>
								</button>
								<label class="subscription-label" for="subscription-email"></label>
							</form>
						</div>
					</div>
				</div>

				{/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
				<footer class="theme-footer-one main-p-color pt-130">
					<div class="top-footer">
						<div class="container">
							<div class="row">
								<div class="col-lg-3 col-sm-6 col-12 footer-about-widget">
									<a href="index.html" class="logo">
										<img src="images/logo/logo.svg" alt="" />
									</a>
									<a href="/" class="email">
										rogan.inc@company.com
									</a>
									<a href="/" class="phone">
										720.661.2231
									</a>
								</div>
								<div class="col-lg-3 col-lg-3 col-sm-6 col-12 footer-list">
									<h5 class="footer-title">Services</h5>
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
								<div class="col-lg-3 col-sm-6 col-12 footer-list">
									<h5 class="footer-title">About us</h5>
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
								<div class="col-lg-3 col-lg-2 col-sm-6 col-12 footer-information">
									<h5 class="footer-title">Our Address</h5>
									<p>
										00 Orville Road Apt. 728 <br />
										California, USA
									</p>
									<ul>
										<li>
											<a href="/">
												<i class="fa fa-facebook" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="/">
												<i class="fa fa-twitter" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="/">
												<i class="fa fa-linkedin" aria-hidden="true"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="container">
						<div class="bottom-footer-content">
							<p>&copy; 2019 copyright all right reserved</p>
						</div>
					</div>
				</footer>

				<button class="scroll-top tran3s">
					<i class="fa fa-angle-up" aria-hidden="true"></i>
				</button>
			</div>
		</>
	);
}

export default Home;
