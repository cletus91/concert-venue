import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import MyButton from '../utils/MyButton';

const Discount = () => {
	const [discount, setDiscount] = useState({
		discountStart: 1,
		discountEnd: 50,
	});

	const percentage = () => {
		if (discount.discountStart < discount.discountEnd) {
			setDiscount({
				...discount,
				discountStart: discount.discountStart + 1,
			});
		}
  };
  
 
	useEffect(() => {
		setTimeout(() => {
			percentage();
		}, 35);
	}, [discount]);

	return (
		<div className='center_wrapper'>
			<div className='discount_wrapper'>
				<Fade onReveal={() => percentage}>
					<div className='discount_percentage'>
						<span>{discount.discountStart}%</span>
						<span>OFF</span>
					</div>
				</Fade>

				<Slide right>
					<div className='discount_description'>
						<h3>Purchase tickets befor 22nd NOV</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							in neque non lacus auctor suscipit in tempor tortor. Suspendisse
							tempor pretium ullamcorper. Duis sit amet convallis massa. Ut
							libero sem, pellentesque gravida ligula sit amet, aliquet
							dignissim nibh. Cras id odio malesuada, pretium nibh vitae,
							commodo felis. Duis ornare tristique mi, ut pellentesque ante
							laoreet sed. Nulla eget fringilla ligula. Sed pulvinar, erat in
							hendrerit porttitor, nunc sem pulvinar neque, a eleifend est diam
							sed mi. Proin viverra nisi ante, a pretium massa suscipit et. Nunc
							suscipit magna nisi, sit amet auctor arcu consectetur nec.
						</p>
						<MyButton
							background='black'
							color='yellow'
							text='Purchase Tickets'
						/>
					</div>
				</Slide>
			</div>
		</div>
	);
};
export default Discount;
