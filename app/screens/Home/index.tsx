import React from 'react';
import Input from '@cuteapp/components/Input';
import {Container, Title} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Encontre o seu Novo Trabalho</Title>
      <Input placeholder="Pesquise por empresa, título..." iconName="search" />
    </Container>
  );
};

export default Home;
