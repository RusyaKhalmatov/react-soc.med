import React from 'react';
import {
    followActionCreator,
    setCurrentPageActionCreator, setToggleIsFetchingActionCreator, setTotalCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/reducers/usersPageReducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() { //когда объект уже создан, вызввается данная функция
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{withCredentials:true}).then(
            responce => {
                
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items);
                this.props.setTotalUsersCount(responce.data.totalCount);
            }                                                             
        );
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);


        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials:true}).then(
            responce => {
                
                this.props.toggleIsFetching(false);
                this.props.setUsers(responce.data.items);
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
        toggleIsFetching: setToggleIsFetchingActionCreator
    })(UsersContainer);
/*
export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);*/
