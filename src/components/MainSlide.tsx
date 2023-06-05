import Slider from 'react-slick';
import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';

const SliderBox = styled.div`
	display: flex !important;
	//height: 50vh;
	align-items: flex-end;
	img {
		display: block;
		margin: 0 auto;
		width: 70%;
		max-height: 100%;
		position: relative;
		bottom: -14px;
		max-width: 550px;
	}
`;

const TopSlider = styled.div`
	/* overflow: hidden; */
	position: relative;
    height: 50%;
	z-index: 9;
`;

const BtmSlider = styled.div`
	overflow: hidden;
	position: relative;
	z-index: 9;
    height: 50%;
	.slick-track {
		display: flex;
		align-items: flex-start;
	}
`;

const BottomSliderBox = styled.div`
	display: flex !important;
	align-items: flex-start;
	//height: 50vh;
	img {
		display: block;
		margin: 0 auto;
		width: 60%;
		max-height: 100%;
		max-width: 550px;
	}
`;

export default function MainSlide() {
    const commonSetting = {
        // lazyLoad: "progressive" as LazyLoadTypes,
        dots: false,
        infinite: true,
        speed: 800,
        autoplaySpeed: 1000,
        arrows: false,
        slidesToShow: 9,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: "easeInOutBounce",
        swipe: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const settingsTop = {
        ...commonSetting,
    };
    const settingsBtm = {
        ...commonSetting,
        rtl: true,
        // fade: true,
    };
    const [topImgArr, setTopImgArr] = useState<string[]>([]);
    const [btmImgArr, setBtnImgArr] = useState<string[]>([]);
    const shuffle = (array: string[]) =>
        // array.sort(() => Math.round(Math.random()) - 0.5);
        array;
    const sliderTop = useRef(null) as any;
    const sliderBtm = useRef(null) as any;

    useEffect(() => {
        setTopImgArr([
            ...shuffle([
                "01",
                "08",
                "03",
                "04",
                "05",
                "06",
                "09",
                "07",
                "02",
                "10",
                "11",
                "12",
            ]),
        ]);
        setBtnImgArr([
            ...shuffle(["06", "02", "03", "04", "05", "01", "07", "08", "09", "10"]),
        ]);
        setTimeout(() => {
            // sliderTop.current.slickPlay();
            // sliderBtm.current.slickPlay();
        }, 5000);
    }, []);
    return (
        <>{topImgArr && topImgArr.length > 0 && (
            <TopSlider>
                <Slider ref={sliderTop} {...settingsTop}>
                    {topImgArr.map((img) => (
                        <SliderBox key={`top_${img}`}>
                            <img
                                src={`${process.env.PUBLIC_URL}/img/top_${img}.png`}
                                alt='img'
                            />
                        </SliderBox>
                    ))}
                </Slider>
            </TopSlider>
        )}
            {btmImgArr && btmImgArr.length > 0 && (
                <BtmSlider className='BtmSlider'>
                    <Slider ref={sliderBtm} {...settingsBtm}>
                        {btmImgArr.map((img) => (
                            <BottomSliderBox key={`bottom_${img}${new Date().getTime()}`}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/img/bottom_${img}.png`}
                                    alt='img'
                                />
                            </BottomSliderBox>
                        ))}
                    </Slider>
                </BtmSlider>
            )}
        </>
    )
}
