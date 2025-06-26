# パッケージのインストール
```bash
pnpm i
```

# 環境変数の設定
下記コマンドを実行して.envファイルを作成してください。
```bash
cp .env.example .env
```

# openAPIの出力
buildコマンドを実行すると、`backend/openapi.yaml`にopenapiのyamlファイルが出力されます。
```bash
pnpm run build
```

# サーバーの起動
```bash
pnpm run start
```

# logについて
winstonを使用しており、`ENVIRONMENT=development`の場合はデフォルトで`backend/logs/development.log`にlogが出力されます。
winstonのログの出力先のオプションとしてdiscordへのwebhookでの出力と、notionへの出力があります。
それぞれについては環境変数で設定を行ってください。
- `WINSTON_DISCORD_WEBHOOK_URL`
- `WINSTON_NOTION_DB_ID`
- `WINSTON_NOTION_SECRET`

winstonで出力されるログにはリクエスト単位でユニークな`requestId`が付与されるので、同一リクエストで出力されたログは`requestId`で検索が可能です。

