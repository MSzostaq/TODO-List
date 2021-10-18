import React from "react";
import { connect } from "react-redux";
import { NavLink, Route, useHistory } from "react-router-dom";
import styled from "styled-components";
import { addList } from "actions/todoListsActions";
import { getTodoLists } from "selectors";
import List from "views/List";

const View = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 52px;
  position: relative;
  height: 100%;
`;

const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.buttonGrey};
  display: flex;
  align-items: center;
  padding-left: 12px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
`;

const Heading = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  line-height: 52px;
  height: 52px;
`;

const NewListButton = styled.div`
  background-color: ${({ theme }) => theme.colors.succes};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  line-height: 32px;
  margin-left: 12px;
  padding: 0 8px;
  height: 32px;
`;

const Cards = styled.div`
  display: flex;
  padding: 8px 12px;
`;

const ListCard = styled(NavLink)`
  border-radius: 8px;
  box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0 8px 8px 0;
  padding: 8px;
`;

const Lists = ({ dispatch, lists }) => {
  const history = useHistory();

  function onNewListButtonClick() {
    dispatch(
      addList({
        onSuccess: (list) => {
          history.push(`/list/${list.id}`);
        },
      })
    );
  }

  return (
    <View>
      <Header>
        <Heading>Lists</Heading>
        <NewListButton onClick={onNewListButtonClick}>New list</NewListButton>
      </Header>
      <Cards>
        {lists.map((list) => (
          <ListCard key={list.id} to={`/list/${list.id}`}>
            {list.name}
          </ListCard>
        ))}
      </Cards>
      <Route
        path="/list/:id"
        render={(routeProps) => <List {...routeProps} />}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({ lists: getTodoLists(state) });

export default connect(mapStateToProps)(Lists);
