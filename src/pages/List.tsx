import ProgressiveImage from "react-progressive-graceful-image";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 1vw;
	padding: 0 1vw;
	grid-auto-rows: minmax(550px, auto);
	/* grid-template-rows: repeat(auto-fit, minmax(250px, 1fr)); */
	@media screen and (max-width: 500px) {
		margin-bottom: 100px;
	}
	.img-box {
		img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
`;

const SImg = styled.div<{ src: string }>`
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: 100%;
	width: 100%;
`;

export default function List() {
	const navigate = useNavigate();
	const imgList = [1, 2, 3, 4, 5, 6];
	const handleLink = (img: number) => {
		navigate(`/goods/${img}`);
	};
	return (
		<SLayout>
			{imgList.map((img) => (
				<div
					className={"img-box"}
					key={img}
					onClick={() => {
						handleLink(img);
					}}
				>
					{/* <img
						src={`${process.env.PUBLIC_URL}/img/goods/goods_${img}.png`}
						alt='img'
					/> */}

					<ProgressiveImage
						noLazyLoad={true}
						src={`${process.env.PUBLIC_URL}/img/goods/goods_${img}.png`}
						placeholder={`${process.env.PUBLIC_URL}/img/goods/goods_${img}.png`}
					>
						{(src, loading) => (
							<SImg
								className={`image${loading ? " loading" : " loaded"}`}
								src={src}
							></SImg>
						)}
					</ProgressiveImage>
				</div>
			))}
		</SLayout>
	);
}
