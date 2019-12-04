const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHIN';

let initialState = {
    users:
        [
            /*{id: 1,photoURL:"https://lentachel.ru/netcat_files/Image/foto/2019/09/08/Dmitriy_Nagiev.jpg", fullname:"Rustam", status: "Hey Rustam me", location: {city:"Tashkent", country:"Uzbekistan"}, followed: false},
            {id: 2,photoURL:"https://lentachel.ru/netcat_files/Image/foto/2019/09/08/Dmitriy_Nagiev.jpg", fullname:"Timur" , status: "Timur fasd", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
            {id: 3,photoURL:"https://lentachel.ru/netcat_files/Image/foto/2019/09/08/Dmitriy_Nagiev.jpg", fullname:"Avzal" , status: "Good fasd", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
            {id: 4,photoURL:"https://lentachel.ru/netcat_files/Image/foto/2019/09/08/Dmitriy_Nagiev.jpg", fullname:"Ratmir" , status: "False fasade fasd", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
            {id: 5,photoURL:"https://lentachel.ru/netcat_files/Image/foto/2019/09/08/Dmitriy_Nagiev.jpg", fullname:"Botir" , status: "Im the best", location: {city:"Tashkent", country:"Uzbekistan"}, followed: false},
            {id: 6,photoURL:"https://lentachel.ru/netcat_files/Image/foto/2019/09/08/Dmitriy_Nagiev.jpg", fullname:"Bobur" , status: "Who knows", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
        */],
    pageSize: 15,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: true,
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

export default usersReducer;