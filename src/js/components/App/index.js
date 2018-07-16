class App extends React.Component {
    render() {
        return (
            <div className="admin-app full-height">
                {this.props.children}
            </div>
        );
    }
}

export default App