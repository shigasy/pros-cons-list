import React, {useState} from 'react'
import './Table.css'
import AddButton from "./AddButton";

function switchNumber(e) {
  console.log(e.target.innerHTML)
  e.target.innerHTML = parseInt(e.target.innerHTML) + parseInt(1)
}


function Table() {
  // const [tablePoint, setTablePoint] = useState({point: [{pros: [1]}, {cons: [1]}]})
  const [tablePoint, setTablePoint] = useState({pros: [1, 2], cons: [1, 1, 1, 2]})

  return (
  <table align="center" border={1} className="table">
    <caption className="table__caption">
      <div className="table__title">
        <label className="ef">
          <input type="text" placeholder="タイトル1"/>
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
    {/*<tr>*/}
    {/*  <td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="良い点"></textarea>*/}
    {/*  </td>*/}
    {/*  <td className="table__data--value"><p><strong>☓</strong></p>*/}
    {/*    <hr></hr>*/}
    {/*    <button onClick={switchNumber}>1</button>*/}
    {/*  </td>*/}
    {/*  <td className="table__data--text"><textarea className="table__data--textarea-cons" placeholder="悪い点"></textarea>*/}
    {/*  </td>*/}
    {/*  <td className="table__data--value"><p><strong>☓</strong></p>*/}
    {/*    <hr></hr>*/}
    {/*    <p>1</p></td>*/}
    {/*</tr>*/}
    {(() => {
      let maxArray = tablePoint.pros
      if (tablePoint.pros.length < tablePoint.cons.length) {
        maxArray = tablePoint.cons
      }
      let tag = []
      for (let i = 0; i < maxArray.length; i++) {
        let table = [<tr />]
        if (tablePoint.pros.length > i) {
          table = [...table, <td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="良い点"></textarea></td>]
          table = [...table, <td className="table__data--value"><p><strong>☓</strong></p><hr /><button onClick={switchNumber}>1</button></td>]
        } else {
          table = [...table, <td className="table__data--text" />]
          table = [...table, <td className="table__data--value"><hr /></td>]
        }
        if (tablePoint.cons.length > i) {
          table = [...table, <td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="悪い点"></textarea></td>]
          table = [...table, <td className="table__data--value"><p><strong>☓</strong></p><hr /><button onClick={switchNumber}>1</button></td>]
        } else {
          table = [...table, <td className="table__data--text" />]
          table = [...table, <td className="table__data--value"><hr /></td>]
        }
        tag = [...tag, table]
      }
      return tag
    })()}
    <tr>
      {/*<td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="良い点"></textarea>*/}
      {/*</td>*/}
      {/*<td className="table__data--value"><p><strong>☓</strong></p>*/}
      {/*  <hr></hr>*/}
      {/*  <button onClick={switchNumber}>1</button>*/}
      {/*</td>*/}
      {/*<td className="table__data--text"><textarea className="table__data--textarea-cons" placeholder="悪い点"></textarea>*/}
      {/*</td>*/}
      {/*<td className="table__data--value"><p><strong>☓</strong></p>*/}
      {/*  <hr></hr>*/}
      {/*  <p>1</p></td>*/}
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
)}

export default Table
