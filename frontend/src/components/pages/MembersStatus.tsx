import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MembersStatus.module.css";

type MemberStatus = {
    username: string;
    user_id: number;
    status_id: number;
};

const statusMap: Record<number, string> = {
    1: "在室",
    2: "帰宅"
};

const MembersStatus: React.FC = () => {
    const [statuses, setStatuses] = useState<MemberStatus[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchStatuses = async () => {
            try {
                const res = await axios.post("http://localhost:8000/status", {
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
        return <p className={styles.paragraph}>読み込み中...</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>メンバーのステータス一覧</h1>
            {statuses.length === 0 ? (
                <p className={styles.paragraph}>登録されたステータスはありません。</p>
            ) : (
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            <th className={styles.th}>ユーザ名</th>
                            <th className={styles.th}>ステータス</th>
                        </tr>
                    </thead>
                    <tbody>
                        {statuses.map((status, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? styles.evenRow : ""} ${styles.hoverRow}`}
                            >
                                <td className={styles.td}>{status.username}</td>
                                <td className={styles.td}>
                                    <span
                                        className={`${styles.statusBadge} ${styles[`status${status.status_id}`] || styles.statusUnknown
                                            }`}
                                    >
                                        {statusMap[status.status_id] || "不明"}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MembersStatus;
