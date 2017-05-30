import React from 'react'
import LoadingMask from 'react-loading'
import Header from './Header'

export default class MainPage extends React.Component {
	constructor(props){
		super(props);
		this.loadingAnimate();
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.location.pathname != this.props.location.pathname){
			this.loadingAnimate();
		}
	}
	loadingAnimate() {
		this.state = {isPageLoading : true};
		this.timer = setTimeout(() => { this.setState({isPageLoading : false}); this.timer = null;}, 3000);
	}
	render (){
		return (
			<div>
				{this.state.isPageLoading ? <img className="img-responsive loading-center-block" src={require('../../assets/icons/balls.svg')} alt="logo" /> : null}
				{!this.state.isPageLoading ? <Header /> : null}
				{!this.state.isPageLoading ? this.props.children : null}
			</div>
		)
	}
}