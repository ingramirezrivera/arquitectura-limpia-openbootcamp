import Container  from '../01-Atomos/Container';
import React from 'react';
import Button from '../01-Atomos/Button';

const Header = ({ children }) => {
    return (
        <Container type='header'>
            <Button />
            { children }
        </Container>
    );
}

export default Header;
