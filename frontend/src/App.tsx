import { useState } from 'react';
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import MembersStatus from './components/pages/MembersStatus';
import MembersRegister from './components/pages/MembersRegister';
import { Header } from './components/Header';
import Footer from './components/Footer';

function App() {
  // 認証状態を保持する state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ログイン成功時に呼ばれるコールバック
  const onLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {/* 画面上部に固定されるヘッダー。常に表示しておいて、内部で isLoggedIn に応じてボタンを切り替える */}
      <Header isLoggedIn={isLoggedIn} />
      {/* 各ページのルートを定義 */}
      <div className="pageContent">
        <Routes>
          {/* トップページ */}
          <Route path="/" element={<Home />} />

          {/* ログインページ。未ログイン時のみアクセス可とし、ログイン済みならトップへリダイレクト */}
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLoginSuccess={onLoginSuccess} />
              )
            }
          />

          {/* ステータス表示：ログイン必須。未ログインならログイン画面へリダイレクト */}
          <Route
            path="/MembersStatus"
            element={
              isLoggedIn ? (
                <MembersStatus />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* ステータス登録：同じくログイン必須 */}
          <Route
            path="/MembersRegister"
            element={
              isLoggedIn ? (
                <MembersRegister />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* その他のパスはトップへ戻す（オプション） */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App
