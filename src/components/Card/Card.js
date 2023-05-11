import './Card.css'
// building a user interface from smaller building blocks(components) it is cold Composition

function Card(props) {
    const classes = 'card ' + props.className;
    return (
        //props.children takes all the content between the component tags
        // children is a rezerved name it can't be used as a prop
        <div className={classes}>{props.children}</div>
    );
};

export default Card;