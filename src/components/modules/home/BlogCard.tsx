import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BlogPost } from "@/types";
import Image from "next/image";
import Link from "next/link";



function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm">
      {post.thumbnail && (
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      )}
      <CardHeader>
        <CardAction>
        </CardAction>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>
          {post.content}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-6">
        <Button >{post.views}</Button>
        <Button variant={"secondary"}><Link href={`/blogs/${post.id}`}>Read More</Link> </Button>
      </CardFooter>
    </Card>
  )
}


export { BlogCard }