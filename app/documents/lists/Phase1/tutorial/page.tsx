{
  /* /documents/phase1/github/all */
}
import Image from "next/image";

import React from "react";
import ArticleCard from "@/app/components/lists/ArticleCard";

const all = () => {
  return (
    <main>
      <section className="default-inch text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 title-font mb-2">
              チュートリアル
            </h1>

            <ArticleCard
              section="Part1"
              title="まずはじめに"
              description="これから受けるこの講座についてまずは皆様にどのようなことを学ぶのかを確認してもらいます"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part2"
              title="エンジニアになるための考え方"
              description=">6ヶ月間の受講をしていただく前に、プログラミングを学ぶ上で挫折しないための考え方、効率よく学習する方法について解説していきます。"
              duration="48:32 minutes"
              featuring={["Barry", "Sandra", "August"]}
              link="#"
            />

            <ArticleCard
              section="Part3"
              title="セットアップしてみよう！"
              description=">これからプログラミングを学ぶ上で必要なツール、ソフトウェアをインストールしていきます。"
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
