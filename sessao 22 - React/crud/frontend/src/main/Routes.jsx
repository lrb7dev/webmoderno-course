import React from "react"
import {Routes, Route} from 'react-router-dom'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/users" element={<UserCrud/>} />
        <Route path="*" element={<Home/>} /> 
    </Routes>
);
    // <Switch>
    //     <Route exact path='/' component={Home} />
    //     <Route path='/users' component={UserCrud} />
    //     <Redirect from='*' to='/' />
    // </Switch>