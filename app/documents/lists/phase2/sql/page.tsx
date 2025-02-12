{
  /* /documents//lists/Phase1/github/*/
}

import React from "react";
import ArticleCard from "@/app/components/lists/ArticleCard";

const all = () => {
  return (
    <main>
      <section className="default-inch text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 title-font mb-2">
              SQL基礎
            </h1>

            <ArticleCard
              section="Part1"
              title="SQLとは"
              description="SQLって何ができて、どんな特徴がなるのかを解説していきます"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part2"
              title="SQLを操作してみよう!"
              description="GUIでSQLを操作して、SQLの操作イメージをつけていきましょう!"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part3"
              title="SQLの基礎構文について学ぼう"
              description="SQLの基礎構文について学んでいきましょう!"
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
