import ProgressiveImage from "react-progressive-graceful-image";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SImg = styled.div<{ src: string }>`
	background-image: url(${(props) => props.src});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	height: calc(100vh - 100px);
	width: 100vw;
`;

export default function Detail() {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<ProgressiveImage
				noLazyLoad={true}
				src={`${process.env.PUBLIC_URL}/img/goods/goods_${id}.png`}
				placeholder={`${process.env.PUBLIC_URL}/img/goods/goods_${id}.png`}
			>
				{(src, loading) => (
					<SImg
						className={`image${loading ? " loading" : " loaded"}`}
						src={src}
					></SImg>
				)}
			</ProgressiveImage>
		</>
	);
}
