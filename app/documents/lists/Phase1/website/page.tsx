{
  /* /documents/lists/Phase1/website  */
}
import React from 'react';
import Image from 'next/image';

import ArticleCard from '@/app/components/lists/ArticleCard';

const all = () => {
  return (
    <main>
      <section className="default-inch text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 title-font mb-2">
              インターネット入門
            </h1>

            <ArticleCard
              section="Part1"
              title="「Hello World!」を出力しよう!"
              description="これから受けるこの講座についてまずは皆様にどのようなことを学ぶのかを確認してもらいます"
              duration="48:32 minutes"
              featuring={['Barry', 'Sandra', 'August']}
              link="#"
            />

            <ArticleCard
              section="Part2"
              title="HTML/CSS入門"
              description="Githubを皆さんのPCでも使っていけるようにセットアップを行なっていきます。"
              duration="48:32 minutes"
              featuring={['Barry', 'Sandra', 'August']}
              link="#"
            />

            <ArticleCard
              section="Part3"
              title="Webサイトを作ろ! その1"
              description="Githubを皆さんのPCでも使っていけるようにセットアップを行なっていきます。"
              duration="48:32 minutes"
              featuring={['Barry', 'Sandra', 'August']}
              link="#"
            />

            <ArticleCard
              section="Part4"
              title="Webサイトを作ろう! その2"
              description="Githubを皆さんのPCでも使っていけるようにセットアップを行なっていきます。"
              duration="48:32 minutes"
              featuring={['Barry', 'Sandra', 'August']}
              link="#"
            />

            <ArticleCard
              section="Part5"
              title="レスポンシブ対応してみよう！"
              description="Githubを皆さんのPCでも使っていけるようにセットアップを行なっていきます。"
              duration="48:32 minutes"
              featuring={['Barry', 'Sandra', 'August']}
              link="#"
            />

            <ArticleCard
              section="Part6"
              title="実践問題"
              description="Githubを皆さんのPCでも使っていけるようにセットアップを行なっていきます。"
              duration="48:32 minutes"
              featuring={['Barry', 'Sandra', 'August']}
              link="#"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default all;
