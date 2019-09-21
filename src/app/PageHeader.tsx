import React from "react";
import { Container, Header, Menu, Image } from "semantic-ui-react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

function isActive(match: any, location: any) {
  if (match == null || location == null) return false;
  return (match.path as string).substr(1) === location.pathname;
}

function PageHeader() {
  return (
    <Container id="page-header" className="basic segment">
      <Menu className="secondary">
        <Menu.Menu className="left">
          <Header className="" as="h2">
            <Image className="circular" src={logo} />
            <Header.Content>
              Ryan Xie
              <Header.Subheader>Software Engineer</Header.Subheader>
            </Header.Content>
          </Header>
        </Menu.Menu>
        <Menu.Menu className="secondary pointing right">
          <Menu.Item name="a" as={NavLink} isActive={isActive} to="/">
            Home
          </Menu.Item>
          <Menu.Item name="b" as={NavLink} isActive={isActive} to="/articles">
            Articles
          </Menu.Item>
          <Menu.Item name="c" as={NavLink} isActive={isActive} to="/about">
            About
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
}

export default PageHeader;
