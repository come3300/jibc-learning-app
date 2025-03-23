import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import Toc from '@/app/components/toc';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

const postsDirectory = path.join(process.cwd(), 'app/documents');

export async function GetAllPostSlugs() {
  const getSlugsRecursively = (dir: string): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const slugs: string[] = [];

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        slugs.push(...getSlugsRecursively(fullPath));
      } else if (entry.name.endsWith('.mdx')) {
        const relativePath = path.relative(postsDirectory, fullPath);
        slugs.push(
          relativePath
            .replace(/\.mdx$/, '')
            .split(path.sep)
            .join('/'),
        );
      }
    }

    return slugs;
  };

  return getSlugsRecursively(postsDirectory);
}

export async function GetPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { data, content };
}

export async function generateStaticParams() {
  const slugs = await GetAllPostSlugs();
  return slugs.map((slug) => ({ params: { slug: slug.split('/') } }));
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = params.slug.join('/');
  const { content, data } = await GetPostBySlug(slug);

  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  };

  return (
    <div>
      <div className="prose flex justify-center mx-auto p-8">
        <div className="w-9/12">
          <h1 className="flex justify-center mt-8">{data.title}</h1>
          <div className="post bg-gray-100 p-8">
            <MDXRemote source={content} options={options} />
          </div>
        </div>
        <div className="w-3/12">
          <Toc /> {/* Tocコンポーネントを追加 */}
        </div>
      </div>
    </div>
  );
}
