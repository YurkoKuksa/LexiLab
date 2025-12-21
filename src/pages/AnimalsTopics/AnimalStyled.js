import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';

// Styled Components
export const MainContainer = styled.div`
  min-height: 100vh;
  /* background: linear-gradient(to bottom right, #f3f4f6, #e2e8f0); */

  /* outline: 3px dotted red; */
`;

export const Header = styled.div`
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e5e7eb;
`;

export const HeaderContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: linear-gradient(to right, #475569, #4b5563);
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(to right, #334155, #374151);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }

  &:active {
    background: linear-gradient(to right, #1e293b, #1f2937);
  }
`;

export const ArrowIcon = styled(ArrowLeft)`
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.2s;

  ${BackButton}:hover & {
    transform: translateX(-0.25rem);
  }
`;

export const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.25rem;
  font-weight: bold;
  color: #1e293b;
`;

export const Cursor = styled.span`
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

export const Spacer = styled.div`
  width: 6rem;
`;

export const Content = styled.div`
  padding-top: 1.5rem;
`;
