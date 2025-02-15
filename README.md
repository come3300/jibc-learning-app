# 教材システム

## EslintとPrettierの使い方

- 自動整形方法
  - VScodeの自動保存機能で自動整形できる
- 手動でフォーマットやlintを実行する
  - コードのフォーマット: yarn format
    - 指定したファイルのみ整形: `yarn prettier --write app/components/button/Button.tsx`
  - コードのリント: yarn lint

## 参考

- Next.jsとPrismaで構築する認証システム(メールアドレス、Google認証)
  - https://zenn.dev/hathle/books/next-prisma-auth-book
