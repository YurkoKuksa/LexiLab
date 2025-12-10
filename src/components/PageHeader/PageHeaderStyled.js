import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';

export const Header = styled.header`
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e5e7eb;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 1rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 2rem;
  }
`;

export const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: linear-gradient(to right, #475569, #6b7280);
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  border: none;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #334155, #4b5563);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }

  &:active {
    background: linear-gradient(to right, #1e293b, #374151);
  }

  span {
    font-size: 1rem;
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
  animation: pulse 1s infinite;

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
