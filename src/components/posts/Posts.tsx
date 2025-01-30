import Pagination from "../Pagination";
import Article from "./Article";
import PostsContext from "./PostsContext";

interface PostsProps {}
const Posts: React.FC<PostsProps> = () => {
  interface post {
    id: string;
    title: string;
    tag: string;
    image: string;
  }
  const posts: post[] = [
    {
      id: "post1",
      title: "Going all-in with millennial design",
      tag: "Wood",
      image:
        "https://res.cloudinary.com/dxjjsfami/image/upload/v1737559643/post1_ifubn2.jpg",
    },
    {
      id: "post2",
      title: "Exploring new ways of decorating",
      tag: "Handmade",
      image:
        "https://res.cloudinary.com/dxjjsfami/image/upload/v1737559644/post2_msk0wx.jpg",
    },
    {
      id: "post3",
      title: "Handmade pieces that took time to make",
      tag: "Wood",
      image:
        "https://res.cloudinary.com/dxjjsfami/image/upload/v1737559650/post3_dgrsug.jpg",
    },
  ];
  return (
    <div className="container flex flex-col xl:flex-row justify-between py-6 xl:py-24">
      <section className="lg:w-2/3 w-full p-3 xl:pl-24">
        <div>
          {posts.map((post) => (
            <PostsContext
              key={post.id}
              img={post.image}
              alt={post.title}
              topic={post.title}
              tag={post.tag}
            />
          ))}
        </div>
        <Pagination items={posts} itemsPerPage={3} />
      </section>
      <Article />
    </div>
  );
};

export default Posts;
