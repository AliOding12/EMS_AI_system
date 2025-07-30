import './layout.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function Layout(){


return(

    <>
     <h2>Layout Component Page</h2>
        <nav className='nav-container'>
              <ul>
                <li><Link to="students">Students</Link></li>
                <li><Link to="instructors">Instructors</Link></li>
                <li><Link to="settings">Settings</Link></li>
                <li><Link to="classroomselect">ClassRooms</Link></li>
              </ul>
        </nav>
    </>
)

};


export default Layout;