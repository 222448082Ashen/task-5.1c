import React from 'react';
import { Input, Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
    return (
        <Menu secondary style={{
            top: '0px',
            margin: '0px',
            padding: '0px 15px',
            zIndex: '10',
            backgroundColor: 'white',
            borderBottom: '1px solid #abc'
        }}>
            <Menu.Item header as={"h3"}>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    DEV@Deakin
                </Link>
            </Menu.Item>
            <Menu.Menu style={{ padding: '10px 10px' }} position='right'>
                <Input style={{ margin: '0 5px' }} action={{ icon: 'search' }} size='small' placeholder='Search any item...' />
                <Link to="/new-post">
                    <Button style={{ margin: '0 5px' }} size='small'>Post</Button>
                </Link>
                <Button style={{ margin: '0 5px' }} primary size='small'>Login</Button>
            </Menu.Menu>
        </Menu>
    );
}

export default HeaderBar;
