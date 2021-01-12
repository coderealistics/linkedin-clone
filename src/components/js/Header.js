import React from 'react';
import "../css/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from "./HeaderOption";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/userSlice";
import {auth} from "../../db/firebase";

function Header(props) {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">

            <div className="header__left">
                <img
                    src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1610433619~hmac=cd17515b94154ae8bbf3f5c23cf05895"
                    alt="linkedin logo"/>

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar={true} onClick={logoutOfApp} title="me"/>
            </div>

        </div>
    );
}

export default Header;