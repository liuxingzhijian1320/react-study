import styled from 'styled-components'

export const RecommandWrapper= styled.div`
	margin: 45px 0 30px 0;
	img {
		width: 280px;
		height: 50px;
		margin-bottom: 30px;
	}
`;
export const RecommandItem= styled.div`
	width: 280px;
	height: 50px;
	border-radius: 4px;
	margin-bottom: 8px;
	background: url(${(props)=>props.imgUrl});
	background-size: 100% 100%;
`;