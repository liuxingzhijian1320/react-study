import styled from 'styled-components'

export const LoginWrapper = styled.div`
	background: #f1f1f1;
	position: fixed;
	bottom: 0;
	left: 0;
	top: 0;
	right: 0;
`;

export const LoginBox = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	width: 250px;
	height: 200px;
	background: #fff;
	padding-top: 50px;
	box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
	display: block;
	width: 180px;
	height: 30px;
	line-height: 30px;
	border-radius: 15px;
	color: #777;
	font-size: 14px;
	margin: 10px auto;
	border: 1px solid #dfdfdf;
	outline: none;
	padding: 0 10px;
`;

export const Button = styled.div`
	width: 180px;
	height: 30px;
	line-height: 30px;
	border-radius: 15px;
	color: #000;
	background: #3db922;
	margin: 30px auto;
	text-align: center;
	cursor: pointer;
`;