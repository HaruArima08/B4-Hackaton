import sqlite3
import csv

# SQLiteに接続
conn = sqlite3.connect('user.db')  # ← データベース名に合わせて変更
cursor = conn.cursor()

# CSVファイルからデータを読み込んで挿入
with open('dummy.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        cursor.execute('''
            INSERT INTO status (user_id, status)
            VALUES (?, ?)
        ''', (int(row['user_id']), int(row['status'])))

# 保存して終了
conn.commit()
conn.close()
