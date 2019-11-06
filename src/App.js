import React from 'react';
import './App.css';
import './components/Table.css'
import './components/Button.css'

import AddButton from './components/AddButton'

function App() {
  return (
      <div className="App">
        <section className="App-description">
          <h2 className="App-description__title">良い点、悪い点リスト</h2>
          <div className="App-description__sub-content">
            <h5 className="App-description__sub-description">考えられる様々な選択肢について、</h5>
            <a className="App-description__button--sample">サンプル</a>
            <a className="App-description__button--how-to-use">使いかた</a>
          </div>
        </section>
        <section className="content">
          <div className="content__container">
            <table align="center" border={1} className="table">
              <caption className="table__caption">
                <span className="table__title"><strong>タイトル1</strong></span>
              </caption>
              <tbody className="table__body">
              <tr className="table__header">
                <th className="table__header--pros" colSpan="2">良い点</th>
                <th className="table__header--cons" colSpan="2">悪い点</th>
              </tr>
              <tr>
                <td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="良い点"></textarea></td>
                <td className="table__data--value">1</td>
                <td className="table__data--text"><textarea className="table__data--textarea-cons" placeholder="悪い点"></textarea></td>
                <td className="table__data--value">1</td>
              </tr>
              <tr>
                <td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="良い点"></textarea></td>
                <td className="table__data--value">1</td>
                <td className="table__data--text"><textarea className="table__data--textarea-cons" placeholder="悪い点"></textarea></td>
                <td className="table__data--value">1</td>
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
            <table align="center" border={1} className="table">
              <caption className="table__caption">
                <span className="table__title"><strong>タイトル2</strong></span>
              </caption>
              <tbody className="table__body">
              <tr className="table__header">
                <th className="table__header--pros" colSpan="2">良い点</th>
                <th className="table__header--cons" colSpan="2">悪い点</th>
              </tr>
              <tr>
                <td className="table__data--text">
                  <textarea className="table__data--textarea-pros" placeholder="良い点"></textarea>
                </td>
                <td className="table__data--value">1</td>
                <td className="table__data--text">
                  <textarea className="table__data--textarea-cons" placeholder="悪い点"></textarea>
                </td>
                <td className="table__data--value">1</td>
              </tr>
              <tr>
                <td className="table__data--text"><textarea className="table__data--textarea-pros" placeholder="良い点"></textarea></td>
                <td className="table__data--value">1</td>
                <td className="table__data--text"><textarea className="table__data--textarea-cons" placeholder="悪い点"></textarea></td>
                <td className="table__data--value">1</td>
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
                  <p>2</p>
                </td>
                <td colSpan="2">
                  <p>2</p>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
  );
}

export default App;
