# データベース設計書（DB Schema Design）

## 0. 本資料の位置づけ
- 本資料は、Unyte Wallet における主要データ構造（テーブル／コレクション）を定義するものです。
- バックエンド実装、APIレスポンス、データ移行、運用保守における基準とします。

---

## 1. 使用DBと構成方針

| 項目         | 内容                         |
|--------------|------------------------------|
| RDBMS        | PostgreSQL (via RDS)         |
| ORM          | Prisma ORM                   |
| データ構成方針 | 正規化ベース、一部Embedあり   |
| バージョニング | Prisma migration による管理   |
| 論理削除     | `deletedAt` によるソフトデリート |

---

## 2. テーブル一覧（Entity Summary）

| テーブル名 | 説明               | 主キー     | 関連              |
|------------|--------------------|------------|-------------------|
| users      | ユーザー情報       | id (string) | ← share, signature |
| shares     | マルチシグ共有情報 | id (string) | → user             |
| proposals  | トランザクション提案 | id (string) | ← user, signatures |
| signatures | 提案の署名記録     | id (string) | → proposal, user   |

---

## 3. テーブル詳細

---

### 3.1 `users` テーブル

| カラム名        | 型       | Null許容 | 説明                       |
|----------------|----------|-----------|----------------------------|
| id             | string   | ❌        | Firebase UID               |
| address        | string   | ❌        | EVMアドレス（unique）     |
| email          | string   | ❌        | ログインEmail（unique）   |
| name           | string   | ○         | 任意表示名                |
| emailVerified  | boolean  | ❌        | 認証完了フラグ            |
| pushNotification | boolean | ❌        | プッシュ通知ON/OFF        |
| emailNotification | boolean | ❌      | メール通知ON/OFF          |
| createdAt      | DateTime | ❌        | 作成日時（自動）          |
| updatedAt      | DateTime | ❌        | 更新日時（自動）          |

* 

**制約**：
- `address`, `email` はUNIQUE
- Firebase Authと連携されている前提

---

### 3.2 `boards` テーブル

| カラム名     | 型       | Null許容 | 説明                     |
|-------------|----------|----------|--------------------------|
| id          | string   | ❌       | ULID形式                 |
| creatorId   | string   | ❌       | 提案者の `users.id` 外部キー |
| to          | string   | ❌       | 宛先EVMアドレス           |
| token       | string   | ❌       | トークン（例：ETH, USDT）|
| value       | string   | ❌       | 金額（Decimal文字列）     |
| description | string   | ○        | 任意説明文               |
| status      | string   | ❌       | `proposed`, `signed`, etc |
| createdAt   | DateTime | ❌       | 作成日時                 |

**インデックス**：
- `creatorId`, `status`, `createdAt`

---

### 3.3 `threads` テーブル

| カラム名      | 型     | Null許容 | 説明                         |
|---------------|--------|----------|------------------------------|
| id            | string | ❌       | ULID形式                     |
| proposalId    | string | ❌       | `proposals.id` 外部キー      |
| signerId      | string | ❌       | `users.id` 外部キー          |
| signatureData | string | ❌       | 署名の内容（Base64など）     |
| signedAt      | DateTime | ❌     | 署名した日時                 |

**制約**：
- `(proposalId, signerId)` の組み合わせはユニーク

### 3.3 `comments` テーブル

| カラム名      | 型     | Null許容 | 説明                         |
|---------------|--------|----------|------------------------------|
| id            | string | ❌       | ULID形式                     |
| proposalId    | string | ❌       | `proposals.id` 外部キー      |
| signerId      | string | ❌       | `users.id` 外部キー          |
| signatureData | string | ❌       | 署名の内容（Base64など）     |
| signedAt      | DateTime | ❌     | 署名した日時                 |

**制約**：
- `(proposalId, signerId)` の組み合わせはユニーク

---

## 4. リレーション図（ER図）

※ `prisma-erd-generator` で `ERD.md` を生成 or draw.io 形式の画像を添付

例（簡略表記）：

```
users └──< shares └──< proposals └──< signatures
```


---

## 5. ENUM定義（Prismaなど）

```ts
enum ProposalStatus {
  PROPOSED
  SIGNING
  EXECUTED
  FAILED
}
```

---

## 6. 備考・検討中事項

- signatures に署名方式（ECDSA, BLSなど）を持たせる必要あり？
- 提案に対するキャンセル／拒否など状態追加の余地あり
- NFT対応時は tokenId などを proposals に追加

---

## 7. 関連資料

- [api-specs](./api-specs)
- [function-design.md](../basic/function-design.md)
