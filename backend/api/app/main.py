from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from api.app.userLogin import authenticate_user

app = FastAPI(title="FastAPI B4 Hackaton")

# 開発時のみCORSを許可（統合後は不要になる）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# APIエンドポイント
@app.get("/v1")
async def check():
    return {"status": "OK!"}

# login機能用エンドポイント
@app.post("/v1/login")
async def login(req):
    return authenticate_user(req)

# 静的ファイル（React SPA）
static_dir = os.path.join(os.path.dirname(__file__), "../static")
app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")

#React Routerの履歴API
app.mount("/", StaticFiles(directory=static_dir, html=True), name="spa")


