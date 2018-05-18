import React from 'react';
import MainContainer from '../../ui/mainContainer';
import { Header, Subheader, Image } from './Home_styles';

export default () => (
  <MainContainer>
    <Header>Simple React Starter</Header>
    <Subheader>Best way to start your react project!</Subheader>
    <Image src="img/image.jpg" alt="animal" />
  </MainContainer>
);
