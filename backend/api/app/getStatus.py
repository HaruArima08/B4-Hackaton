from pydantic import BaseModel
from fastapi import HTTPException

import sqlite3
import json

def get_user_status(conn):
    cur = conn.cursor()
    cur.execute(
        """SELECT u.username, u.id AS user_id, s.status AS status_id
        FROM user u
        JOIN status s ON u.id = s.user_id"""
    )
    
    users = cur.fetchall()  # ← すべてのデータを取得


    if users:
        user_dicts = [{"username": u[0], "user_id": u[1], "status_id": u[2]} for u in users]
        return user_dicts
    else:
        raise HTTPException(status_code=404, detail="No user data found")
