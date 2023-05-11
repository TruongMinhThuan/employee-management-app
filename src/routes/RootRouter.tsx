import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import { EmployeeTurnScreen, TurnCalendarScreen } from '../screens/EmployeeTurn';
import MenuNavigation from '../components/navbar/MenuNavigation';
import { HomeScreen } from '../screens/Home';
import { EmployeeManagementScreen } from '../screens/employee-management';

type Props = {}

const RootRouter = (props: Props) => {
    return (
        <Router>

            <div>
                <MenuNavigation />
                <Routes>
                    <Route path="/home-screen" Component={HomeScreen} />
                    <Route path="/employee-turn-screen" Component={EmployeeTurnScreen} />
                    <Route path="/employee-management-screen" Component={EmployeeManagementScreen} />
                    <Route path="/turn-calendar-screen" Component={TurnCalendarScreen} />

                </Routes>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            </div>
        </Router>
    )
}

export default RootRouter