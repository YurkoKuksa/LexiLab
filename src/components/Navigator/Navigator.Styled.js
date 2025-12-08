import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export const AnimatedNavLink = styled(NavLink)`
  display: inline-block;
  transition: transform 0.3s;
  animation: ${float} 3s ease-in-out infinite 1.4s;

  &:hover {
    transform: translateY(1px);
  }
`;

export const Navig = styled.nav`
  width: 100%;
  padding: 16px 24px;
  background: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const NavWrapper = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  cursor: pointer;
  letter-spacing: 0.5px;

  &:hover {
    color: #0077ff;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const NavItem = styled.li``;

export const StyledNavLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding: 6px 8px;
  border-radius: 6px;
  transition: 0.25s ease;

  &:hover {
    background: #f0f4ff;
    color: #0060e6;
  }

  &.active {
    color: #0051cc;
    font-weight: 600;
    border-bottom: 2px solid #0051cc;
  }
`;
