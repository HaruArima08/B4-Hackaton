from pydantic import BaseModel
import sqlite3

dbname = ''

class LoginRequest(BaseModel):
    username: str
    password: str

def authenticate_user(req: LoginRequest):

    conn = sqlite3.connect(dbname)
    cur = conn.cursor()

    cur.execute("SELECT * FROM users WHERE username=? AND password=?", (req.username, req.password))
    user = cur.fetchone() #検索結果のうち、最初の1件だけを取得
    conn.close()

    if user:
        return {"message": "Login successful"}
    else:
        return {"message": "Invalid credentials"}
