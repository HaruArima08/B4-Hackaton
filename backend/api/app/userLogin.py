from fastapi import HTTPException

def check_user_credentials(data: dict, conn):
    username = data.get("name")
    password = data.get("password")

    cur = conn.cursor()
    cur.execute("SELECT * FROM user WHERE username=? AND password=?", (username, password))
    user = cur.fetchone() #検索結果のうち、最初の1件だけを取得

    if user:
        return {
            "message": "Login successful",
            "user_id": user[0],
            "username": user[1]
        }
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

# result = check_user_credentials(LoginRequest(username="miyadai_mokun", password="miyadaimo"))
# print(result)

