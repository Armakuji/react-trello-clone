import { Dropdown, Icon, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

import { ACCOUNT, BOARDS } from '../../routes';
import { Button } from '../../shared/components/Button';
import { signOut } from '../../auth/api/auth';

class NavigationAuth extends Component {
    signOut() {
        return signOut();
    }

    render() {
        return (
            <Nav>
                <NavItems>
                    <Link to={BOARDS}>
                        <StyledButton>
                            <Icon type="home" />
                        </StyledButton>
                    </Link>
                </NavItems>
                <NavUser>
                    <Dropdown
                        overlay={
                            <Menu>
                                <Menu.Item key="0">
                                    <Icon type="user" theme="outlined" />
                                    <StyledLink to={ACCOUNT}>Settings</StyledLink>
                                </Menu.Item>
                                <Menu.Divider />
                                <Menu.Item key="1" onClick={this.signOut}>
                                    <Icon type="logout" theme="outlined" /> Sign Out
                                </Menu.Item>
                            </Menu>
                        }
                        trigger={['click']}
                    >
                        <StyledButton>
                            <Icon type="setting" theme="outlined" />
                        </StyledButton>
                    </Dropdown>
                </NavUser>
            </Nav>
        );
    }
}

const StyledLink = styled(Link)`
    display: inline-block !important;
`;

const StyledButton = styled(Button)`
    background: hsla(0, 0%, 100%, 0.3);
    &:hover {
        background: hsla(0, 0%, 100%, 0.2);
    }
    &:active {
        background: hsla(0, 0%, 100%, 0.1);
    }
`;

const Nav = styled.nav`
    background: #0079bf;
    padding: 4px;
    margin-bottom: 20px;
`;

const NavItems = styled.div`
    display: inline-block;
    margin-right: 10px;
    a {
        display: inline-block;
    }
`;

const NavUser = styled.div`
    position: absolute;
    right: 0;
    top: 4px;
    div {
        display: inline-block;
    }
`;

export default withRouter(NavigationAuth);
