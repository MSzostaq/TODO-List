import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getTodoLists } from "selectors";

const View = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  height: 100%;
`;

const Cards = styled.div`
  display: flex;
  padding: 16px;
`;

const ListCard = styled(NavLink)`
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.l};
  display: flex;
  flex-direction: column;
  margin: 0 8px 8px 0;
  padding: 8px;
`;

const Lists = ({ lists }) => {
  return (
    <View>
      <Cards>
        {lists.map((list) => (
          <ListCard key={list.id} to={`/list/${list.id}`}>
            {list.name}
          </ListCard>
        ))}
      </Cards>
    </View>
  );
};

const mapStateToProps = (state) => ({ lists: getTodoLists(state) });

export default connect(mapStateToProps)(Lists);
