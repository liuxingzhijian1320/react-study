import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width: 960px;
	margin: 0 auto;
	overflow: hidden;
`;

export const HomeLeft= styled.div`
	float: left;
	margin-left: 15px;
	margin-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight= styled.div`
	float: right;
	width: 240px;
`;

export const BackTop= styled.div`
	position: fixed;
	right: 100px;
	bottom: 60px;
	width: 100px;
	height: 50px;
	border: 1px solid #ccc;
	text-align: center;
	line-height: 50px;
	border-radius: 3px;
	cursor: pointer
`;