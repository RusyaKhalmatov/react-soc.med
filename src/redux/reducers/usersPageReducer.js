const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
let initialState = {
    users:
        [
            {id: 1, fullname:"Rustam", status: "Hey Rustam me", location: {city:"Tashkent", country:"Uzbekistan"}, followed: false},
            {id: 2, fullname:"Timur" , status: "Timur fasd", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
            {id: 3, fullname:"Avzal" , status: "Good fasd", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
            {id: 4, fullname:"Ratmir" , status: "False fasade fasd", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
            {id: 5, fullname:"Botir" , status: "Im the best", location: {city:"Tashkent", country:"Uzbekistan"}, followed: false},
            {id: 6, fullname:"Bobur" , status: "Who knows", location: {city:"Tashkent", country:"Uzbekistan"}, followed: true},
        ],

}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const usersReducer = (stateUsers = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
        {

            return
        }
        case UNFOLLOW: {

            return
        }
        default:
            return stateUsers;
    }
}

export const followActionCreator=(userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator=(userId) => ({type: UNFOLLOW, userId});

export default usersReducer;