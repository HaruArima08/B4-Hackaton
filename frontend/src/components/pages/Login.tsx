import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Button } from "../Button";
const LoginForm: React.FC = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:8000/login", {
                name,
                password,
            });
            localStorage.setItem("token", res.data.access_token);
            alert("ログイン成功！");
            // Navigate("/"); //status表示に移動させる
        } catch (err) {
            alert("ログイン失敗");
            setPassword(""); // パスワードをクリア
        }
    };
    return (
        <div>
            <h1>ログイン</h1>
            <input
                type="name"
                placeholder="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            {/* <button onClick={handleLogin}>ログイン</button> */}
            <Button onClck={handleLogin} variant="green">ログイン</Button>
        </div>
    );
};
export default LoginForm;