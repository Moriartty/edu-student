import { Modal } from 'antd';

export default function ExModal(props){
    return (
        <Modal
            maskClosable={false}
            destroyOnClose={!props.storeOnClose}
            {...props}
        >
            {props.children}
        </Modal>
    )
}