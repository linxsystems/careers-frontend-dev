import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {

    return (
        <div>
            {props.items.map((item) =>
                <TodoItem
                    title={item.title}
                    id={item.id}
                    key={item.id}
                    status={item.status}
                    toggleStatus={props.toggleItemStatus}
                />
            )}
        </div>
    )
}
