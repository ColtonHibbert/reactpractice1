

function Card(props) {

    const {
        character
    } = props;

    return(
        <div>
            {character.name}
        </div>
    );
}

export default Card;