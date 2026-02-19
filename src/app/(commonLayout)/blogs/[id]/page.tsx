import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
import Image from "next/image";



export async function generateStaticParams() {
    const {data} = await blogService.getBlogPosts();

    return data?.data?.data?.map((blog: BlogPost) => ({id: blog.id}))
}

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params;

    const { data } = await blogService.getBlogById(id)



    return (
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-8 border border-amber-600">

            {/* Thumbnail */}
            {data.data.thumbnail && (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image
                        src={data.data.thumbnail}
                        alt={data.data.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold">{data.data.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span>👁 {data.data.views} views</span>
                <span>
                    📅 {new Date(data.data.createdAt).toLocaleDateString()}
                </span>
                <span>
                    Status: <strong>{data.data.status}</strong>
                </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {data.data.tags?.map((tag: string) => (
                    <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-muted rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Content */}
            <div className="prose max-w-none">
                <p>{data.data.content}</p>
            </div>

        </div>
    );
}