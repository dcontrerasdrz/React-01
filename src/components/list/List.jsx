import Item from '../item';

function List({ items = [] }) {

    const map = items.map((item) =>{
        return(
            <Item item={item}/>
        )
    })
    
    return(
        <div>
            <ul>
            {map}
            </ul>
        </div>
    );
}

export default List;