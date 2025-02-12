{/* /documents//lists/Phase1/github/*/}

import React from 'react';
import ArticleCard from '@/app/components/lists/ArticleCard';

const all = () => {
  return (
    <main>
      <section className="default-inch text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 title-font mb-2">ポートフォリオ</h1>

            <ArticleCard
              section="Part1"
              title="ポートフォリオを作ろう！"
              description="ポートフォリオを作るときの考え方やどういうアプリを作っていくべきなのかを解説していきます。"
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