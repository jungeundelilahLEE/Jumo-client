/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import icon from '../images/JumoIcon.PNG';

const Header = ({ handleChange }) => {
  // const [searchText, setSearchText] = useState('');
  // const [searchItem, setSearchItem] = useState([]);

  // const handleSearchText = e => {
  //   setSearchText(e.target.value);
  // };

  // const handleSearchSubmit = () => {
  //   axios
  //     .get(`https://jumoserver.ml/makgeolli/search?query=${searchText}`)
  //     .then(res => {
  //       setSearchItem(prev => {
  //         return [...new Set([...prev, ...res.data.data])];
  //       });
  //     });
  // };

  return (
    <Navbar>
      <div className="Icon">
        <img src={icon} alt="icon" width="55px" height="55px" />
      </div>
      <Searching>
        <Input
          type="text"
          placeholder="검색어를 입력하세요"
          outline="none"
          onChange={handleChange}
        />
        <Fi>
          <FiSearch size="24" color="#e7d1bf" />
        </Fi>
      </Searching>
      <div>Mypage</div>
    </Navbar>
  );
};

const Fi = styled.div`
  display: flex;
`;

const Navbar = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  color: white;
  background-color: #293848;
  width: 100%;
  height: 50px;
`;
const Input = styled.input`
  /* display: none; */
  font-family: Sunflower;
  background-color: #293848;
  color: #e7d1bf;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 3px solid #e7d1bf;
  outline: none;
  width: 45vh;
  &:focus {
    background-color: #293848;
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
  }
`;
const Searching = styled.div`
  display: flex;
  @media ${props => props.theme.mobile} {
    transform: translateX(20vw);
  }
  @media ${props => props.theme.tablet} {
    transform: translateX(30vw);
  }
  @media ${props => props.theme.desktop} {
    transform: translateX(40vw);
  }
`;

export default Header;
