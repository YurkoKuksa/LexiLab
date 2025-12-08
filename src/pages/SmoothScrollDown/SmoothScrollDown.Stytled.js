import styled from 'styled-components';

export const MainBox = styled.div`
  display: flex;
  flex-direction: column; /* Вирівнює дочірні елементи вертикально */
  font-weight: bold;
  background-color: lightyellow;
`;

// розтягуємо контейнер на висоту вьюпорта
export const Wrapper = styled.div`
  padding: 30px;
  min-height: 100vh; /* Займає всю висоту вікна */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px dotted lightblue;
  height: 100%; /* Займає всю висоту контейнера */
  flex: 1; /* Займає всю доступну висоту в межах MainBox */
  box-sizing: border-box; /* Включає padding у загальну висоту */
`;

export const Pagetitle = styled.h1`
  color: #205612;
  font-size: 100px;
`;

export const ScrollBtn = styled.button`
  font-size: 60px;
  color: #3c0610;
  font-weight: bold;
  padding: 30px;
  margin: 60px;
  border: 1px;
  border-color: #9c2e44;
  background-color: #b1f2ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};
  border-radius: 5px;
  &:hover {
    background-color: lightblue;
  }
  &:active {
    background-color: #34baeb;
    color: #8d9091;
  }
`;

export const DownContainer = styled.div`
  padding: 35px;

  background-color: lightgreen;

  width: 100%;
  height: 1000px;
  margin-top: 300px;
  border: 1px dotted lightgray;
`;

export const Title = styled.h1`
  text-align: center;
  color: red;
  font-size: 30px;
`;
