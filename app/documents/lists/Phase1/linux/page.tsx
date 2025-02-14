{
  /* /documents/lists/Phase1/Linux */
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
              Linux入門
            </h1>

            <ArticleCard
              section="Part1"
              title="Linuxとは"
              description="説明:Linuxって何ができて、どんな特徴がなるのかを解説していきます。"
              duration="48:32 minutes"
              featuring={['Barry', 'Sandra', 'August']}
              link="#"
            />

            <ArticleCard
              section="Part2"
              title="覚えておきたい基礎コマンド"
              description="Linuxの使い方を実際にアウトプットしながら基礎コマンドを理解していきましょう!"
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
