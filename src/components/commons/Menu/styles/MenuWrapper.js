import React from 'react'
import styled from 'styled-components'

export const MenuWrapper = styled.nav`
	font-family: 'Rubik', sans-serif;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 18px;
	padding-left: 28px;
	padding-right: 28px;
`;

MenuWrapper.LeftSide = styled.div`
  	padding: 0;
  	margin: 0;
  	order: 1;
`;

MenuWrapper.CentralSide = styled.div`
	padding: 12px;
	margin: 0;
	order: 3;
	width: 100%;
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 17px;
	border-top: 1px solid #88989E;
	border-bottom: 1px solid #88989E;
	a {
		text-align: center;
		display: block;
		text-decoration: none;
		color: #88989E;
		transition: 200ms ease-in-out;
		&:hover,
		&:focus {
		font-weight: 500;
		color: #070C0E;
		}
	}
`;

MenuWrapper.RightSide = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex: 1;
    order: 2;
    justify-content: flex-end;
`;