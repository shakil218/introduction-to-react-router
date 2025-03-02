import PropTypes from 'prop-types';

const Blog = ({blog}) => {
  const {id,title,body}=blog
  return (
    <div className=" text-3xl border border-emerald-300 rounded-xl text-center m-5 p-8 bg-emerald-100 shadow-lg">
      <h1 className="font-semibold">{id}</h1>
      <h1 className="font-semibold">{title.slice(0,20)}</h1>
      <p><small>{body.slice(0,100)}</small></p>
      <button className="btn bg-emerald-300 rounded-xl text-base font-medium">Show Details</button>
    </div>
  );
};
Blog.propTypes = {
  blog:PropTypes.object,
}
export default Blog;