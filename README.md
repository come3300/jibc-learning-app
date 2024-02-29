# ログイン機能付きMDXで記事が書けるNext.js環境　Approuter使用

## Next.jsとPrismaで構築する認証システム(メールアドレス、Google認証)

https://zenn.dev/hathle/books/next-prisma-auth-book


### 導入技術

#### ログイン機能 Next.js Prisma メールアドレス,Google認証　

参考記事
https://zenn.dev/hathle/books/next-prisma-auth-book/viewer/11_login

Github ソースコード
https://github.com/haruyasu/nextjs-prisma-auth-tutorial

AppRouter
画像保存はCloudinaryを使用
データベースPostreSQL

#### MDXでの記事も書ける

参考記事
https://zenn.dev/hayato94087/articles/1411f7af3eaee4#%E7%9B%AE%E6%AC%A1%E3%81%AE%E8%BF%BD%E5%8A%A0

| 技術                  | 説明                                             |
|-----------------------|--------------------------------------------------|
| Next.js App Router    | Next.js フレームワーク。今回はApp Routerを利用   |
| @next/mdx             | Next.jsでMDXを使えるようにする                 |
| TailwindCSS           | HTMLのスタイリングに利用                         |
| remark-gfm            | MDXでGitHub Flavored Markdownを利用できるようにするremarkプラグイン  |
| remark-math           | MDXでTeXを利用できるようにするremarkプラグイン |
| rehype-katex          | MDXでTeXを利用できるようにするrehypeプラグイン |
| @mapbox/rehype-prism  | MDXでコードブロックのシンタックスをハイライト（色付け）できるようにするrehypeプラグイン |
| rehype-slug           | MDXで目次を作成するためにheadingにidを付与するrehypeプラグイン |
| remark-toc            | MDXで目次を作成するるremarkププラグイン         |
| remark-breaks         | MDXで改行をサポートするremarkプラグイン         |

#### 注意点

なお、.envとそれに紐づく設定は自身で再編集が必要

DATABASE_URL=再設定が必要

 DATABASE_URL=再設定が必要

NEXTAUTH_SECRET=再設定が必要
NEXTAUTH_URL=再設定が必要

GOOGLE_CLIENT_ID=再設定が必要
GOOGLE_CLIENT_SECRET=再設定が必要

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=再設定が必要
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=再設定が必要






