import React from "react";

const HomePage = () => {
  return (
    <section className="text-gray-600 body-font">
      {/* コンテナ */}
      <div className="container px-5 py-24 mx-auto">
        {/* カード全体をラップするFlexボックス */}
        <div className="flex flex-wrap -m-4">
          {[
            {
              id: 1,
              imgSrc: "https://dummyimage.com/720x400",
              category: "CATEGORY",
              title: "The Catalyzer",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
              views: "1.2K",
              comments: "6",
            },
            {
              id: 2,
              imgSrc: "https://dummyimage.com/721x401",
              category: "CATEGORY",
              title: "The 400 Blows",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
              views: "1.2K",
              comments: "6",
            },
            {
              id: 3,
              imgSrc: "https://dummyimage.com/722x402",
              category: "CATEGORY",
              title: "Shooting Stars",
              description:
                "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
              views: "1.2K",
              comments: "6",
            },
            {
              id: 4,
              imgSrc: "https://dummyimage.com/723x403",
              category: "CATEGORY",
              title: "Neptune's Star",
              description:
                "Quinoa polaroid messenger bag flannel mustache cloud bread typewriter hammock air plant.",
              views: "1.5K",
              comments: "8",
            },
            {
              id: 5,
              imgSrc: "https://dummyimage.com/724x404",
              category: "CATEGORY",
              title: "Galactic Dreams",
              description:
                "Tumeric prism bicycle rights chia enamel pin pork belly cardigan aesthetic irony.",
              views: "1.8K",
              comments: "12",
            },
            {
              id: 6,
              imgSrc: "https://dummyimage.com/725x405",
              category: "CATEGORY",
              title: "Cosmic Explorations",
              description:
                "Vinyl kickstarter pinterest crucifix before they sold out mixtape hammock umami.",
              views: "1.3K",
              comments: "10",
            },
            {
              id: 7,
              imgSrc: "https://dummyimage.com/726x406",
              category: "CATEGORY",
              title: "Lunar Shadows",
              description:
                "Adaptogen woke mixtape PBR&B, migas sriracha unicorn raclette authentic palo santo.",
              views: "1.1K",
              comments: "4",
            },
            {
              id: 8,
              imgSrc: "https://dummyimage.com/727x407",
              category: "CATEGORY",
              title: "Aurora Glow",
              description:
                "Artisan kinfolk bitters, raw denim enamel pin quinoa pour-over snackwave.",
              views: "1.9K",
              comments: "14",
            },
            {
              id: 9,
              imgSrc: "https://dummyimage.com/728x408",
              category: "CATEGORY",
              title: "Celestial Journey",
              description:
                "Marfa banh mi master cleanse four loko, iceland tattooed farm-to-table lomo taiyaki.",
              views: "1.7K",
              comments: "9",
            },
          ].map((post) => (
            // 各カードのラッパー
            <div key={post.id} className="p-4 md:w-1/3">
              {/* カードコンテナ */}
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* カードの画像部分 */}
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={post.imgSrc}
                  alt={post.title}
                />
                {/* カードの内容部分 */}
                <div className="p-6">
                  {/* カテゴリー */}
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {post.category}
                  </h2>
                  {/* タイトル */}
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {post.title}
                  </h1>
                  {/* 説明文 */}
                  <p className="leading-relaxed mb-3">{post.description}</p>
                  {/* カードのアクション（Learn Moreリンク、ビュー数、コメント数） */}
                  <div className="flex items-center flex-wrap">
                    {/* Learn More リンク */}
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    {/* ビュー数 */}
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      {post.views}
                    </span>
                    {/* コメント数 */}
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;

