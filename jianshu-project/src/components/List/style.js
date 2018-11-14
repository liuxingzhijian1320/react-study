import styled from 'styled-components'

export const ListItem= styled.div`
	position: relative;
   width: 100%;
   margin: 0 0 15px;
   padding: 15px 2px 20px 0;
   border-bottom: 1px solid #f0f0f0;
   word-wrap: break-word;
	.img {
		width: 125px;
		height: 100px;
		display: block;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export const ListInfo= styled.div`
	padding-right: 140px;
	.h3 {
		margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
	}
	.info {
		margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
	}
`;

export const ListBottom= styled.div`
   font-size: 12px;
   font-weight: 400;
   line-height: 20px;
   color: #999;
	.name {
		margin-right: 15px;
	}
	.icon {
		margin: 0 5px;
	}
	.value {
		margin-right: 10px;
	}
`;

export const LoadMore= styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	background-color: #a5a5a5;
	text-align: center;
	color:#fff;
	border-radius: 20px;
	cursor: pointer
`;




