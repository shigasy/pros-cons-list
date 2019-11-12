import React, {useState} from 'react'
import './Table.css'
import AddButton from "./AddButton";

const hoge = () => {
  alert("1")
}

function Table() {
  const [tablePoint, setTablePoint] = useState({pros: [1, 1], cons: [1, 1]})

  const switchProsNumber = (i) => {
    if (tablePoint.pros[i] === 3) {
      tablePoint.pros[i] = 1
    } else {
      tablePoint.pros[i] += 1
    }
    setTablePoint({pros: tablePoint.pros, cons: tablePoint.cons})
  }

  const switchConsNumber = (i) => {
    if (tablePoint.cons[i] === 3) {
      tablePoint.cons[i] = 1
    } else {
      tablePoint.cons[i] += 1
    }
    setTablePoint({pros: tablePoint.pros, cons: tablePoint.cons})
  }

  const addProsColumn = () => {
    setTablePoint({pros: tablePoint.pros.concat(1), cons: tablePoint.cons})
  }
  const addConsColumn = () => {
    setTablePoint({pros: tablePoint.pros, cons: tablePoint.cons.concat(1)})
  }

  const removeProsColumn = (i) => {
    if (tablePoint.pros.length <= 1) return;
    tablePoint.pros.splice(i, 1)
    setTablePoint({pros: tablePoint.pros.concat(), cons: tablePoint.cons})
  }

  const removeConsColumn = (i) => {
    if (tablePoint.cons.length <= 1) return;
    tablePoint.cons.splice(i, 1)
    setTablePoint({pros: tablePoint.pros, cons: tablePoint.cons.concat()})
  }

  return (
      <table align="center" border={1} className="table">
        <caption className="table__caption">
          <div className="table__title">
            <label className="ef">
              <input type="text" placeholder="タイトル" />
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
            let table = [<tr/>]
            if (tablePoint.pros.length > i) {
              table = [...table,
                <td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="良い点"/>
                </td>]
              table = [...table, <td className="table__data--value"><p onClick={() => removeProsColumn(i)}><strong>☓</strong></p>
                <hr/>
                <button onClick={() => switchProsNumber(i)}>{tablePoint.pros[i]}</button>
              </td>]
            } else {
              table = [...table, <td className="table__data--text"/>]
              table = [...table, <td className="table__data--value">
                <hr/>
              </td>]
            }
            if (tablePoint.cons.length > i) {
              table = [...table,
                <td className="table__data--text"><textarea className="table__data--textarea-cons" placeholder="悪い点"/>
                </td>]
              table = [...table, <td className="table__data--value"><p onClick={() => removeConsColumn(i)}><strong>☓</strong></p>
                <hr/>
                <button onClick={() => switchConsNumber(i)}>{tablePoint.cons[i]}</button>
              </td>]
            } else {
              table = [...table, <td className="table__data--text"/>]
              table = [...table, <td className="table__data--value">
                <hr/>
              </td>]
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
            <AddButton onClick={addProsColumn} color="green"/>
          </td>
          <td colSpan="2">
            <AddButton onClick={addConsColumn} color="red"/>
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <p className="table__data--sum-value">{tablePoint.pros.reduce((total, data) => {return total + data})}</p>
          </td>
          <td colSpan="2">
            <p className="table__data--sum-value">{tablePoint.cons.reduce((total, data) => {return total + data})}</p>
          </td>
        </tr>
        </tbody>
      </table>
  )
}

export default Table
