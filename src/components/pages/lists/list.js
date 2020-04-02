import React from 'react'
import './list.scss'
import { ListItem } from './listItem';

export const List = () => {
    return (
        <div>
            <h2 className="header">
            <span>ACTIVITY LIST</span>
                <small>Edit and monitor activity lists</small>
            </h2>
            <main>
                <ListItem/>
            </main>
        </div>
    )
}


