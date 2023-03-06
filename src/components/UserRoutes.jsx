import{ Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from "react";
import { Center, Spinner } from '@chakra-ui/react'

import PrivateRoute from './modules/PrivateRoute/PrivateRoute';
import PublicRoute from './modules/PublicRoute/PublicRoute';

const HomePage = lazy(() => import("../page/HomePage/HomePage"));
const SignupPage = lazy(() => import("../page/SignupPage/SignupPage"));
const LoginPage = lazy(() => import("../page/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../page/ContactsPage/ContactsPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Center mt='56'>
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='teal.500'
            size='xl'
          />
        </Center>}>
        <Routes>
            
            
            <Route element={<PublicRoute/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Route>
            <Route element={<PrivateRoute/>}>
                <Route path="/contacts" element={<ContactsPage/>}/>
            </Route>
        </Routes>
        </Suspense>
    )
}

export default UserRoutes;