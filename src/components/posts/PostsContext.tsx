import { FaUser, FaCalendar, FaTag } from "react-icons/fa";
import { useState } from "react";

interface PostsContextProps {
  img: string;
  alt: string;
  topic: string;
  date: string;
  tag: string;
}

const generateLoremIpsum = (wordCount: number): string => {
  const words = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "ut",
    "enim",
    "ad",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "ut",
    "aliquip",
    "ex",
  ];

  let loremText = "";
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    loremText += words[randomIndex] + " ";
  }
  return loremText.trim();
};

const PostsContext: React.FC<PostsContextProps> = ({
  img,
  alt,
  topic,
  date,
  tag,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const loremParagraphs = Array.from({ length: 5 }, () =>
    generateLoremIpsum(40)
  ); // Each paragraph with 50 words
  const fullText = loremParagraphs.join(" ");
  const previewText = loremParagraphs[0];

  return (
    <article className="p-3 xl:p-1">
      <img
        src={img}
        alt={alt}
        className="xl:max-w-[800px] xl:max-h-[600px] lg:max-w-[600px] lg:max-h-[400px] rounded-lg"
      />
      <section className="flex flex-row items-center text-gray-400 py-3">
        <FaUser />
        <span className="ml-1 mr-6">Admin</span>
        <FaCalendar />
        <span className="ml-1 mr-6">{date}</span>
        <FaTag />
        <span className="ml-1 mr-6">{tag}</span>
      </section>
      <header>
        {" "}
        <h2 className="text-3xl font-bold pt-2">{topic}</h2>
      </header>
      <p className="lg:max-w-[800px] py-3 text-gray-400 text-justify">
        {isExpanded ? fullText : previewText}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="border-b border-separate border-black text-lg mb-5"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </article>
  );
};

export default PostsContext;
