import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'scss/global.scss';
import 'scss/fonts.scss';
import 'scss/spacing.scss';

//Components
import Loading from 'components/Loading';

//Containers
const Layout = React.lazy(() => import('containers/Layout'));

//Pages
const Login = React.lazy(() => import('pages/Login'));
const ForgetPassword = React.lazy(() => import('pages/ForgetPassword'));
const NewPassword = React.lazy(() => import('pages/NewPassword'));

const loading = (
    <div className="main">
        <Loading />
    </div>
);

const App = () => {
    return (
        <React.Suspense fallback={loading}>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/forget" element={<ForgetPassword />} />
                <Route exact path="/new-password" element={<NewPassword />} />
                <Route path="*" element={<Layout />} />
            </Routes>
        </React.Suspense>
    );
};

export default App;
