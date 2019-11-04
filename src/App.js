import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>良い点、悪い点リスト</h1>
      <div>
        <h2>考えられる様々な選択肢について、</h2>
      <table align="center">
        <tbody>
        <tr>
          <th>良い点</th>
          <th>悪い点</th>
        </tr>
        <tr>
          <td>TD　　<span>★★★</span></td>
          <td>TD　　<span>★★★</span></td>
        </tr>
        <tr>
          <td>TD　　<span>★★★</span></td>
          <td>TD　　<span>★★★</span></td>
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
