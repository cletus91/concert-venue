import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';

const CountDown = () => {
	const [state, setState] = useState({
		deadline: '25 Dec 2020',
		days: '0',
		hours: '0',
		minutes: '0',
		seconds: '0',
	});

	const getTimeUntil = () => {
		const time = Date.parse(state.deadline) - Date.parse(new Date());

		if (time > 0) {
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));

			setState({ ...state, days, hours, minutes, seconds });
		}
	};

	useEffect(() => {
		setInterval(() => {
			getTimeUntil();
		}, 1000);
	}, [state.deadline]);

	return (
		<Slide left>
			<div className='countdown_wrapper'>
				<div className='countdown_top'>Event starts in</div>
				<div className='countdown_bottom'>
					<div className='countdown_item'>
						<div className='countdown_time'>{state.days}</div>
						<div className='countdown_tag'>Days</div>
					</div>

					<div className='countdown_item'>
						<div className='countdown_time'>{state.hours}</div>
						<div className='countdown_tag'>Hrs</div>
					</div>

					<div className='countdown_item'>
						<div className='countdown_time'>{state.minutes}</div>
						<div className='countdown_tag'>Mins</div>
					</div>

					<div className='countdown_item'>
						<div className='countdown_time'>{state.seconds}</div>
						<div className='countdown_tag'>Secs</div>
					</div>
				</div>
			</div>
		</Slide>
	);
};

export default CountDown;
