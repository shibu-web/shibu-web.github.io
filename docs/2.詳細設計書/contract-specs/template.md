# 名称

## 1. 目的

contractの目的

## 2. 転送・売買

可否

## 3. 採用インターフェース

- ERC165
- ERC1155
- ERC1155metadata

## 4. 独自実装

### Function

```jsx
function mint(
    bytes32 communityIdHash,
    address to,
    uint256 tokenId,
    uint256 amount
)
```

### Event

```jsx
minted(
    indexed bytes32 communityIdHash,
    indexed address newOwner,
    indexed uint256 tokenId,
    uint256 amount
)
```

```jsx
burned(
    indexed bytes32 communityIdHash,
    indexed address currentOwner,
    indexed uint256 tokenId,
    uint256 amount
)
```

## 5. 事前条件

- communityIdはindexed設定を行う為にHash化
- Event取得時にはHashでフィルタ/比較を行うこと

## 6. 制約条件

- 売買・転送不可

## 7. 特記事項

- コミュニティIDはハッシュ化して保存する
- コミュニティIDはハッシュ化して保存する
- コミュニティIDはハッシュ化して保存する
- コミュニティIDはハッシュ化して保存する
- コミュニティIDはハッシュ化して保存する
- コミュニティIDはハッシュ化して保存する
