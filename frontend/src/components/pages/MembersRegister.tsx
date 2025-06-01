// import '../../App.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./MembersRegister.module.css";
import { Button } from "../Button";

const MembersRegister: React.FC = () => {
    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(Number(storedUserId));
        } else {
            alert("ユーザー情報が見つかりません");
        }
    }, []);

    // ステータスの送信
    const handleSubmit = async (statusId: number) => {
        if (userId === null) {
            alert("ユーザーIDが見つかりません。ログインしてください。");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:8000/status/register", // 適切なエンドポイントに変更
                {
                    status_id: statusId,
                    user_id: userId
                });
            const statusLabel = statusId === 1 ? "在室" : "帰宅";
            alert(`${statusLabel}を登録しました！`);
        } catch (err) {
            alert("ステータス登録に失敗しました");
            console.error(err);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.buttonGroup}>
                <Button onClick={() => handleSubmit(1)} variant="green" className={styles.largeButton}>
                    在室
                </Button>
                <Button onClick={() => handleSubmit(2)} variant="red" className={styles.largeButton}>
                    帰宅
                </Button>
            </div>
        </div >
    );
};
export default MembersRegister