import { IoSearch } from "react-icons/io5";
import RecentPosts from "./RecentPosts";

const Article = () => {
  return (
    <aside className="xl:w-1/4 w-full flex-col justify-center items-center p-3 xl:p-1">
      <form className="flex justify-center">
        <div className="relative flex items-center justify-end mt-7 xl:mt-0">
          <input
            type="search"
            className="border border-black px-12 py-3 rounded-xl w-full"
          />
          <IoSearch className="size-8 absolute mr-2" />
        </div>
      </form>
      <section className="flex flex-col py-4 mt-4">
        <header>
          <h2 className="text-2xl font-bold">Categories</h2>
        </header>
        <ul className=" text-gray-400 text-lg">
          <li className="flex justify-between pt-5">
            <span>Crafts</span>
            <span>2</span>
          </li>
          <li className="flex justify-between pt-5">
            <span>Design</span>
            <span>8</span>
          </li>
          <li className="flex justify-between pt-5">
            <span>Handmade</span>
            <span>2</span>
          </li>
          <li className="flex justify-between pt-5">
            <span>Interior</span>
            <span>1</span>
          </li>
          <li className="flex justify-between pt-5">
            <span>Wood</span>
            <span>6</span>
          </li>
        </ul>
      </section>
      <RecentPosts />
    </aside>
  );
};

export default Article;
