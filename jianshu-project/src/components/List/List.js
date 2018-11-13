import React ,{ Component } from 'react'
import {
	ListItem,
	ListInfo,
	ListBottom
} from './style.js'
class List extends Component {
	render() {

		return (
			<div>
				{
					[1,2,34].map((item,index)=>{
						return (
							<ListItem key={index}>
								<img className="img" alt='' src='//upload-images.jianshu.io/upload_images/1954956-f39159eec6da2c01?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240' />
								<ListInfo>
									<h3 className='h3'>下班后，这3种副业能帮你赚得高收入！</h3>
									<div className='info'>
										在职场中，如果想获得比较高的收入会相对比较难。因为每个人都有对应的工作内容，有自己固定的职责。因此获得的报酬也是有一定限制的。所以，如果想快速增加收入，不妨发展自己的副业。那么，哪些副业更容易获得报酬呢？
									</div>
								</ListInfo>
								<ListBottom>
									<i className="name">流星值箭1320</i>
									<i className="iconfont icon">&#xe606;</i>
									<i className="value">23</i>
									<i className="iconfont icon">&#xe653;</i>
									<i className="value">23</i>
									<i className="iconfont icon">&#xe601;</i>
									<i className="value">23</i>
								</ListBottom>
							</ListItem>
						)
					})
				}
			</div>
		)


	}
}
export default List