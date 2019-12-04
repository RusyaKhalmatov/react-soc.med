import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserDataActionCreator} from "../../redux/reducers/authPageReducer";
class HeaderContainer extends React.Component {

    componentDidMount() {
       
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true}).then(
            responce => {
            debugger
                if(responce.data.resultCode === 0 )
                {
                    
                    let {id,email, login} = responce.data.data;
                    this.props.setUserDataActionCreator(id, email, login)
                }

            }
        );
    }

    render(){
        return <Header {...this.props} />
    }

};

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect( mapStateToProps, {setUserDataActionCreator} )(HeaderContainer);