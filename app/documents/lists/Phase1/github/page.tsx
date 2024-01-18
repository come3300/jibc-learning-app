{/* /documents//lists/Phase1/github/*/}

import React from 'react';

const all = () => {
  return (
    <main>
        <section className="default-inch text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className="text-3xl font-bold text-gray-900 title-font mb-2">git Hub 入門</h1>

              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">Section1</span>
                  <span className="mt-1 text-gray-500 text-sm">目安:1時間</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 title-font mb-2">Git Hubとは</h2>
                  <p className="leading-relaxed">これから受けるこの講座についてまずは皆様にどのようなことを学ぶのかを確認してもらいます。</p>
                  <a  className="text-indigo-500 inline-flex items-center mt-4"  href= "/documents/phase1/tutorial/mind-page/">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">Section2</span>
                  <span className="mt-1 text-gray-500 text-sm">目安:1時間</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 title-font mb-2">Git Hubのセットアップをしよう!</h2>
                  <p className="leading-relaxed">6ヶ月間の受講をして頂く前に、プログラミングを学ぶ上での挫折しないための考え方、効率よく</p>
                  <a  className="text-indigo-500 inline-flex items-center mt-4"  href= "http://localhost:3000/documents/phase1/tutorial/mind-page/">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">Part3</span>
                  <span className="text-sm text-gray-500">目安:1時間</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 title-font mb-2">Git Hubの基本コマンド</h2>
                  <p className="leading-relaxed">これからプログラミングを学ぶ上で必要なツール、ソフトウェアをインストールしていきます。</p>
                  <a  className="text-indigo-500 inline-flex items-center mt-4"  href= "http://localhost:3000/documents/phase1/tutorial/setup-page/">Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
};

export default all;
