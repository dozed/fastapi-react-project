import React from 'react';
import {createRoot} from 'react-dom/client';
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import ErrorPage from './ErrorPage';

import 'style.scss';

const root = createRoot(document.getElementById('root'));

root.render(
    <ErrorBoundary FallbackComponent={ErrorPage}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ErrorBoundary>
);
