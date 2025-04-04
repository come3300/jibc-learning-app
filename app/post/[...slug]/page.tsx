import { GetAllPostSlugs, GetPostBySlug } from '@/libs/post';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import Toc from '@/app/components/toc';
interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = GetAllPostSlugs();
  return slugs.map((slug) => ({ params: { slug } }));
}

export default async function PostPage({ params }: PostPageProps) {
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  };
  const { content, data } = GetPostBySlug(params.slug);

  return (
    <div className="flex flex-col pb-8">
      <div className="flex flex-col lg:flex-row justify-center w-full max-w-[1200px] mx-auto mt-10">
        <div className="lg:w-9/12 lg:pr-8">
          <h1 className="text-3xl font-bold text-left mt-8">{data.title}</h1>
          <div className="post bg-white p-8 shadow-md rounded-lg  prose max-w-full">
            <MDXRemote source={content} options={options} />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start w-full lg:w-3/12">
          <Toc />
        </div>
      </div>
    </div>
  );
}
