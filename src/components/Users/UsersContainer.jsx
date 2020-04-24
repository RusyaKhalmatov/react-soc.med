import React from 'react';
import {
    followActionCreator,
    setCurrentPageActionCreator, setToggleIsFetchingActionCreator, setTotalCountActionCreator, setToggleIsFollowingInProgressActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    getUsersThunkCreator
} from "../../redux/reducers/usersPageReducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { getUsers } from '../../API/api';

class UsersContainer extends React.Component {

    componentDidMount() { //когда объект уже создан, вызввается данная функция
        /*this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage,this.props.pageSize).then( // function getUsers is taken from file api.js and it's used to short the code
            data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            }  
        );*/
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);

        getUsers(pageNumber,this.props.pageSize).then( // function getUsers is taken from file api.js and it's used to short the code
            data => {
                
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            }
        );
    };
    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null}


                <Users totalUsers={this.props.totalUsers}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                users = {this.props.users} 
                toggleIsFollowingInProgress = {this.props.toggleIsFollowingInProgress}
                followingInProgress = {this.props.followingInProgress}
                />
           
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>
        {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) =>
        {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) =>
        {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) =>
        {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) =>
        {
            dispatch(setTotalCountActionCreator(totalCount));
        },
        toggleIsFetching: (isFetching) =>
        {
            dispatch(setToggleIsFetchingActionCreator(isFetching));
        },
    };
}
*/

    export default connect(mapStateToProps,{
        follow: followActionCreator,
        unfollow:unfollowActionCreator,
        setUsers:setUsersActionCreator,
        setCurrentPage:setCurrentPageActionCreator,
        setTotalUsersCount: setTotalCountActionCreator,
        toggleIsFetching: setToggleIsFetchingActionCreator,
        toggleIsFollowingInProgress: setToggleIsFollowingInProgressActionCreator,
        getUsersThunkCreator, 

    })(UsersContainer);
/*
export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);*/
