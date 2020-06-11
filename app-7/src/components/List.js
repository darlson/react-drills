import React from 'react'
import Todo from './Todo'

export default function List (props) {
    let list = props.list.map((e, i) => {
        return <Todo key={i} task={e} />
    })
    // console.log(list)
    return(
        <div>
            {list}
        </div>
        
    )
}