from pydantic import BaseModel
import sqlite3

dbname = 'db/user.db'

class LoginRequest(BaseModel):
    username: str
    password: str

def check_user_credentials(req: LoginRequest):

    conn = sqlite3.connect(dbname)
    cur = conn.cursor()

    cur.execute("SELECT * FROM user WHERE username=? AND password=?", (req.username, req.password))
    user = cur.fetchone() #検索結果のうち、最初の1件だけを取得
    conn.close()

    if user:
        return {"message": "Login successful"}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

result = check_user_credentials(LoginRequest(username="miyadai_mokun", password="miyadaimo"))
print(result)

