"use client";

export default function PostList() {
  const generatePosts = () => {
    return Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      title: `Post ${index + 1}`,
      hashtags: [`#Tag${index + 1}`, `#Category${(index % 5) + 1}`],
      date: `2024-09-${String((index % 30) + 1).padStart(2, "0")}`,
      imageUrl: "https://via.placeholder.com/150", // Replace with your image URL
    }));
  };

  const posts = generatePosts();

  return (
    <article className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md flex h-40"
          >
            {/* Left Side */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Hashtags */}
              <div>
                {post.hashtags.map((tag, index) => (
                  <span key={index} className="text-blue-500 text-sm mr-2">
                    {tag}
                  </span>
                ))}
              </div>
              {/* Title */}
              <h2 className="text-xl font-bold break-words">{post.title}</h2>
              {/* Date */}
              <p className="text-gray-500 text-sm mt-4">{post.date}</p>
            </div>
            {/* Right Side - Image */}
            <div className="ml-4">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-28 h-28 object-cover rounded-lg"
                style={{ height: "100%", width: "250px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
