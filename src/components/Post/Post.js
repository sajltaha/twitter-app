import style from "./Post.module.css";

export default function Post({ textareaPostRef, post }) {
  return (
    <div className={style.post}>
      <img src="images/avatar.jpeg" alt="user-avatar" />
      <div className={style.post_inner}>
        <p>
          Davide Biscuso <span>@biscuttu · {post.publishedTime}</span>
        </p>
        <textarea ref={textareaPostRef} value={post.postText} readOnly />
      </div>
    </div>
  );
}
