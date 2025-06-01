import '../../App.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../Button";


const MembersRegister: React.FC = () => {
    const [statusId, setStatusId] = useState<number | null>(null);
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
    const handleSubmit = async () => {
        if (statusId === null) {
            alert("ステータスを選択してください");
            return;
        }

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
            alert("ステータスを登録しました！");
            // navigate("/MembersStatus"); // ステータス一覧ページなどへ遷移
        } catch (err) {
            alert("ステータス登録に失敗しました");
            console.error(err);
        }
    };

    return (
        <div>
            <h1>ステータス登録</h1>
            <div>
                <label>
                    <input
                        type="radio"
                        value={0}
                        checked={statusId === 1}
                        onChange={() => setStatusId(1)}
                    />
                    在室
                </label>
                <label style={{ marginLeft: "1rem" }}>
                    <input
                        type="radio"
                        value={1}
                        checked={statusId === 2}
                        onChange={() => setStatusId(2)}
                    />
                    帰宅
                </label>
            </div>
            <br />
            <Button onClick={handleSubmit} variant="green">
                ステータスを登録
            </Button>
        </div>
    );
};
export default MembersRegister