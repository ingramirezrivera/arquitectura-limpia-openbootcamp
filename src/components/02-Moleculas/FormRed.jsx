import React from 'react';
import Button from '../01-Atomos/Button';
import Container from '../01-Atomos/Container';
import Input from '../01-Atomos/Input';

const FormRed = () => {
    return (
        <div>
            <Container>
                <Input />
                <Button color='red'/>
            </Container>
        </div>
    );
}

export default FormRed;
