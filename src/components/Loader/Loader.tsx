import React from 'react'
import styled, { keyframes } from 'styled-components'

import CardIcon from '../CardIcon'
import { Spinner } from 'react-bootstrap'

interface LoaderProps {
	text?: string
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
	return (
		<StyledLoader>
			<CardIcon>
				<StyledBao>🥟</StyledBao>
			</CardIcon>
			{!!text && <StyledText>{text}</StyledText>}
		</StyledLoader>
	)
}

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledLoader = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const StyledBao = styled.div`
	font-size: 32px;
	position: relative;
	animation: 1s ${spin} infinite;
`

const StyledText = styled.div`
	color: ${(props) => props.theme.color.grey[400]};
`

export const SpinnerLoader = () => <Spinner animation='border' size='sm' style={
	{ color: `${(props: any) => props.theme.color.grey[100]}` }
} />

export default Loader
