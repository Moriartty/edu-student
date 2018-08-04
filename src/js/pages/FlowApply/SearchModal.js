import { Form } from 'antd';
import ExFormItem from 'components/ExFormItem';
import ExModal from 'components/ExModal';

const SearchForm = Form.create()((props) => {
    const { form } = props;
    const { getFieldDecorator } = form;
    return (
        <Form>
            <ExFormItem label="流程名称" name="name" placeholder="请输入关键字搜索" getFieldDecorator={getFieldDecorator}/>
        </Form>
    );
});

class SearchModal extends React.Component {
    handleSave = () => {
        const form = this.form;
        form.validateFields((err, data) => {
            if (err) {
                return;
            }

            this.props.onSearch(data);
            this.props.onClose();
        });
    };

    saveFormRef = (form) => {
        this.form = form;
    };

    render() {
        const {show, onClose} = this.props;
        return (
            <ExModal
                visible={show}
                title="查询条件"
                storeOnClose
                onCancel={onClose}
                onOk={this.handleSave}
            >
                <SearchForm
                    ref={this.saveFormRef}
                />
            </ExModal>
        );
    }
}

export default SearchModal