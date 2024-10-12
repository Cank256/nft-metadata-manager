import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best NFT designs to look out for",
    paragraph:
      "Come along and see what to look for when creating, buying or even collecting NFTs.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "Oct, 2025",
  },
  {
    id: 2,
    title: "3 simple ways to improve NFT metadata",
    paragraph:
      "Get to know the simplest way to drive attention to your NFT by creating captivative metadata content",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "Oct, 2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve NFT's visibility.",
    paragraph:
      "Learn the secret to get collectors looking for your NFTs and how to get more out of your collection",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "NFT Ninja",
    },
    tags: ["design"],
    publishDate: "Oct, 2024",
  },
];
export default blogData;
