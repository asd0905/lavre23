import { useState } from "react";

const ProgressiveImg = ({ placeholderSrc, src, ...props }: any) => {
	const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
	return (
		<img
			{...{ src: placeholderSrc, ...props }}
			alt={props.alt || ""}
			className='image'
		/>
	);
};
export default ProgressiveImg;
