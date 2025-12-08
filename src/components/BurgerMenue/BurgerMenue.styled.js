import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 50px 35px 40px 40px;
  background-color: #fff;
  z-index: 999;
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  transform: ${({ open }) => (open ? " translateX(0)" : " translateX(100%)")};

  transition: transform 300ms ease-in-out;

  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const MainTitle = styled.h1``;

export const LogoPicture = styled.img`
  width: 40px;
  height: 40px;
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  margin: 10px 0;
`;

// Decoration pictures
export const MainPicture = styled.img`
  width: 80px;
  position: absolute;
  top: 120px;
  right: 10%;
`;

export const ExtraPicture = styled.img`
  width: 120px;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

// Navigation
export const LinkStyle = styled(NavLink)`
  display: block;
  margin-bottom: 28px;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.11;
  transition: font-weight 0.3s ease, color 0.3s ease;

  &.active {
    color: #0e07c9;
    font-weight: 800;
    letter-spacing: 2;
    text-shadow: #72a0c1;
  }
`;

export const Navigator = styled.nav`
  /* position: sticky;
  top: 20px; */
  margin: 20px 0;
  flex-grow: 1;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  height: 24px;
  width: 24px;

  border-radius: 50%;
  /* background-color: #2e2f42; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgSvg = styled.img`
  width: 8px;
  height: 8px;
`;

export const UlContacts = styled.ul`
  display: flex;

  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const LiContacts = styled.li``;

export const PhoneLink = styled.a`
  color: #4d5ae5;
  /* font-size: 16px;
  font-weight: 500; */

  font-size: 20px;
  font-weight: 700;

  line-height: 1.2;
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;

export const EmailLink = styled.a`
  color: #434455;
  /* font-size: 16px;
  font-weight: 500; */

  font-size: 20px;
  font-weight: 700;

  line-height: 1.2;
  letter-spacing: 0.02em;
`;
