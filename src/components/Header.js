import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";
function Header() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img
          src='images/logo.svg'
          alt='tesla-logo'
          style={{ height: "1.125rem" }}
        />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => {
            return (
              <a key={index} href='#'>
                {car}
              </a>
            );
          })}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerOpen(true)} />
      </RightMenu>

      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <Custonclose onClick={() => setBurgerOpen(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => {
            return (
              <li>
                <a href='#' key={index}>
                  {car}
                </a>
              </li>
            );
          })}
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-in</a>
        </li>
        <li>
          <a href='#'>Cybertruck</a>
        </li>
        <li>
          <a href='#'>Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  padding-left: 115px;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-size: 0.9rem;
  }
  @media (max-width: 950px) {
    display: none;
  } ;
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9rem;

    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style-type: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.9rem;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Custonclose = styled(CloseIcon)`
  cursor: pointer;
`;
