"use client";

// import { popularPosts } from "@/lib/placeholder-data";
import { fetcher, fetchUrl } from "@/lib/utils";
import { Icons } from "../icons";
import Link from "next/link";
import useSWR from "swr";
import SkeletonCard from "@/components/skeletons/popular-posts-skeleton";
import { popularPosts as data } from "@/lib/placeholder-data";

export default function PopularPosts() {
  //const { data: apiData, error, isLoading } = useSWR(fetchUrl, fetcher);

  //if (error) return <div>Failed to load</div>;
  //if (isLoading) return <SkeletonCard />;

  ///blog/${post.category}/${post.slug}
  return (
    <ul className="overflow-auto">
      {data?.map((post: { /*category: string; slug: string;*/ title: string }) => (
        <Link href={`#`} key={post.title}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}