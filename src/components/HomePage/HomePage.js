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
  const { posts } = usePosts();

  useEffect(() => {
    console.log(posts);
    adjustTextareaHeight();
  }, [posts, textareaValue]);

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

  return (
    <div style={{ width: "100%" }}>
      <TaskInput
        textareaTaskRef={textareaTaskRef}
        textareaValue={textareaValue}
        gapActive={gapActive}
        setGapActive={setGapActive}
        setTextareaValue={setTextareaValue}
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
