import React from 'react'
import './AddButton.css'

const AddButton = (props) => (
    <a className={props.color === "green" ? "table__add-button--pros" : "table__add-button--cons"}>＋</a>
)

export default AddButton
