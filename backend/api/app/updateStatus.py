from fastapi import HTTPException

def register_user_status(data: dict, conn):
    user_id = data.get("user_id")
    status_id = data.get("status_id")

    # 引数チェック
    if user_id is None:
        raise HTTPException(status_code=400, detail="user_id is required")

    if status_id is None:
        raise HTTPException(status_code=400, detail="status_id is required")

    cur = conn.cursor()

    # user_id が user テーブルに存在するかチェック
    cur.execute("SELECT * FROM user WHERE id = ?", (user_id,))
    user = cur.fetchone()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # status_id が status_listテーブルに存在するかチェック
    cur.execute("SELECT 1 FROM status_list WHERE status_id = ?", (status_id,))
    result = cur.fetchone()
    if result is None:
        raise HTTPException(status_code=400, detail="Invalid status_id")

    # user の status_id を更新
    cur.execute("UPDATE status SET status = ? WHERE user_id = ?", (status_id, user_id))
    conn.commit()

    return {"message": "User status updated successfully"}