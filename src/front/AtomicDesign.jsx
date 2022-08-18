import Button  from '../components/01-Atomos/Button';
import React from 'react';
import Input from '../components/01-Atomos/Input';
import Container from '../components/01-Atomos/Container';
import FormAzul from '../components/02-Moleculas/FormAzul';
import FormRed from '../components/02-Moleculas/FormRed';
import Formulario from '../components/03-Organismos/Formulario';
import Header from '../components/02-Moleculas/Header';
import OrgHeader from '../components/03-Organismos/OrgHeader';

const AtomicDesign = () => {
    return (
        <div>
            <h2>Vamos a diseñar nuestros atomos</h2>
            <h1>Átomos</h1>
            <div>Nuestros Átomos</div>
            <div className='atom-list'>
                <Button color='blue'/>
                <Button color='red'/>
                <Input />
                <Container />
            </div>
            <h1>Moléculas</h1>
            <div>Nuestros Moléculas</div>
            <FormAzul />
            <FormRed />
            <Header />
            <h1>Organismos</h1>
            <div>Nuestros Organismos</div>
            <Formulario />
            <OrgHeader />
            <h1>Plantillas</h1>
            <div>Nuestras Plantillas</div>
            <h1>Páginas</h1>
            <div>Nuestras Páginas</div>


            
        </div>
    );
}

export default AtomicDesign;
