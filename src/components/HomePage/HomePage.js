import { usePosts } from "../../store/usePosts";
import Post from "../Post/Post";
import TaskInput from "../TaskInput/TaskInput";
import style from "./HomePage.module.css";
import { useState, useRef, useEffect } from "react";

export default function HomePage() {
  const textareaTaskRef = useRef(null);
  const textareaPostRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState("");
  const [gapActive, setGapActive] = useState(false);
  const { push, posts } = usePosts();

  useEffect(() => {
    adjustTextareaHeight();
  }, [posts]);

  const handleTextareaChange = (event) => {
    const { value } = event.target;
    setTextareaValue(value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaTaskRef.current) {
      textareaTaskRef.current.style.height = "auto";
      textareaTaskRef.current.style.height = `${textareaTaskRef.current.scrollHeight}px`;
    }

    if (textareaPostRef.current) {
      textareaPostRef.current.style.height = "auto";
      textareaPostRef.current.style.height = `${textareaPostRef.current.scrollHeight}px`;
    }
  };

  const sharePost = () => {
    setTextareaValue("");
    setGapActive(true);
    const formattedTime = `${new Date()
      .getHours()
      .toString()
      .padStart(2, "0")}:${new Date()
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
    push({
      publishedTime: formattedTime,
      postText: textareaValue,
      postID: Math.random().toString(36).substr(2, 9),
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <TaskInput
        textareaTaskRef={textareaTaskRef}
        handleTextareaChange={handleTextareaChange}
        sharePost={sharePost}
        textareaValue={textareaValue}
        gapActive={gapActive}
      />
      <div
        style={{ display: gapActive ? "block" : "none" }}
        className={style.gap}
      ></div>
      {posts.map((post) => {
        return (
          <Post
            key={post.postID}
            textareaPostRef={textareaPostRef}
            post={post}
          />
        );
      })}
    </div>
  );
}
