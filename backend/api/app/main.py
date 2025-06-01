from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
import sqlite3

from .userLogin import check_user_credentials
from .getStatus import get_user_status
from .updateStatus import register_user_status

app = FastAPI(title="FastAPI B4 Hackaton")

# CORS設定（開発用）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# グローバル変数を使う場合はNoneで初期化
conn = None

# 起動時にDB接続を作成
@app.on_event("startup")
def startup_event():
    global conn
    base_dir = os.path.dirname(os.path.abspath(__file__))
    db_path = os.path.join(base_dir, "db/user.db")
    conn = sqlite3.connect(db_path)
    # SQLiteはデフォルトでスレッドセーフではないので
    # 複数スレッドでアクセスするなら `check_same_thread=False` をつけることも検討

# シャットダウン時にDB接続を閉じる
@app.on_event("shutdown")
def shutdown_event():
    global conn
    if conn:
        conn.close()

# APIエンドポイント
@app.get("/v1")
async def check():
    return {"status": "OK!"}

# login用の関数
@app.post("/login")
async def login(req: Request):
    data = await req.json()
    return check_user_credentials(data, conn)

# status表示用の関数
@app.post("/status")
async def check_status():
    return get_user_status(conn)

# status更新用の関数
@app.post("/status/register")
async def update_status(req: Request):
    data = await req.json()
    return register_user_status(data,conn)

# 静的ファイルの配信
static_dir = os.path.join(os.path.dirname(__file__), "../static")
app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")


