import { fromJS } from 'immutable' // 不可更改属性的方法

const defaultState = fromJS({
	topicList: [
		{
			id:1,
			title:'社会热点',
			img:'//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		},
		{
			id:2,
			title:'故事',
			img:'//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		}
	],
	articleList:[
		{
			id:1,
			title:'下班后，这3种副业能帮你赚得高收入！',
			info:'在职场中，如果想获得比较高的收入会相对比较难。因为每个人都有对应的工作内容，有自己固定的职责。因此获得的报酬也是有一定限制的。所以，如果想快速增加收入，不妨发展自己的副业。那么，哪些副业更容易获得报酬呢？',
			img:'//upload-images.jianshu.io/upload_images/1954956-f39159eec6da2c01?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
			name:'流星值箭1320',
			msg:10,
			likes:100,
			money: 33
		},
		{
			id:2,
			title:'下班后，这3种副业能帮你赚得高收入！',
			info:'在职场中，如果想获得比较高的收入会相对比较难。因为每个人都有对应的工作内容，有自己固定的职责。因此获得的报酬也是有一定限制的。所以，如果想快速增加收入，不妨发展自己的副业。那么，哪些副业更容易获得报酬呢？',
			img:'//upload-images.jianshu.io/upload_images/1954956-f39159eec6da2c01?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
			name:'流星值箭1320',
			msg:19,
			likes:90,
			money: 20
		},
		{
			id:3,
			title:'下班后，这3种副业能帮你赚得高收入！',
			info:'在职场中，如果想获得比较高的收入会相对比较难。因为每个人都有对应的工作内容，有自己固定的职责。因此获得的报酬也是有一定限制的。所以，如果想快速增加收入，不妨发展自己的副业。那么，哪些副业更容易获得报酬呢？',
			img:'//upload-images.jianshu.io/upload_images/1954956-f39159eec6da2c01?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
			name:'流星值箭1320',
			msg:100,
			likes:130,
			money: 13
		}
	]
})

// 纯函数
export default (state=defaultState, action) => {
	switch (action.type){
		// case 'SEARCH_FOCUS':
			// return state.set('isFocused', true)
		default:	
			return state
	}
}