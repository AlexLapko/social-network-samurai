import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk } from "./../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authorizedUserId;
			if(!userId) {
				this.props.history.push('/login')
			}
    }
		this.props.getUserProfileThunk(userId);
		this.props.getStatusThunk(userId);
	}
	
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunk}/>
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
	connect(mapStateToProps, { getUserProfileThunk, getStatusThunk, updateStatusThunk }),
	withRouter,
	withAuthRedirect
)(ProfileContainer);
