function AnswerFill(props) {
    return (
        <span>
            {
                props.topic.split(/______+/).joinItem(i => <input key={i} type="text" className="input-fill-blank"/>)
            }
        </span>
    )
}

export default AnswerFill