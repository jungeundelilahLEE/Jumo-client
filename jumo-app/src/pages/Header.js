import React from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import icon from '../images/JumoIcon.PNG';

const inputshow = () => {
  if (document.getElementById('input').style.visibility === 'visible') {
    document.getElementById('input').style.visibility = 'hidden';
  } else {
    document.getElementById('input').style.visibility = 'visible';
  }
};

const Header = ({ changeHandler, channel }) => {
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
      {/* {channel} // test용 지워주세요 */}
      <div className="Icon">
        <img src={icon} alt="icon" width="55px" height="55px" />
      </div>
      <Searching>
        <Input
          id="input"
          type="text"
          placeholder="검색어를 입력하세요"
          outline="none"
          onChange={changeHandler}
        />
        <Fi>
          <FiSearch size="24" color="#e7d1bf" onClick={inputshow} />
        </Fi>
      </Searching>
      <div>{channel}</div>
    </Navbar>
  );
};

const Fi = styled.div`
  display: flex;
`;

const Navbar = styled.div`
  font-family: 'Sansation';
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
  visibility: hidden;
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
    transform: translateX(10vw);
  }
  @media ${props => props.theme.tablet} {
    transform: translateX(15vw);
  }
  @media ${props => props.theme.desktop} {
    transform: translateX(25vw);
  }
`;

export default Header;
