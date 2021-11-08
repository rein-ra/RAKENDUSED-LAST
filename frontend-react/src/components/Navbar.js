import '../style/navbar.css';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd';
import { MailOutlined, HomeOutlined, MenuOutlined, LoginOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/">
                <HomeOutlined className="taskButton"/>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="posts">
                <MailOutlined className="taskButton"/>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="login">
                <LoginOutlined className="taskButton"/>
            </Link>
        </Menu.Item>
    </Menu>
);

function Navbar(){
    return (
        <div className="navbar">
            <h2>Just a Fun Website</h2>
            <Dropdown overlay={menu} placement="bottomCenter">
                <Button>
                    <MenuOutlined />
                </Button>
            </Dropdown>
        </div>
    )
}

export default Navbar;