# 研究室入退室管理アプリ：B4Hackaton

##  セットアップ手順

###  バックエンド (FastAPI)

1. Python仮想環境を作成・有効化

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
```

2. 依存パッケージのインストール
```bash
pip install fastapi uvicorn sqlalchemy
```

3. サーバー起動
```bash
uvicorn api.app.main:app --reload (docker-compose up)
```

### フロントエンド（React）

1.node.js(18系)、npmの導入(Ubuntu22.04)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

2.インストール
```bash
sudo apt-get install -y nodejs
```

3. インストール確認
```bash
node -v
```
```bash
npm -v
```

4. セットアップ
```bash
cd frontend
npm install
```
5. 開発サーバ起動
```bash
npm run dev
```
デフォルトポート: `http://localhost:8502`

### デプロイ

フロントエンド
```
npm run build
```

バックエンド
```
docker compose build
docker compose up -d
```








