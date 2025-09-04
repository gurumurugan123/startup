import { blog } from "../data/blog";

export default function Blog() {
  return (
    <div className="section">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center dark:text-white">
        From Our Blog
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blog.map((post) => (
          <div
            key={post.slug}
            className="p-6 rounded-2xl bg-white shadow-soft hover:shadow-lg transition-shadow dark:bg-gray-800 dark:shadow-none"
          >
            <h3 className="font-semibold text-lg mb-2 dark:text-white">{post.title}</h3>
            <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">{post.excerpt}</p>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              <span>{post.author}</span> &middot; <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
