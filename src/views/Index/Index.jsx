import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Container, Body } from './Index_styles';

export default ({ children }) => (
  <Container>
    <Body>
      <Scrollbars>
        {children}
      </Scrollbars>
    </Body>
  </Container>
);
