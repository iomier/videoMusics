import React, { useContext } from 'react';
import { StoreContext } from '../Store/Context';
import { types } from '../Store/Reducer';
import styled from 'styled-components';
const Header = () => {
  const store = useContext(StoreContext);
  const onChangeHandler = e => {
    store.dispatch({
      type: types.SET_TECH_LIST,
      payload: e.target.value
    });
  };
  console.log(store.state);
  return (
    <StHeader>
      <ul>
        <a href='/' alt='Home'>
          خانه
        </a>
        <a href='/sad' alt='Videos'>
          ویدیوها
        </a>
        <a href='/qw' alt='Artists'>
          هنرمندان
        </a>
        <a href='/as' alt='Genres'>
          ژانرها
        </a>
        <a href='/eqr' alt='About Us'>
          درباره‌ی‌ما
        </a>
      </ul>
      <div className='search-bar'>
        <label htmlFor='Search'>
          <input
            value={store.state.search}
            onChange={e => onChangeHandler(e)}
            placeholder='جستجو...'
            name='search'
            type='text'
          />
        </label>
      </div>
      <div className='profile'>iomi خوش‌آمدی...</div>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  color: ${props => props.theme.white};
  font-family: EstedadMedium;
  display: flex;
  align-items: center;
  padding: 1em;
  font-weight: 600;
  justify-content: space-between;
  color: ${props => props.theme.white};
  .search-bar {
    display: flex;
    input {
      font-family: EstedadMedium;
      text-align: center;
      background-color: inherit;
      padding: 0.2em 0.5em;
      border: none;
      border-bottom: 1px solid ${props => props.theme.black};
    }
    div {
      margin: 0 5px;
    }
  }
  ul {
    padding: 0;
    list-style-type: none;
    margin: 0;
    display: flex;
    a {
      color: ${props => props.theme.white};
      margin: 0 1em;
      text-decoration: none;
      :hover,
      :active {
        color: ${props => props.theme.primary};
      }
    }
  }
`;
