import styled from "styled-components";

export const ScrollUpPic = styled.img`
  fill: white;

  @media screen and (min-width: 1792px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 2560px) {
    width: 56px;
    height: 56px;
  }
`;

export const ScrollButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  position: fixed;
  bottom: ${(props) => (props.isVisible ? "54px" : "-100px")};
  right: 20px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 0.3s ease, bottom 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 990;
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1792px) {
    width: 58px;
    height: 58px;
  }
  @media screen and (min-width: 2560px) {
    width: 68px;
    height: 68px;
  }
`;
