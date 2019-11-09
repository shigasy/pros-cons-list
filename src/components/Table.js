import React from 'react'
import './Table.css'
import AddButton from "./AddButton";
const Table = () => (
    <table align="center" className="table">
      <caption className="table__caption">
        <div className="table__title">
          <label className="ef">
            <input type="text" placeholder="タイトル1"></input>
          </label>
        </div>
      </caption>
      <thead className="table__header">
      <tr className="table__header-container">
        <th className="table__header--pros" colSpan="2">良い点</th>
        <th className="table__header--cons" colSpan="2">悪い点</th>
      </tr>
      </thead>
      <tbody className="table__body">
      <tr>
        <td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="良い点"></textarea></td>
        <td className="table__data--value"><p><strong>☓</strong></p><hr></hr><p>1</p></td>
        <td className="table__data--text"><textarea className="table__data--textarea-cons" placeholder="悪い点"></textarea></td>
        <td className="table__data--value"><p><strong>☓</strong></p><hr></hr><p>1</p></td>
      </tr>
      <tr>
        <td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="良い点"></textarea></td>
        <td className="table__data--value"><p><strong>☓</strong></p><hr></hr><p>1</p></td>
        <td className="table__data--text"><textarea className="table__data--textarea-cons" placeholder="悪い点"></textarea></td>
        <td className="table__data--value"><p><strong>☓</strong></p><hr></hr><p>1</p></td>
      </tr>
      <tr>
        <td colSpan="2">
          <AddButton color="green"/>
        </td>
        <td colSpan="2">
          <AddButton color="red"/>
        </td>
      </tr>
      <tr>
        <td colSpan="2">
          <p className="table__data--sum-value">10</p>
        </td>
        <td colSpan="2">
          <p className="table__data--sum-value">10</p>
        </td>
      </tr>
      </tbody>
    </table>
)

export default Table
