{/* /documents/phase1/github/all */}
import Image from 'next/image'

import React from 'react';
import ArticleCard from '@/app/components/lists/ArticleCard';

const all = () => {
  return (
    <main>
      <section className="default-inch text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 title-font mb-2">インターネット入門</h1>

            <ArticleCard
              section="Part1"
              title="インターネットの仕組み"
              description="これから受けるこの講座についてまずは皆様にどのようなことを学ぶのかを確認してもらいます"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part2"
              title="サーバーの仕組み"
              description="Githubを皆さんのPCでも使っていけるようにセットアップを行なっていきます。"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default all;