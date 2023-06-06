import ProgressiveImage from "react-progressive-graceful-image";
import styled from "styled-components";

const SLayout = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 1vw;
	.img-box {
		img {
			display: block;
			width: 100%;
			height: 100%;
		}
	}
`;

export default function List() {
	const imgList = [1, 2, 3, 4, 5, 6];
	return (
		<SLayout>
			{imgList.map((img) => (
				<div className={"img-box"} key={img}>
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
							<img
								className={`image${loading ? " loading" : " loaded"}`}
								src={src}
								alt='img'
								// width='700'
								// height='465'
							/>
						)}
					</ProgressiveImage>
				</div>
			))}
		</SLayout>
	);
}
