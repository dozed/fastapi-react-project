import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink, Route, Routes} from 'react-router-dom';

import DashboardPage from './DashboardPage';
import SettingsPage from './SettingsPage';


const App = () => {
    // simulate error during rendering
    // throw new Error('foo');

    return (
        <>
            <Navbar bg='light' expand='lg'>
                <Container fluid={true}>
                    <NavLink to='/' className='nav-link'>
                        <Navbar.Brand>fastapi-react-project</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <NavLink to='/' className='nav-link'>Dashboard</NavLink>
                            <NavLink to='/settings' className='nav-link'>Settings</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>
                <Routes>
                    <Route path='/'>
                        <Route path='' element={<DashboardPage/>}/>
                        <Route path='settings' element={<SettingsPage/>}/>
                    </Route>
                </Routes>
            </main>
        </>
    );
};

export default App;
