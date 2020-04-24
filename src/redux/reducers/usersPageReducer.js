const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHIN';
const TOGGLE_IS_FOLLOWINGPROGRESS = 'TOGGLE-IS-FOLLOWINGPROGRESS';

let initialState = {
    users:
        [],
    pageSize: 15,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
};

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const usersReducer = (stateUsers = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
        return {
            ...stateUsers,
                users: stateUsers.users.map(u=>
                {
                    if(u.id === action.userId)
                    {
                        return {...u, followed: true};
                    }else
                        return u;
                })
        };
        case UNFOLLOW:
            return{
                 ...stateUsers,
                users: stateUsers.users.map(u=>
                {
                    if(u.id === action.userId)
                    {
                        return {...u, followed: false};
                    }else
                        return u;
                })
            };
        case SET_USERS:
        {
            return { ...stateUsers, users: action.users };
        }
        case SET_CURRENT_PAGE:
        {
            return { ...stateUsers, currentPage: action.currentPage};
        }
        case SET_TOTAL_COUNT:
        {
            return{ ...stateUsers, totalUsersCount: action.totalCount};
        }
        case TOGGLE_IS_FETCHING:
        {
            return{ ...stateUsers, isFetching: action.isFetching};

        }
        case TOGGLE_IS_FOLLOWINGPROGRESS:
        {
            return{ ...stateUsers, followingInProgress: action.isFollowingInProgress};
        }
        default:
            return stateUsers;
    }
}

export const followActionCreator=(userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator=(userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type:SET_USERS,users});
export const setCurrentPageActionCreator = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setTotalCountActionCreator = (totalCount) => ({type:SET_TOTAL_COUNT, totalCount});
export const setToggleIsFetchingActionCreator = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});
export const setToggleIsFollowingInProgressActionCreator = (isFollowingInProgress) => ({type:TOGGLE_IS_FOLLOWINGPROGRESS, isFollowingInProgress});

export const getUsersThunkCreator = (currentPage, pageSize) =>{
 return(dispatch) => {
    dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage,pageSize).then( // function getUsers is taken from file api.js and it's used to short the code
            data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            }  
        );
    }
}

export default usersReducer;