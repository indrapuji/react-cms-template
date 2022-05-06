import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

//Components
import Loading from 'components/Loading';

import routes from 'routes';

const Content = () => {
    return (
        <Container>
            <React.Suspense fallback={<Loading />}>
                <Routes>
                    {routes.map((route, idx) => {
                        return route.component && <Route key={idx} exact={route.exact} path={route.path} element={<route.component />} />;
                    })}
                </Routes>
            </React.Suspense>
        </Container>
    );
};

export default Content;
