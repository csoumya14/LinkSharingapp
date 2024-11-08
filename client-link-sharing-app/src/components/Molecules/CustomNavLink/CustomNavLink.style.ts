import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.palette.primary.purple};
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  width: 60px;
  height: 50px;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;

  &:focus {
    outline: 3px dashed ${props => props.theme.palette.primary.veryDarkBlue}; /* Custom focus outline */
  }

  &.active {
    color: ${props => props.theme.palette.primary.veryDarkBlue};
    text-decoration: underline;
    background: ${props => props.theme.palette.primary.lightPurple};
  }

  &:hover {
    color: ${props => props.theme.palette.primary.purple};
  }
  font-size: 0px;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
  }
`;