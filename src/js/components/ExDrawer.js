import { Drawer, Spin } from 'antd';

export default function ExDrawer(props){
    const footerHeight=props.footer?53:0;
    return (
        <Drawer
            maskClosable={false}
            destroyOnClose={!props.storeOnClose}
            style={{
                height: `calc(100% - 55px - ${footerHeight}px)`, //减去头部，减去底部
                overflow: 'auto',
            }}
            {...props}
        >
            {
                props.loading ? (
                    <div style={{textAlign: 'center', paddingTop: 100}}><Spin/></div>
                ) : props.children
            }
            {
                props.footer&&(
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e8e8e8',
                            padding: '10px 16px',
                            textAlign: 'right',
                            left: 0,
                            background: '#fff',
                            borderRadius: '0 0 4px 4px',
                        }}
                    >
                        {props.footer}
                    </div>
                )
            }
        </Drawer>
    )
}