import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

// PrismaClientのインスタンス作成
const client = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = client
}

export default client

/**
上記処理の解説について

- declare global: 
グローバルスコープに変数を宣言します。ここでは、prisma という変数をグローバルに宣言しています。
var prisma: PrismaClient | undefined: prisma 変数は PrismaClient のインスタンスか、未定義である可能性があります。

- const client = globalThis.prisma || new PrismaClient()
globalThis.prisma: グローバルスコープに存在する prisma 変数を参照します。もし既に prisma インスタンスが存在する場合、それを使用します。
new PrismaClient(): 新しい PrismaClient のインスタンスを作成します。
もし globalThis.prisma が未定義の場合、新しいインスタンスを作成して client に代入します。

- if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = client
}
  process.env.NODE_ENV: Node.jsの環境変数を参照します。通常、development、production、test などの値を持ちます。
if (process.env.NODE_ENV !== 'production'): 環境が production でない場合、以下の処理を実行します。
globalThis.prisma = client: グローバルスコープに prisma 変数を設定します。これにより、開発環境やテスト環境で PrismaClient のインスタンスが再利用されます。


- インスタンスとは
ここでいう「インスタンス」は、
「変数」とは異なる意味を持ちます。
具体的には、PrismaClient クラスのインスタンスを指します。
 */
