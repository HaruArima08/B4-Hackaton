import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import styles from "./Login.module.css";


type Props = {
    onLoginSuccess: () => void;
};

const Login: React.FC<Props> = ({ onLoginSuccess }) => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:8000/login", {
                name,
                password,
            });
            localStorage.setItem("token", res.data.access_token);
            onLoginSuccess();       // App の state を true に切り替え
            navigate("/"); //トップページに移動させる
        } catch (err) {
            alert("ログイン失敗");
            setPassword(""); // パスワードをクリア
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1 className={styles.title}>ログイン</h1>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>ユーザ名</label>
                    <input
                        type="text"
                        placeholder="ユーザ名を入力"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>パスワード</label>
                    <input
                        type="password"
                        placeholder="パスワードを入力"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>

                <div className={styles.buttonWrapper}>
                    <Button onClick={handleLogin} variant="green">ログイン</Button>
                </div>
            </div>
        </div>
    );
};
export default Login;