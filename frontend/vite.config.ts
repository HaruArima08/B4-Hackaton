/**
 * @file vite.config.ts
 * @brief vite.config.tsの設定
 * @author HaruArima08
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 8502,
    /**
     * 開発時のみ /v1 配下を FastAPI へプロキシ
     * 本番環境では統合するため不要
     */
    proxy: {
      '/v1': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, '/v1'),
      },
    },
  },
  build: {
    /**
     * バックエンド配下にfrontendのビルド成果物を直接入力
     * docker build時点で静的ファイルを取り込めるようになる
     */
    outDir: '../backend/api/static',
    emptyOutDir: true,
  },
})
