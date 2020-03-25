import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhoto } from "./../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getUserProfileThunk(userId);
		this.props.getStatusThunk(userId);
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState){
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}
	
	render() {
		return (
			<Profile 
				{...this.props} 
				isOwner={!this.props.match.params.userId}
				profile={this.props.profile} 
				status={this.props.status} 
				updateStatus={this.props.updateStatusThunk}
				savePhoto={this.props.savePhoto}/>
				
		)
	}
}

let mapStateToProps = state => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});

export default compose(
	connect(mapStateToProps, { getUserProfileThunk, getStatusThunk, updateStatusThunk, savePhoto }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
