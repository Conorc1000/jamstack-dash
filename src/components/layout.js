import React from 'react';
import { Link } from 'gatsby';
import { identityContextProvider } from 'react-netlify-identity-widget';
import './layout.css';

const Layout = ({ children }) => (
    <identityContextProvider url="https://jamstack-auth-setup.netlify.com">
        <header>
            <Link to="/">Jamstack App</Link>
        </header>
        <main>{children}</main>
    </identityContextProvider>
)

export default Layout