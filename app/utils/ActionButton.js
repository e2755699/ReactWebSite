import React from 'react'

export default class ActionButton extends React.Component{
	handleOnButtonClick = () => {
		this.props.onClick();
	}

	render (){
		let icon = [];
		let display = true;
		if(this.props.display){
			display = this.props.display;
		}else{
			display = true;
		}

		switch(this.props.type)
		{
			case "show":
				icon.push(<i key="0" className="glyphicon glyphicon-list-alt">檢視</i>);
			break;
			case "new":
				icon.push(<i key="1" className="glyphicon glyphicon-plus">新增</i> );
			break;
			case "edit":
				icon.push(<i key="2" className="glyphicon glyphicon-cog">編輯</i>);
			break;
			case "delete":
				icon.push(<span key="3" className="glyphicon glyphicon-remove">刪除</span>);
			break;
			case "del":
				icon.push(<span key="3" className="glyphicon glyphicon-remove">刪除</span>);
			break;			
			case "save":
				icon.push(<span key="4" className="glyphicon glyphicon-ok-circle">儲存</span>);
			break;
			case "cancel":
				icon.push(<span key="5" className="glyphicon glyphicon-remove-circle">取消</span>);
			break;
		}
		return (                               
			<span>
				{ display && 				
					<button type="button" className="btn btn-default btn-sm" onClick={this.handleOnButtonClick} >
					{icon}
					</button>
				}
			</span>);
	}
}

export const DisplayableActionButton = (props) =>{
	return props.display && <ActionButton {...props} />
}