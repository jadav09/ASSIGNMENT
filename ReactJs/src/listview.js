
function List() {

    let ary = [
        {id:1, li:<li>Home</li>},
        {id:2, li:<li>About</li>},
        {id:3, li:<li>Servce</li>},
        {id:4, li:<li>Contect</li>},
        {id:5, li:<li>Help</li>},
        
    ]

    return (
        <div>
            <ul>
                <li><h3>How to Create a List View in React Js?</h3></li>
            </ul>

                {ary.map((v) => (
                    <div key={v.id}>
                        <ul>
                            {v.li}
                        </ul>
                     </div>

                ))}
        </div>
    )
}

export default List