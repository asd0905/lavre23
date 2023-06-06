import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { isBodyFixedAtom } from "../atoms";
import { useSetRecoilState } from "recoil";
import { AnimatePresence, motion } from "framer-motion";

const SHeader = styled.header`
	display: flex;
	justify-content: center;
	height: 100px;
	align-items: center;
	width: 100%;
	position: relative;
	background-color: #fff;
	.logo {
		max-width: 160px;
		@media screen and (min-width: 500px) {
			bottom: initial;
		}
		@media screen and (max-width: 500px) {
			max-width: 40%;
		}
	}

	@media screen and (max-width: 500px) {
		position: fixed;
		bottom: 0;
	}

	.menu-btn {
		height: 100%;
		cursor: pointer;
		padding: 15px 10px 35px;
		display: flex;
		align-items: center;
		position: absolute;
		left: 0;
		top: 0;
		svg {
			width: 20px;
			height: 20px;
		}
		@media screen and (min-width: 767px) {
			padding: 15px 20px;
			svg {
				width: 30px;
				height: 30px;
			}
		}
		@media screen and (max-width: 500px) {
			display: none;
		}
	}
`;

const SLogo = styled.h1<{ logo1: string; logo2: string }>`
	max-width: 160px;
	background-image: url(${(props) => props.logo2});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	width: 300px;
	height: 100px;
	max-width: 100%;
	@media screen and (max-width: 500px) {
		background-image: url(${(props) => props.logo1});
	}
`;

const SLayout = styled.div`
	.menu {
		background-color: #fff;
		width: 80vw;
		max-width: 400px;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		display: grid;
		grid-template-rows: 1fr 50px;
		.menu-list {
			overflow-y: auto;
			ul {
				li {
					a,
					span {
						display: flex;
						height: 50px;
						align-items: center;
						color: #000;
						padding: 0 20px;
						font-size: 16px;
					}
				}
			}
		}
		@media screen and (max-width: 500px) {
			display: none;
		}
	}
`;

export const SOverlay = styled(motion.div)`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
	z-index: 10;
	@media screen and (max-width: 500px) {
		display: none;
	}
`;

function Header() {
	const [isMenu, setIsMenu] = useState(false);
	const setIsBodyFix = useSetRecoilState(isBodyFixedAtom);
	const handleMenuClick = () => {
		setIsMenu((prev) => !prev);
		setIsBodyFix(true);
	};
	return (
		<SLayout>
			<SHeader>
				<span className={"menu-btn"} onClick={handleMenuClick}>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
						<path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
					</svg>
				</span>
				<Link className={"logo"} to={"/"}>
					<SLogo
						logo1={`${process.env.PUBLIC_URL}/img/logo_01.png`}
						logo2={`${process.env.PUBLIC_URL}/img/logo_02.png`}
					/>
				</Link>
			</SHeader>
			<AnimatePresence>
				{isMenu ? (
					<>
						<SOverlay
							key={"menuOverlay"}
							onClick={() => {
								setIsMenu(false);
								setIsBodyFix(false);
							}}
							transition={{ duration: 0.2 }}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						/>
						<motion.div
							className='menu'
							key={"menu"}
							transition={{ duration: 0.1 }}
							initial={{ left: "-100%" }}
							animate={{ left: 0 }}
							exit={{ left: "-100%" }}
						>
							<div className='menu-list'>
								<ul>
									<li>
										<Link
											onClick={() => {
												setIsMenu(false);
												setIsBodyFix(false);
											}}
											to={`/lavre23`}
										>
											홈
										</Link>
										<Link
											onClick={() => {
												setIsMenu(false);
												setIsBodyFix(false);
											}}
											to={`/list`}
										>
											상품
										</Link>
									</li>
								</ul>
							</div>
						</motion.div>
					</>
				) : null}
			</AnimatePresence>
		</SLayout>
	);
}
export default React.memo(Header);
