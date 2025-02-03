import React from 'react';

type ArticleCardProps = {
  section: string;
  title: string;
  description: string;
  duration: string;
  featuring: string[];
  link: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ section, title, description, duration, featuring, link }) => {
  return (
    <article className="rounded-xl bg-white p-4 ring-3 ring-indigo-50 sm:p-6 lg:p-8">
      <div className="flex items-start sm:gap-8">
        <div>
          <strong className="rounded-sm border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
            {section}
          </strong>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            <a href={link} className="hover:underline">{title}</a>
          </h3>

          <p className="mt-1 text-sm text-gray-700">
            {description}
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500">
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>

              <p className="text-xs font-medium">{duration}</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

            <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
              Featuring-3 {featuring.map((name, index) => (
                <React.Fragment key={index}>
                  <a href="#" className="underline hover:text-gray-700">{name}</a>
                  {index < featuring.length - 1 && ', '}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;