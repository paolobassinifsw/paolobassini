const Gallery = () => {
	return (
		<>
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
		</>
	);
};

export default Gallery;
