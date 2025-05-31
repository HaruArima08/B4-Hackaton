from pydantic import BaseModel
from fastapi import HTTPException
import sqlite3

dbname = 'api/app/db/user.db'

def check_user_credentials(data: dict):
    username = data.get("username")
    password = data.get("password")

    
    conn = sqlite3.connect(dbname)
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

