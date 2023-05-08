import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { AuthContext } from '../context/AuthContext';

export const Profile = () => {
    const { loginData, logout } = useContext(AuthContext)
    const [dropdown, setDropdown] = useState(false);

    return (
        <div >
            <Dropdown isOpen={dropdown} toggle={() => setDropdown(!dropdown)}>
                <DropdownToggle >
                    <div className="user-photo">
                        <img src={loginData.user.photoURL} alt="user-photo" />
                    </div>
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem header >
                        {loginData.user.displayName} <br />
                        ({loginData.user.email})
                    </DropdownItem>
                    <DropdownItem onClick={logout}>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}


