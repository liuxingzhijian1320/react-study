import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { 
	RecommandWrapper,
	RecommandItem
} from './style.js'

class Recommand extends Component {
	render() {
		return (
			<RecommandWrapper>
			{
				this.props.recommandList.map((item,index)=>{
					return <RecommandItem key={item.get('id')} imgUrl={item.get('img')}>
								 </RecommandItem>
				})
			}
			</RecommandWrapper>
		)
	}
}
const mapStateToProps = (state) =>{
	return {
		recommandList: state.home.get('recommandList')
	}
}
export default connect(mapStateToProps,null)(Recommand)