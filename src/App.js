import React, {useState} from 'react';
import Modal from 'react-modal';

import './App.css';
import './components/Table.css'
import './components/Button.css'

import AddButton from './components/AddButton'
import AddTableButton from './components/AddTableButton'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const customStyles = {
    content : {
      overflow: 'hidden',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };

  function openModal() {
    document.body.style.overflow = 'hidden'; // 背景のスクロール無効にするため
    setModalIsOpen(true)
  }

  function closeModal() {
    document.body.style.overflow = '';
    setModalIsOpen(false)
  }

  return (
      <div className="App">
        <section className="App-description">
          <div className="App-description__title-section">
            <img src="pros_cons_title_icon1200.png" className="App-description__title"></img>
          </div>
          <div className="App-description__sub-content">
            <a className="App-description__button--sample">サンプル</a>
            <a onClick={openModal} className="App-description__button--how-to-use">使いかた</a>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
              <h2>使い方</h2>
              <p>様々な選択肢について、それぞれ<strong>良い点、悪い点</strong>を洗い出し、間違えずに意思決定をすることが出来るフレームワークです。</p>
              <p>プロコン(pros cons)リストとも呼ばれます。</p>
              <ol>
                <li>選択肢を洗い出します。</li>
                <li>それぞれの選択肢に良い点、悪い点を洗い出します。</li>
                <li>洗い出した良い点、悪い点について重要だと思うものに評価値をつけていきます。</li>
              </ol>
              <p>選択肢の合計点を比較しましょう！</p>
            </Modal>
          </div>
        </section>
        <section className="contents">
          <div className="contents__container">
            <table align="center" border={1} className="table">
              <caption className="table__caption">
                <div className="table__title">
                  <label className="ef">
                    <input type="text" placeholder="タイトル1"></input>
                  </label>
                </div>
              </caption>
              <tbody className="table__body">
              <tr className="table__header">
                <th className="table__header--pros" colSpan="2">良い点</th>
                <th className="table__header--cons" colSpan="2">悪い点</th>
              </tr>
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
            <table align="center" border={1} className="table">
              <caption className="table__caption">
                <div className="table__title">
                  <label className="ef">
                    <input type="text" placeholder="タイトル2"></input>
                  </label>
                </div>
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
          </div>
          <AddTableButton />
          <p></p>
        </section>
      </div>
  );
}

export default App;
