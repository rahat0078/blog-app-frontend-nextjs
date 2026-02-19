import { BlogCard } from "@/components/modules/home/BlogCard";
import { Button } from "@/components/ui/button";
import { blogService } from "@/services/blog.service";
import { BlogPost } from '@/types';

export default async function Home() {

  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false,
    },
    {
      cache: "no-store"
    }

  );



  return (
    <>
      <div>
        <h1>Hello from next js Home page
          <Button variant="outline" className="ml-4">Button</Button>
          <div className="grid grid-cols-4 mx-auto gap-6 p-6">
            {
              data?.data?.data?.map((post: BlogPost) =>
                <BlogCard key={post.id} post={post} />)
            }
          </div>

        </h1>
      </div>
    </>
  );
}
