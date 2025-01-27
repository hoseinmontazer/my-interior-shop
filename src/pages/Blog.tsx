import Footer from "../components/footer/Footer";
import UpperFooter from "../components/footer/UpperFooter";
import MyHeader from "../components/header/MyHeader";
import MySecHeader from "../components/header/MySecHeader";
import Posts from "../components/posts/Posts";

const Blog = () => {
    return (
        <div className="bg-black min-h-screen overflow-x-hidden">
            <div className="bg-white max-w-[1400px] mx-auto">
                <MyHeader />
                <MySecHeader title="Blog" />
                <Posts />
                <UpperFooter />
                <Footer />
            </div>

        </div>
    )
};
export default Blog