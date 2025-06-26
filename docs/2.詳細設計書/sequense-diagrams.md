# シーケンス図設計（Sequence Diagram）

## 0. 本資料の位置づけ
- 本資料は、Unyte Wallet の主要な機能における処理の時系列的な流れ（システム間通信、ユーザー操作）を可視化するためのものです。
- バックエンド・フロントエンド・外部連携・ユーザー操作の整合性を担保します。

---

## 1. ログイン処理（LINE/Firebase）シーケンス図

```mermaid
sequenceDiagram
  participant User
  participant LINE
  participant Firebase
  participant FE as Frontend
  participant BE as Backend API

  User->>LINE: LINEログイン開始
  LINE-->>User: IDトークンを返却
  User->>FE: トークンを渡す
  FE->>Firebase: トークンでサインイン
  Firebase-->>FE: Firebaseユーザー情報
  FE->>BE: /auth/login (idToken)
  BE->>Firebase: トークン検証
  Firebase-->>BE: UID, email 等
  BE->>BE: DBからユーザー取得/作成
  BE-->>FE: JWT + ユーザーデータ返却
```

---

## 2. トランザクション提案シーケンス図（Gnosis Safe連携）

```mermaid
sequenceDiagram
  participant User
  participant FE as Frontend
  participant BE as Backend
  participant GS as Gnosis Safe API
  participant DB as PostgreSQL

  User->>FE: 提案内容入力（宛先、金額等）
  FE->>BE: POST /tx/propose
  BE->>GS: Gnosis Safe APIで提案作成
  GS-->>BE: 提案ID, status
  BE->>DB: 提案情報保存
  BE->>Notification: 通知送信 (SendGrid, FCM)
  BE-->>FE: 提案完了レスポンス
```

---

## 3. 提案への署名処理シーケンス図（Cubist Enclave）

```mermaid
sequenceDiagram
  participant Signer
  participant FE as Frontend
  participant BE as Backend
  participant Enclave as Cubist Nitro Enclave
  participant DB as Database

  Signer->>FE: 提案承認ボタン押下
  FE->>BE: POST /tx/sign
  BE->>DB: 提案情報取得（提案ID）
  BE->>Enclave: 署名リクエスト（署名対象Txデータ）
  Enclave-->>BE: BLS署名結果
  BE->>DB: 署名履歴保存
  BE->>GS: Gnosis Safeへ署名反映
  GS-->>BE: status: signed
  BE-->>FE: 署名完了レスポンス
```

---

## 4. エラー発生時フロー例（残高取得失敗）

```mermaid
sequenceDiagram
  participant User
  participant FE as Frontend
  participant BE as Backend
  participant EVM as Ethereum RPC

  User->>FE: ホーム画面表示
  FE->>BE: GET /balance/:address
  BE->>EVM: balanceOf コントラクト呼び出し
  EVM-->>BE: Error（コントラクト例外）
  BE-->>FE: 500 エラー応答
  FE->>User: 「残高取得に失敗しました」表示
```

---

## 5. 今後追加予定のシーケンス図

| タイトル | 対応機能 | 状態 |
|----------|----------|------|
| 提案のキャンセル | F03 | 未作成 |
| マルチチェーン残高取得 | F02 | 設計中 |
| Admin操作ログの記録 | 内部運用 | 設計中 |

---

## 6. 関連資料

- [function-design.md](../basic/function-design.md)
- [api-specs](./api-specs)
- [architecture.md](../basic/architecture.md)
