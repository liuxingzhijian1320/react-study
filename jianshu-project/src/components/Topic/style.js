import styled from 'styled-components'

export const TopicWrapper= styled.div`
	padding: 20px 0 10px 0;
	overflow: hidden;
`;

export const TopicItem= styled.div`
	float: left;
	background-color: #f7f7f7;
	margin: 0 18px 18px 0;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.img {
		width: 32px;
		height: 32px;
		float: left;
	}
	.name {
		display: inline-block;
		height: 32px;
		line-height: 32px;
    padding: 0 11px 0 6px;
    font-size: 14px;
    float: left;
	}
`;
