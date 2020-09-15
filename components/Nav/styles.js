import styled from 'styled-components';

export const StyledSidebar = styled.div`
  display: grid;
  grid-template-rows: 100px 4fr 1fr;
  justify-items: center;
  align-content: start;

  .navLinks {
    display: grid;
    align-content: start;
    grid-row-gap: 10px;
  }
  .navLink {
    display: grid;
    grid-template-columns: 10px auto;
    grid-column-gap: 10px;
    cursor: pointer;
  }
  footer {
    display: grid;
  }
`;

export const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  width: 100%;
  font-size: 2rem;
  align-items: center;
  a {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    font-weight: 800;
    color: ${props => props.theme.black} @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(10deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: red;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 700px) {
    // width: 100%;
    // justify-content: center;
    // font-size: 1.5rem;
  }
`;

export const NavRightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  grid-column-gap: 6px;
  justify-content: end;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const NavButton = styled.button`
  margin: 6px;
  height: 56px;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #007c70;
  border: 2px solid #007c70;
  cursor: pointer;
  border-radius: 4px;
  padding: 1rem 3rem;
  background: none;
  align-items: center;
`;

export const NavButtonSecondary = styled.button`
  margin: 6px;
  height: 56px;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #ffffff;
  border: 2px solid #007c70;
  cursor: pointer;
  border-radius: 4px;
  padding: 1rem 3rem;
  background: #007c70;
  align-items: center;
`;
