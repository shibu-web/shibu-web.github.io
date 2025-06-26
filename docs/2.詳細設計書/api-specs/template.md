# 名称

## 1. 機能

（APIが何をするのかを記述）

## 2. 正常系フロー

1. ユーザーがAPIを呼び出す
2. APIがリクエストを受け取る
3. APIがリクエストを処理する
4. APIがレスポンスを返す
5. ユーザーがレスポンスを受け取る

## 3. パス

（APIのPATHを記述）

## 4. メソッド

GET | POST | PUT | PATCH | DELETE

## 5. ヘッダ

```json
{
  "Content-Type": "application/json"
}
```

## 6. リクエスト

```json
{
  "name": "John",
  "age": 30
}
```

### バリデーション

- name: 30文字以内
- age: 100以下

## 7. レスポンス

```json
{
  "message": "Hello, World!"
}
```

## 8. エラーコード

- 400 Bad Request
- 401 Unauthorized
- 429 Too Many Requests
- 500 Internal Server Error
- 502 Bad Gateway
- 503 Service Unavailable
- 504 Gateway Timeout

## 9. セキュリティ要件

（APIのセキュリティに関する要件を記述）

- **認証**

（認証方法を記述）

- **認可**

（認可の詳細を記述）

## 10. 利用制限

（APIの利用制限について記述）

## 11. 特記事項

(その他必要な確認事項を記述)

## 12. 承認

(要エビデンス)

- [ ] 承認者
- [ ] 承認者
- [ ] 承認者
