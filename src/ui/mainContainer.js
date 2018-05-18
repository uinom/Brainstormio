import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  width: 1440px;
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 1500px) {
    width: 1140px;
  }

  @media (max-width: 1200px) {
    width: 900px;
  }

  @media (max-width: 960px) {
    width: 680px;
  }

  @media (max-width: 740px) {
    width: 520px;
  }

  @media (max-width: 580px) {
    width: 96%;
    padding: 0;
  }
`;
