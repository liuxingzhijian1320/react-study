import React ,{ Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

import {
	SwiperStyle,
	ImgStyle
} from './style.js'

class Banner extends Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		const banners = this.props.swiper;

		return (
					<SwiperStyle className="swiper-container">
            <div className="swiper-wrapper">
                {banners.map((item,index)=>(
                  	<ImgStyle alt="" key={index} className="swiper-slide" src={item}/>))
								}
            </div>
            <div className='swiper-pagination'></div>
            <div className='swiper-button-warp'> 
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        	</SwiperStyle>
		)
	}

	componentDidMount(){
		  new Swiper('.swiper-container', {
          loop: true,     
          autoplay:{      
             delay: 2500,
             disableOnInteraction: false,    
          },
          pagination: {
             el: '.swiper-pagination',
          },
          navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
          },
        });
	}

}
export default Banner