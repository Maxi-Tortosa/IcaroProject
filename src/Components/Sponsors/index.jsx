import React from 'react';
import styled from 'styled-components';

const Sponsors = () => {
	return (
		<SponsorsContainer>
			<SponsorsImage
				src='https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/sponsor1.png?alt=media&token=26c00c25-a87b-44eb-9a21-53c4af4a2a81'
				alt=''
			/>
			<SponsorsImage
				src='https://firebasestorage.googleapis.com/v0/b/icaro-project.appspot.com/o/sponsor2.png?alt=media&token=cbb0352f-f502-4822-9c2b-05bcb48e959c'
				alt=''
			/>
		</SponsorsContainer>
	);
};

const SponsorsContainer = styled.div`
	margin: 20px;
	/* width: 100%; */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const SponsorsImage = styled.img`
	margin: 0 25px;
	height: auto;
`;

export default Sponsors;
