# アーキテクチャ設計書（Architecture Design）

## 0. 本資料の位置づけ
- 本資料は、Unyte Walletのアーキテクチャ構成・技術選定の方針と背景を明示するものです。
- インフラ設計、可用性、スケーラビリティ、セキュリティ観点も含みます。

---

## 1. 全体構成図（Logical Architecture）

![architecture diagram](./images/yjsp.jpeg)

---

## 2. 利用技術スタック一覧

| レイヤ | 技術スタック | 主な役割 |
|--------|--------------|-----------|
| フロントエンド | React + Vite + Firebase Hosting | SPA構成、PWA対応 |
| バックエンド | NestJS (Node.js) | REST API構築、Lambda化 |
| インフラ | AWS（Lambda, API Gateway, RDS, S3, CloudWatch） | Serverless構成 |
| 認証 | Firebase Auth (LINE/OIDC) | ソーシャルログイン連携 |
| ウォレット署名 | Cubist Nitro Enclave | 安全な署名処理（BLS対応） |
| 通知 | SendGrid + FCM | メール & プッシュ通知 |

---

## 3. クラウド構成（Infrastructure Architecture）

### 3.1 ネットワーク構成
- VPC, Public/Private Subnet は未使用（Serverless構成）
- EC2でNitro Enclaveを稼働（IAM Role制限あり）

### 3.2 デプロイ方式
- GitHub Actions + Terraform によるIaC自動化
- 開発/本番環境のCI/CDを分離（環境変数で切替）

### 3.3 リソース管理
- Lambda: 機能ごとに関数を分割
- PostgreSQL: パーティショニングは不要（初期設計時）

---

## 4. 可用性設計

| 項目 | 内容 |
|------|------|
| 冗長構成 | Lambda / API Gateway / RDS はマルチAZ対応 |
| 障害時対応 | CloudWatch Logs + Slack通知 + PagerDuty連携（予定） |
| バックアップ | RDS自動バックアップ、S3定期スナップショット（30日） |

---

## 5. セキュリティ設計

| 項目 | 内容 |
|------|------|
| 認証 | Firebase AuthによるIDトークン認証 |
| データ暗号化 | RDS / S3 / Nitro Enclave内部で暗号化保持 |
| 通信 | HTTPS, CORS制御（Origin Allowlist） |
| 権限 | IAM最小権限構成（Lambda, RDS, EC2） |
| 隔離 | Enclaveと通常Lambdaを明確に分離（署名のみEnclave） |

---

## 6. スケーラビリティと運用性

- Lambdaのオートスケーリングで初期負荷は吸収可能
- RDSはAuroraへの移行を将来的に検討
- Nitro Enclave台数増加による並列署名拡張も可能

---

## 7. 技術選定理由と比較

| 技術カテゴリ | 採用技術 | 比較候補 | 採用理由 |
|--------------|----------|-----------|-----------|
| 認証 | Firebase Auth | Auth0, Cognito | LINE対応が容易、PaaSの簡便さ |
| インフラ | Serverless (Lambda) | Fargate, EC2 | 初期運用コストと保守性 |
| 秘密鍵管理 | Cubist Enclave | Web3Auth, MPC | 機密性の高さと署名分離が可能 |

---

## 8. 今後の拡張方針
- マルチチェーン対応（現状Polygon, Ethereum）
- Admin画面のアクセス制御（SAML, IP制限）
- 外部監査対応・SOC2の準備（SaaS化に向けて）

---

## 9. 関連資料
- [system-overview.md](./system-overview.md)
- [function-design](./function-design)
- [non-functional-requirements.md](../requirements/non-functional-requirements.md)
