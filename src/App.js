import React, {useState} from 'react';

import './App.css';
import './components/Table.css'
import './components/Button.css'

import AddTableButton from './components/AddTableButton'
import Table from './components/Table'
import ReactModal from './components/ReactModal'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [tableNum, setTableNum] = useState([1])

  const addTable = () => {
    setTableNum([...tableNum, 1])
  }

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
            <a onClick={openModal} className="App-description__button--how-to-use">使いかた</a>
            <ReactModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
          </div>
        </section>
        <section className="contents">
          <div className="contents__container">
            {tableNum.map((table, i) => {
              return <Table key={i} />
            })}
          </div>
          <AddTableButton onClick={addTable} />
          <p></p>
        </section>
      </div>
  );
}

export default App;
