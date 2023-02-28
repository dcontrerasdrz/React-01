function Item({ item }) {
    return(
        <li>
            <p>{`${item.name} - ${item.id}`}</p>
        </li>
    )
}

export default Item;