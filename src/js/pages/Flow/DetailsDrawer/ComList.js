import ComListItem from './ComListItem';

class ComList extends React.PureComponent {
    render(){
        const {componentList} = this.props;
        return (
            <div>
                {
                    componentList.map((com, i) => <ComListItem key={i} data={com}/>)
                }
            </div>
        )
    }
}

export default ComList;