import { FaUser, FaCalendar, FaTag } from "react-icons/fa";
import { useState } from "react";

interface PostsContextProps {
    img: string;
    alt: string;
    topic: string;
    tag: string;
}

const generateLoremIpsum = (wordCount: number): string => {
    const words = [
        "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
        "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
        "incididunt", "ut", "labore", "et", "dolore", "magna",
        "aliqua", "ut", "enim", "ad", "minim", "veniam",
        "quis", "nostrud", "exercitation", "ullamco", "laboris",
        "nisi", "ut", "aliquip", "ex", "ea", "commodo",
        "consequat", "duis", "aute", "irure", "dolor", "in",
        "reprehenderit", "in", "voluptate", "velit", "esse",
        "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur"
    ];

    let loremText = "";
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        loremText += words[randomIndex] + " ";
    }
    return loremText.trim();
};

const PostsContext: React.FC<PostsContextProps> = ({ img, alt, topic, tag }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const loremParagraphs = Array.from({ length: 5 }, () => generateLoremIpsum(50)); // Each paragraph with 50 words
    const fullText = loremParagraphs.join(" ");
    const previewText = loremParagraphs[0];

    return (
        <div className="p-3 xl-p1">
            <img
                src={img}
                alt={alt}
                className="xl:max-w-[800px] xl:max-h-[600px] lg:max-w-[600px] lg:max-h-[400px] rounded-lg"
            />
            <div className="flex flex-row items-center lg:text-lg text-gray-400 py-3">
                <FaUser />
                <div className="ml-1 mr-6">Admin</div>
                <FaCalendar />
                <div className="ml-1 mr-6">14 Oct 2024</div>
                <FaTag />
                <div className="ml-1 mr-6">{tag}</div>
            </div>
            <div>
                <div className="text-3xl font-bold pt-2">{topic}</div>
                <p className="lg:max-w-[800px] py-3 text-gray-400 text-justify">
                    {isExpanded ? fullText : previewText}
                </p>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="border-b border-separate border-black text-lg mb-5"
                >
                    {isExpanded ? "Read Less" : "Read More"}
                </button>
            </div>
        </div>
    );
};

export default PostsContext;
