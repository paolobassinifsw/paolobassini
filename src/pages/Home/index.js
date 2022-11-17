import React, { useEffect } from "react";
import $ from "jquery";

import Loader from "pages/loader";
import Menu from "pages/menu";

function Home() {
	useEffect(() => {
		$("#ctn-preloader").fadeOut(); //fadeOut animazione di loading
		$("#preloader").delay(350).fadeOut("slow"); //
		$("body").delay(350).css({ overflow: "visible" });
	}, []);

	return (
		<>
			<div className="main-page-wrapper">
				<Loader />
				<Menu />
				{/* <!-- 
			=============================================
				Theme Main Banner One
			============================================== 
			--> */}
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
								Digital Agency <br /> <span>& Solution.</span>
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

				{/* <!-- 
			=============================================
				About Us Two
			============================================== 
			--> */}
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

				{/* <!-- 
			=============================================
				Our Core Feature
			============================================== 
			--> */}
				<div className="our-core-feature style-two pt-130 pb-300 md-pt-50 md-pb-150 pos-r">
					<div className="shape-wrapper">
						<svg
							className="img-shape shape-one"
							data-aos="fade-left"
							data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_srf" x1="0%" x2="42.699%" y1="0%" y2="90.425%">
									<stop offset="0%" stopColor="rgb(0,238,191)" stopOpacity="1" />
									<stop offset="100%" stopColor="rgb(204,255,133)" stopOpacity="1" />
								</linearGradient>
							</defs>
							<path
								fillRule="evenodd"
								opacity="0.22"
								fill="url(#PSgrad_srf)"
								d="M533.500,1067.000 C828.144,1067.000 1067.000,828.143 1067.000,533.499 C1067.000,238.856 828.144,-0.000 533.500,-0.000 C238.856,-0.000 -0.000,238.856 -0.000,533.499 C-0.000,828.143 238.856,1067.000 533.500,1067.000 Z"
							/>
						</svg>
						<svg
							className="img-shape shape-two"
							data-aos="fade-left"
							data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_jhr" x1="0%" x2="43.837%" y1="0%" y2="89.879%">
									<stop offset="0%" stopColor="rgb(0,238,191)" stopOpacity="1" />
									<stop offset="100%" stopColor="rgb(204,255,133)" stopOpacity="1" />
								</linearGradient>
							</defs>
							<path
								fillRule="evenodd"
								opacity="0.115"
								fill="url(#PSgrad_jhr)"
								d="M533.500,1067.000 C828.144,1067.000 1067.000,828.143 1067.000,533.499 C1067.000,238.855 828.144,-0.000 533.500,-0.000 C238.856,-0.000 -0.000,238.855 -0.000,533.499 C-0.000,828.143 238.856,1067.000 533.500,1067.000 Z"
							/>
						</svg>
						<svg className="img-shape shape-three">
							<path
								fillRule="evenodd"
								fill="rgb(165, 197, 255)"
								d="M10.000,20.000 C15.523,20.000 20.000,15.522 20.000,10.000 C20.000,4.477 15.523,-0.001 10.000,-0.001 C4.477,-0.001 -0.000,4.477 -0.000,10.000 C-0.000,15.522 4.477,20.000 10.000,20.000 Z"
							/>
						</svg>
						<svg className="img-shape shape-four">
							<path
								fillRule="evenodd"
								fill="rgb(255, 212, 114)"
								d="M5.000,9.999 C7.761,9.999 10.000,7.761 10.000,5.000 C10.000,2.238 7.761,-0.000 5.000,-0.000 C2.239,-0.000 -0.000,2.238 -0.000,5.000 C-0.000,7.761 2.239,9.999 5.000,9.999 Z"
							/>
						</svg>
						<svg className="img-shape shape-five">
							<path
								fillRule="evenodd"
								fill="rgb(167, 185, 255)"
								d="M5.000,9.999 C7.761,9.999 10.000,7.761 10.000,5.000 C10.000,2.238 7.761,-0.001 5.000,-0.001 C2.239,-0.001 -0.000,2.238 -0.000,5.000 C-0.000,7.761 2.239,9.999 5.000,9.999 Z"
							/>
						</svg>
						<svg className="img-shape shape-six">
							<path
								fillRule="evenodd"
								fill="rgb(133, 255, 212)"
								d="M10.000,19.999 C15.523,19.999 20.000,15.522 20.000,10.000 C20.000,4.477 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.477 -0.000,10.000 C-0.000,15.522 4.477,19.999 10.000,19.999 Z"
							/>
						</svg>
						<svg className="img-shape shape-seven">
							<path
								fillRule="evenodd"
								fill="rgb(255, 196, 133)"
								d="M5.000,10.000 C7.761,10.000 10.000,7.761 10.000,4.999 C10.000,2.238 7.761,-0.000 5.000,-0.000 C2.238,-0.000 -0.000,2.238 -0.000,4.999 C-0.000,7.761 2.238,10.000 5.000,10.000 Z"
							/>
						</svg>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-lg-5 mt-225 md-m0">
								<div className="theme-title-one">
									<div className="upper-title mb-5">Features</div>
									<h2 className="main-title">
										Our Features & <i>Services.</i>
									</h2>
								</div>
								<p className="pt-35 pb-55">
									Lorem ipsum dolor sit amet, omittan mel diva lorem animal iracu altera sinto
									cosi somthing will be here in short details. Ipsum dolor sit amet omittan
								</p>
								<a
									href="service-v1.html"
									className="theme-btn solid-button-one button-rose"
									data-aos="fade-up">
									All Services
								</a>
							</div>
							<div className="col-lg-7">
								<div className="row feature-block-wrapper">
									<div className="col-md-6">
										<div className="feature-block-one main-p-color hover-state mb-40 mt-40">
											<div className="icon icon-three flaticon-menu-2 tran3s"></div>
											<h5 className="pt-30 pb-25 tran3s title">UI/UX Analysis.</h5>
											<p className="tran3s">
												Lorem ipsum dolor amet, an dusino situ sinto constituto, mir es pertin.
											</p>
											<a href="/" className="read-more tran3s">
												<i className="flaticon-next-1"></i>
											</a>
										</div>

										<div className="feature-block-one main-p-color hover-state">
											<div className="icon icon-three flaticon-login tran3s"></div>
											<h5 className="pt-30 pb-25 tran3s title">Strong Security.</h5>
											<p className="tran3s">
												Lorem ipsum dolor amet, an dusino situ sinto constituto, mir es pertin.
											</p>
											<a href="/" className="read-more tran3s">
												<i className="flaticon-next-1"></i>
											</a>
										</div>
									</div>
									<div className="col-md-6">
										<div className="feature-block-one main-p-color hover-state mt-200 sm-mt-40">
											<div className="icon icon-three flaticon-web tran3s"></div>
											<h5 className="pt-30 pb-25 tran3s title">Creative Layout.</h5>
											<p className="tran3s">
												Lorem ipsum dolor amet, an dusino situ sinto constituto, mir es pertin.
											</p>
											<a href="/" className="read-more tran3s">
												<i className="flaticon-next-1"></i>
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
				<div className="project-gallery-home-one pos-r md-pt-20">
					<div className="container">
						<div className="d-md-flex align-items-center justify-content-between pos-r">
							<div className="theme-title-one">
								<div className="upper-title mb-5">Porject</div>
								<h2 className="main-title">
									Project <i>Gallery.</i>
								</h2>
							</div>
							<a
								href="portfolio-v1.html"
								className="theme-btn solid-button-one button-rose sm-mt-40">
								View Gallery
							</a>
						</div>
					</div>

					<div className="slider-item-wrapper">
						<div className="home-gallery-slider">
							<div className="item">
								<div className="gallery-polar-state">
									<div className="img-holder pos-r">
										<img src="images/gallery/img1.jpg" alt="" />
										<a
											href="images/gallery/img1.jpg"
											className="icon zoom fancybox"
											data-fancybox="images"
											data-caption="My caption">
											+
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="gallery-polar-state">
									<div className="img-holder pos-r">
										<img src="images/gallery/img2.jpg" alt="" />
										<a
											href="images/gallery/img2.jpg"
											className="icon zoom fancybox"
											data-fancybox="images"
											data-caption="My caption">
											+
										</a>
									</div>
								</div>
							</div>
							<div className="item">
								<div className="gallery-polar-state">
									<div className="img-holder pos-r">
										<img src="images/gallery/img3.jpg" alt="" />
										<a
											href="images/gallery/img3.jpg"
											className="icon zoom fancybox"
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

				{/* <!--
			=====================================================
				Testimonial
			=====================================================
			--> */}
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

				{/* <!--
			=====================================================
				Partner Section
			=====================================================
			--> */}
				<div className="op-partner-section-one pt-80 pb-110">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-4 col-6">
								<div className="img-box bx-a">
									<a href="/">
										<img src="images/logo/p-1.png" alt="" />
									</a>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-6">
								<div className="img-box bx-b">
									<a href="/">
										<img src="images/logo/p-2.png" alt="" />
									</a>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-6">
								<div className="img-box bx-c">
									<a href="/">
										<img src="images/logo/p-3.png" alt="" />
									</a>
								</div>
							</div>
							<div className="col-xl-2 col-lg-3 col-md-4 col-6">
								<div className="img-box bx-d">
									<a href="/">
										<img src="images/logo/p-4.png" alt="" />
									</a>
								</div>
							</div>
							<div className="col-xl-2 col-lg-3 col-md-4 col-6">
								<div className="img-box bx-e">
									<a href="/">
										<img src="images/logo/p-5.png" alt="" />
									</a>
								</div>
							</div>
							<div className="col-xl-4 col-lg-2 col-md-4 col-6">
								<div className="img-box bx-f">
									<a href="/">
										<img src="images/logo/p-6.png" alt="" />
									</a>
								</div>
							</div>
							<div className="col-xl-2 col-lg-3 col-md-4 col-6">
								<div className="img-box bx-g">
									<a href="/">
										<img src="images/logo/p-7.png" alt="" />
									</a>
								</div>
							</div>
							<div className="col-xl-3 col-lg-3 col-md-4 col-6">
								<div className="img-box bx-h">
									<a href="/">
										<img src="images/logo/p-8.png" alt="" />
									</a>
								</div>
							</div>
							<div className="col-xl-3 col-lg-11 col-md-4 col-6">
								<div className="img-box bx-i">
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
				<div className="contact-home-one pt-225 pb-160 pos-r md-pt-30 md-pb-20">
					<div className="shape-wrapper">
						<svg
							className="img-shape shape-one"
							data-aos="fade-left"
							data-aos-duration="3000">
							<defs>
								<linearGradient id="PSgrad_uyto" x1="42.262%" x2="0%" y1="90.631%" y2="0%">
									<stop offset="0%" stopColor="rgb(126,83,255)" stopOpacity="1" />
									<stop offset="100%" stopColor="rgb(87,177,255)" stopOpacity="1" />
								</linearGradient>
							</defs>
							<path
								fillRule="evenodd"
								opacity="0.278"
								fill="url(#PSgrad_uyto)"
								d="M443.500,890.999 C688.438,890.999 887.000,691.542 887.000,445.499 C887.000,199.457 688.438,-0.001 443.500,-0.001 C198.562,-0.001 -0.000,199.457 -0.000,445.499 C-0.000,691.542 198.562,890.999 443.500,890.999 Z"
							/>
						</svg>
						<svg
							className="img-shape shape-two"
							data-aos="fade-left"
							data-aos-duration="3000">
							<defs>
								<linearGradient id="yuthy_lg" x1="42.262%" x2="0%" y1="90.631%" y2="0%">
									<stop offset="0%" stopColor="rgb(126,83,255)" stopOpacity="1" />
									<stop offset="100%" stopColor="rgb(87,177,255)" stopOpacity="1" />
								</linearGradient>
							</defs>
							<path
								fillRule="evenodd"
								opacity="0.094"
								fill="url(#yuthy_lg)"
								d="M443.500,890.999 C688.438,890.999 887.000,691.542 887.000,445.499 C887.000,199.456 688.438,-0.001 443.500,-0.001 C198.562,-0.001 -0.000,199.456 -0.000,445.499 C-0.000,691.542 198.562,890.999 443.500,890.999 Z"
							/>
						</svg>
						<svg className="img-shape shape-three">
							<path
								fillRule="evenodd"
								fill="rgb(255, 151, 238)"
								d="M8.500,16.999 C13.194,16.999 17.000,13.194 17.000,8.499 C17.000,3.805 13.194,-0.001 8.500,-0.001 C3.805,-0.001 -0.000,3.805 -0.000,8.499 C-0.000,13.194 3.805,16.999 8.500,16.999 Z"
							/>
						</svg>
						<svg className="img-shape shape-four">
							<path
								fillRule="evenodd"
								fill="rgb(255, 206, 92)"
								d="M5.500,10.999 C8.537,10.999 11.000,8.537 11.000,5.499 C11.000,2.462 8.537,-0.001 5.500,-0.001 C2.462,-0.001 -0.000,2.462 -0.000,5.499 C-0.000,8.537 2.462,10.999 5.500,10.999 Z"
							/>
						</svg>
						<svg className="img-shape shape-five">
							<path
								fillRule="evenodd"
								fill="rgb(56, 248, 189)"
								d="M10.000,19.999 C15.523,19.999 20.000,15.522 20.000,9.999 C20.000,4.476 15.523,-0.000 10.000,-0.000 C4.477,-0.000 -0.000,4.476 -0.000,9.999 C-0.000,15.522 4.477,19.999 10.000,19.999 Z"></path>
						</svg>
					</div>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-5 col-lg-6">
								<div className="contact-text">
									<div className="theme-title-one">
										<div className="upper-title mb-5">Contact us</div>
										<h2 className="main-title">
											Don’t Hesitate to Contact us for any <br />
											<i>Information.</i>
										</h2>
									</div>
									<p>Call us for immidiate support to this number</p>
									<a href="/" className="call-to-dial">
										880 1723 801 29
									</a>
								</div>
							</div>
							<div className="col-xl-6 col-lg-6 ml-auto">
								<div className="theme-form-style-two">
									<form action="#">
										<input type="email" placeholder="Your Email*"></input>
										<input type="text" placeholder="Subject*"></input>
										<textarea placeholder="Message"></textarea>
										<button className="theme-btn button-rose solid-button-one">Send Request</button>
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

				{/* <!--
			=====================================================
				Footer
			=====================================================
			--> */}
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

				<button className="scroll-top tran3s">
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</button>
			</div>
		</>
	);
}

export default Home;
