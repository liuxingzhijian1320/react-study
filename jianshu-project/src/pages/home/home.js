import React, { Component } from 'react'
import Banner from '../../components/Banner/Banner'
import List from '../../components/List/List'
import Write from '../../components/Write/Write'
import Topic from '../../components/Topic/Topic'
import Recommand from '../../components/Recommand/Recommand'

import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style.js'

class Home extends Component {
	constructor(props) {
		super(props)

		this.state = {
			swiper:[
				'https://upload.jianshu.io/admin_banners/web_images/4550/a4aba36241eb146c13892301e486417cbf16af18.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
				'https://upload.jianshu.io/admin_banners/web_images/4566/867d2e49d573864ec5ae4ed9e6578a254a0c991d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
				'https://upload.jianshu.io/admin_banners/web_images/4570/5d4776585f0206ff2e807971a13b06ed7d494595.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
				'https://upload.jianshu.io/admin_banners/web_images/4574/d5c5ea3e984c8c08071b467c2dfe5bd2d0acf7b8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
				'https://upload.jianshu.io/admin_banners/web_images/4564/563e90e1ea09698e8a9ad1a9c4fb36bcea2655be.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
			]
		}
	}
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					<Banner swiper={this.state.swiper}/>
				</HomeLeft>
				<HomeRight>

					<List />
				</HomeRight>
			</HomeWrapper>
		)
	}
}

export default Home