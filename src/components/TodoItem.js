import React from 'react';
import '../styles/TodoItem.css';

export default function TodoItem({id, title, status, toggleStatus}) {

    // TODO dim out status.Complete items and put a strikethrough them
    return (
        <div className="todo-item">
            <input type="checkbox" id={`todo-${id}`} onChange={() => toggleStatus(id)} />
            <label htmlFor={`todo-${id}`}>{title}</label>
        </div>
    )
}
