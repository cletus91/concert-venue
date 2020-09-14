import React from 'react';

const Location = () => {
	return (
		<div className='location_wrapper'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.523722205068!2d-73.99562738459389!3d40.75050447932768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21fb011c85%3A0x33df10e49762f8e4!2sMadison+Square+Garden!5e0!3m2!1sen!2sus!4v1537464762911'
				title='Location'
				width='100%'
				height='450'
				frameBorder='0'
				border='0'
				allowfullscreen
			/>

			<div className='location_tag'>
				<div>Location</div>
			</div>
		</div>
	);
};
export default Location;
