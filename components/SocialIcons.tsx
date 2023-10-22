'use client';

import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const SocialIcons = (props: Props) => {
	const [hoveredIcon, setHoveredIcon] = useState('');

	return (
		<div>
			<div className="items-center hidden md:flex space-x-2">
				<SocialIcon
					url="https://www.facebook.com/"
					target="_blank"
					onMouseEnter={() => setHoveredIcon('facebook')}
					onMouseLeave={() => setHoveredIcon('')}
					fgColor={hoveredIcon == 'facebook' ? '#0096c7' : 'white'}
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.youtube.com/"
					target="_blank" //so that the link opens in new tab
					onMouseEnter={() => setHoveredIcon('instagram')} //onmouseenter is an inbuilt function for anything when mouse goes on a position
					onMouseLeave={() => setHoveredIcon('')} // this needs to be done or else the icon would stay purple
					fgColor={hoveredIcon == 'instagram' ? '#0096c7' : 'white'}
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://twitter.com/"
					target="_blank" //so that the link opens in new tab
					onMouseEnter={() => setHoveredIcon('twitter')} //onmouseenter is an inbuilt function for anything when mouse goes on a position
					onMouseLeave={() => setHoveredIcon('')} // this needs to be done or else the icon would stay purple
					fgColor={hoveredIcon == 'twitter' ? '#0096c7' : 'white'}
					bgColor="transparent"
				/>
			</div>
		</div>
	);
};

export default SocialIcons;
