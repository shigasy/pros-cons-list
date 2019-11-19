import React from 'react'
import Modal from "react-modal";
import Button from "./Button"
import "./ReactModal.css"

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

const ReactModal = (props) => (
    <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
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
      <div className="modal__button--center">
        <Button text="閉じる" clickMotion={props.closeModal}/>
      </div>
    </Modal>
)

export default ReactModal
