import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

const StyledCard = styled.div`
	background: ${(props) => props.theme.color.darkGrey[100]};
	border: 1px solid ${(props) => props.theme.color.darkGrey[200]};
	border-radius: 12px;
	box-shadow: inset 1px 1px 0px ${(props) => props.theme.color.darkGrey[100]};
	display: flex;
	flex: 1;
	flex-direction: column;
`

export default Card
