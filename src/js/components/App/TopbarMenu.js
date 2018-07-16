import { Menu } from 'antd';

class TopbarMenu extends React.PureComponent {
    handleClick = (e) => {
        const {menuData, onChange} = this.props;
        const item=menuData.find(m => m.no==e.key);
        onChange(item);
    };

    render(){
        const menuData = this.props.menuData;
        return menuData&&(
                <Menu
                    mode="horizontal"
                    // defaultSelectedKeys={['>0']}
                    onClick={this.handleClick}
                >
                    {
                        menuData.map((item) => {
                            return <Menu.Item key={item.no}>{item.name}</Menu.Item>
                        })
                    }
                </Menu>
            )
    }
}

export default TopbarMenu