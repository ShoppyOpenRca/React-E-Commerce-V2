import styled from "styled-components";
const NavWrapper = styled.nav `
  .nav-link {
    color: var(--mainBlack) !important;
    text-transform: capitalize;
  }
  .act{
      text-decoration: underline;
      color: var(--mainBlue) !important;
      content: "";
  }
  .text-underline {
  height: 0;
  width: 2% !important; 
  /* any width of your choice with any units e.g. px, em... */
  border-bottom: 2px solid var(--mainBlue) !important;
  content: "";
  }
`;

export default NavWrapper;