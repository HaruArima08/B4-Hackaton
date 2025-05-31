from pydantic import BaseModel
from fastapi import HTTPException
import sqlite3
import os

base_dir = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(base_dir, "db/user.db")

def check_user_credentials(data: dict):
    username = data.get("name")
    password = data.get("password")

    print(username)
    print(password)


    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    cur.execute("SELECT * FROM user WHERE username=? AND password=?", (username, password))
    user = cur.fetchone() #検索結果のうち、最初の1件だけを取得
    conn.close()

    if user:
        return {"message": "Login successful"}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

# result = check_user_credentials(LoginRequest(username="miyadai_mokun", password="miyadaimo"))
# print(result)

