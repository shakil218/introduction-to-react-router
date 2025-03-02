import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData()
  // console.log(blogs);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-green-300 my-24">This is our blogs section.</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;