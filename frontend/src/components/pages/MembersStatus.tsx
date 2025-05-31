import React, { useEffect, useState } from "react";
import axios from "axios";

type MemberStatus = {
    username: string; //ユーザ名
    user_id: number; //ユーザID
    status_id: number; //状態表示（0:在室, 1:帰宅）
};

const MembersStatus: React.FC = () => {
    const [statuses, setStatuses] = useState<MemberStatus[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const res = await axios.get("http://localhost:8000/status", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setStatuses(res.data);
            } catch (err) {
                alert("ステータスの取得に失敗しました");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStatuses();
    }, [token]);

    if (loading) {
        return <p>読み込み中...</p>;
    }

    return (
        <div>
            <h1>メンバーのステータス一覧</h1>
            {statuses.length === 0 ? (
                <p>登録されたステータスはありません。</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ユーザ名</th>
                            <th>ユーザID</th>
                            <th>ステータス</th>
                        </tr>
                    </thead>
                    <tbody>
                        {statuses.map((status, index) => (
                            <tr key={index}>
                                <td>{status.username}</td>
                                <td>{status.user_id}</td>
                                <td>{status.status_id === 0 ? "在室" : "帰宅"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MembersStatus;
