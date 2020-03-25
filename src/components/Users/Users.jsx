import React from 'react'
import Paginator from './../common/Paginator/Paginator';
import User from './User';

let Users = ({ totalUserCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalUserCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

      <div>
        {users.map(u => ( <User 
                            key={u.id} 
                            user ={u} 
                            followingInProgress={props.followingInProgress} 
                            unfollowThunk={props.unfollowThunk} 
                            followThunk={props.followThunk} />
        ))}
      </div>
    </div>
  );
};

export default Users;