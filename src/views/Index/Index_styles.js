import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
`;

export const Body = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;

  > div > div:nth-child(1) {
    overflow-x: hidden !important;
  }

  > div > div:nth-child(2) {
    display: none;
  }
`;
