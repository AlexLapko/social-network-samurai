import React from 'react'
import Users from './Users'
import { connect } from 'react-redux';
import {
  follow,
  unfollow,
  getUsersThunk,
  onPageChangedThunk
} from "../../redux/users-reducer";
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUserCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

	componentDidMount() {
    let { currentPage, pageSize } = this.props;
		this.props.getUsersThunk(currentPage, pageSize);
	}

	onPageChanged = (pageNumber) => {
    let { pageSize } = this.props;
		this.props.onPageChangedThunk(pageNumber, pageSize);
	}

	render () {
		return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followThunk={this.props.follow}
          unfollowThunk={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
	}	
}

let mapStateToProps = (state) => {
	return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUserCount: getTotalUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
}

export default compose(
  connect(mapStateToProps, {follow, unfollow, getUsersThunk, onPageChangedThunk})
)(UsersContainer);


/*let mapDispatchToProps = (dispatch) => {
	return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unfollow: userId => {
      dispatch(unfollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalCount: totalCount => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggleIsFetching: isFetching => {
      dispatch(toggleIsFetchingAC(isFetching));
    }
  };
}*/