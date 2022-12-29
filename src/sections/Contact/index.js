const Contact = () => {
	return (
		<>
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
		</>
	);
};

export default Contact;
