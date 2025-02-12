{/* /documents//lists/Phase1/github/*/}

import React from 'react';
import ArticleCard from '@/app/components/lists/ArticleCard';

const all = () => {
  return (
    <main>
      <section className="default-inch text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 title-font mb-2">JavaScript基礎</h1>

            <ArticleCard
              section="Part1"
              title="JavaScriptとは"
              description="JavaScriptって何ができて、どんな特徴がなるのかを解説していきます"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part2"
              title="JavaScriptの仕組み"
              description="JavaScriptがどのように動いているのか、仕組みについて理解していきましょう!"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part3"
              title="変数とは"
              description="プログラミング言語を学ぶ上でとても大切な「変数」という概念についてJavaScriptを用いて理解していきます"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part4"
              title="基礎構文について"
              description="if文やfor文の使い方を実際にアウトプットしながら理解していきましょう!"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part5"
              title="簡単なアプリを作ってみよう！"
              description=" part4までに学んだ知識を活かして簡単なアプリを作っていきましょう!"
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