import React from "react";
//dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";
//components
import { LateralMenu, MenuInferior } from "../layout/index";
import { StoreCard } from "../components/index";
//icons
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { BiGame } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
//styled-components
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 0 0 45px;
  @media (max-width: 500px) {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
  }
`;
const Products = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  box-sizing: border-box;
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 20px;
`;
const LinkMenu = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
`;
const Menu = styled(Container)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #000;
  height: 80px;
  border-radius: 0 0 20px 20px;
  margin-top: 50px;
  @media (max-width: 500px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 50px 0;
  }
`;
const SubMenu = styled.nav`
  display: flex;
`;
const Buscador = styled.div`
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  background: #141414;
  max-width: 400px;
  margin: 20px 0;
  @media (max-width: 450px) {
    width: 100%;
  }
  > input {
    border: none;
    outline: none;
    background: #000;
    color: #fff;
    background: #141414;
    padding: 5px 15px;
    width: 100%;
  }
  > button {
    background: #141414;
    border: none;
    padding: 5px;
    border-radius: 50px;
  }
`;
const Store = () => {
  return (
    <>
      <MenuInferior />
      <LateralMenu />
      <Container>
        <Navigation>
          <IconContext.Provider value={{ color: "#707070", size: "8em" }}>
            <MdComputer />
            <FaGamepad />
            <BiGame />
          </IconContext.Provider>
        </Navigation>

        <Menu>
          <SubMenu>
            <LinkMenu to="/">Explorar</LinkMenu>
            <LinkMenu to="/store">Tienda</LinkMenu>
          </SubMenu>
          <Buscador>
            <input type="text" placeholder="Buscar..." />
            <button>
              <BiSearchAlt size="1.3em" color="#fff" />
            </button>
          </Buscador>
        </Menu>

        <Products>
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://m.media-amazon.com/images/M/MV5BOGM3MTlhM2QtNWE5NC00NGEwLWJlYWYtMGJkNzYwMmIzMTRiXkEyXkFqcGdeQXVyNDIwOTkyNjM@._V1_.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://cdn-products.eneba.com/resized-products/l3dYENetBWs46gkoGqosAAmI3ai0hn8w_zFMK6aTOpg_350x200_1x-0.jpeg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://ae01.alicdn.com/kf/HTB1JgATPpXXXXcQXFXXq6xXFXXXT/Custom-Canvas-Wall-Decals-Watch-Dogs-Poster-Watch-Dogs-Sticker-Mural-Game-Wallpaper-Kid-Wall-Stickers.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://m.media-amazon.com/images/M/MV5BOGM3MTlhM2QtNWE5NC00NGEwLWJlYWYtMGJkNzYwMmIzMTRiXkEyXkFqcGdeQXVyNDIwOTkyNjM@._V1_.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://cdn-products.eneba.com/resized-products/l3dYENetBWs46gkoGqosAAmI3ai0hn8w_zFMK6aTOpg_350x200_1x-0.jpeg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://ae01.alicdn.com/kf/HTB1JgATPpXXXXcQXFXXq6xXFXXXT/Custom-Canvas-Wall-Decals-Watch-Dogs-Poster-Watch-Dogs-Sticker-Mural-Game-Wallpaper-Kid-Wall-Stickers.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://m.media-amazon.com/images/M/MV5BOGM3MTlhM2QtNWE5NC00NGEwLWJlYWYtMGJkNzYwMmIzMTRiXkEyXkFqcGdeQXVyNDIwOTkyNjM@._V1_.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://www.enter.co/wp-content/uploads/2021/05/cyberpunk-2077-3-scaled-1-768x432.jpg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://cdn-products.eneba.com/resized-products/l3dYENetBWs46gkoGqosAAmI3ai0hn8w_zFMK6aTOpg_350x200_1x-0.jpeg"
          />
          <StoreCard
            title="videojuegos"
            price={234}
            image="https://ae01.alicdn.com/kf/HTB1JgATPpXXXXcQXFXXq6xXFXXXT/Custom-Canvas-Wall-Decals-Watch-Dogs-Poster-Watch-Dogs-Sticker-Mural-Game-Wallpaper-Kid-Wall-Stickers.jpg"
          />
        </Products>
      </Container>
    </>
  );
};
export default Store;
