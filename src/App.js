import React from 'react';
import './App.css';
import './components/Table.css'

function App() {
  return (
      <div className="App">
        <section className="App-description">
          <h1 className="App-description__title">良い点、悪い点リスト</h1>
          <div className="App-description__sub-content">
            <h2 className="App-description__sub-description">考えられる様々な選択肢について、</h2>
            <button className="App-description__button--sample">サンプル</button>
            <button className="App-description__button--how-to-use">使い方</button>
          </div>
        </section>
        <section className="content">
          <div className="content__container">
            <table align="center" border={1} className="table">
              <caption className="table__caption">
                <p className="table__title">タイトル1</p>
              </caption>
              <tbody className="table__body">
              <tr className="table__header">
                <th className="table__header--pros" colSpan="2">良い点</th>
                <th className="table__header--cons" colSpan="2">悪い点</th>
              </tr>
              <tr>
                <td className="table_data_text">てすとてすとてすとてすと</td>
                <td className="table_data_value"><span>★★★</span></td>
                <td>てすおてすとてすとてｓつおてすおてすとてすとてｓつお</td>
                <td><span>★★★</span></td>
              </tr>
              <tr>
                <td>てすとてすとてすとてすと</td>
                <td><span>★★★</span></td>
                <td>てすおてすとてすとてｓつおてすおてすとてすとてｓつお</td>
                <td><span>★★★</span></td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button>＋</button>
                </td>
                <td colSpan="2">
                  <button>＋</button>
                </td>
              </tr>
              </tbody>
            </table>
            <table align="center" border={1} className="table">
              <caption className="table__caption">
                <p className="table__title">タイトル1</p>
              </caption>
              <tbody>
              <tr>
                <th>良い点</th>
                <th>悪い点</th>
              </tr>
              <tr>
                <td>TD <span>★★★</span></td>
                <td>TD <span>★★★</span></td>
              </tr>
              <tr>
                <td>TD <span>★★★</span></td>
                <td>TD <span>★★★</span></td>
              </tr>
              <tr>
                <td>
                  <div>＋</div>
                </td>
                <td>
                  <div>＋</div>
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
