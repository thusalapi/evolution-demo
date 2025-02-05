import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../types";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="space-y-4">
    {posts.map((post) => (
      <>
        <Link key={post._id} to={`/post/${post._id}`} className="block">
          <div className="bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200 pl-6">
            <h3
              className="text-xl font-semibold mb-2 text-gray-200 pt-2"
              style={{ color: post.titleColor }}
            >
              {post.title}
            </h3>
            <p className="text-gray-400 mb-2">
              {post.content.substring(0, 100)}...
            </p>
            <hr className="border-t border-gray-700 mt-8 mb-2" />
            <div className="flex justify-end">
              <span className="text-blue-400">
                {post.commentCount || 0} Comments
              </span>
            </div>
          </div>
        </Link>
      </>
    ))}
  </div>
);

export default PostList;
