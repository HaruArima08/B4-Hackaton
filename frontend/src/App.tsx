import React from 'react'
import axios from "axios"
import './App.css'

// APIレスポンスの型を定義
type ApiResponse = {
  status: string;
}

function App() {
  const [data, setData] = React.useState<ApiResponse | null>(null);
  const url = "/v1"

  const GetData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      <div>処理をここに書いていく</div>
      {data ? <div>{data.status}</div> : <button onClick={GetData}>データを取得</button>}
    </div>
  )
}

export default App
