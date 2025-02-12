{/* /documents//lists/Phase1/github/*/}

import React from 'react';
import ArticleCard from '@/app/components/lists/ArticleCard';

const all = () => {
  return (
    <main>
      <section className="default-inch text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 title-font mb-2">php実践</h1>

            <ArticleCard
              section="Section1"
              title="Git Hubとは"
              description="これから受けるこの講座についてまずは皆様にどのようなことを学ぶのかを確認してもらいます。"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Section2"
              title="Git Hubのセットアップをしよう!"
              description="6ヶ月間の受講をして頂く前に、プログラミングを学ぶ上での挫折しないための考え方、効率よく"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Section3"
              title="Git Hubの基本コマンド"
              description="これからプログラミングを学ぶ上で必要なツール、ソフトウェアをインストールしていきます。"
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