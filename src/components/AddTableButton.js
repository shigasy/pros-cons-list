import React from 'react'
import './AddTableButton.css'

const AddTableButton = (props) => (
    <div className="contents__add-container">
      <a onClick={props.onClick} className="contents__add--table">表を追加する</a>
    </div>
)

export default AddTableButton
