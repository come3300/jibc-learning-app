{/* /documents//lists/Phase1/github/*/}

import React from 'react';
import ArticleCard from '@/app/components/lists/ArticleCard';

const all = () => {
  return (
    <main>
      <section className="default-inch text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 title-font mb-2">git Hub 入門</h1>

            <ArticleCard
              section="Part1"
              title="就職の心得/マインドセット"
              description="就職、転職時に必要な考え方を学んでいきます"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part2"
              title="チェックリスト"
              description="就活、転職活動前にチェックしておきたいチェックリスト"
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