import Footer from "../components/footer/Footer";
import UpperFooter from "../components/footer/UpperFooter";
import MyHeader from "../components/header/MyHeader";
import MySecHeader from "../components/header/MySecHeader";
import Posts from "../components/posts/Posts";

const Blog = () => {
    return (
        <div className="bg-black min-h-screen">
            <main className="shop-container">
                <MyHeader />
                <MySecHeader title="Blog" />
                <Posts />
                <UpperFooter />
                <Footer />
            </main>

        </div>
    )
};
export default Blog