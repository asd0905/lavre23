import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const SliderBox = styled.div<{ img: string; y?: string }>`
	background-image: url(${(props) => props.img});
	min-height: 80vh;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	background-position-y: ${(props) => (props.y ? props.y : 0)}px;
`;

function App() {
	const settingsTop = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		// autoplay: true,
	};
	const settingsBtm = {
		...settingsTop,
		rtl: true,
	};
	return (
		<>
			<Slider {...settingsTop}>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204950644.jpg`}
					y={"374"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204957201_02.jpg`}
					y={"380"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204930616.jpg`}
					y={"355"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204926853_02.jpg`}
					y={"397"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204919139_01.jpg`}
					y={"385"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204904699_01.jpg`}
					y={"355"}
				></SliderBox>
			</Slider>
			<Slider {...settingsBtm}>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204950644.jpg`}
					y={"-362"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204957201_02.jpg`}
					y={"-362"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204930616.jpg`}
					y={"-388"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204926853_02.jpg`}
					y={"-343"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204919139_01.jpg`}
					y={"-366"}
				></SliderBox>
				<SliderBox
					img={`${process.env.PUBLIC_URL}/img/KakaoTalk_20230530_204904699_01.jpg`}
					y={"-388"}
				></SliderBox>
			</Slider>
		</>
	);
}

export default App;
