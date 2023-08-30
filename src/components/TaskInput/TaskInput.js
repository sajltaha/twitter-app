import style from "./TaskInput.module.css";

export default function TaskInput({
  textareaTaskRef,
  textareaValue,
  handleTextareaChange,
  gapActive,
  sharePost,
}) {
  return (
    <div className={style.task_input}>
      <img src="images/avatar.jpeg" alt="user-avatar" />
      <div className={style.task_input_action}>
        <textarea
          ref={textareaTaskRef}
          value={textareaValue}
          onChange={handleTextareaChange}
          rows={gapActive ? 2 : 2}
          placeholder="What's happening?"
        />
        <button onClick={sharePost} disabled={!textareaValue}>
          Tweet
        </button>
      </div>
    </div>
  );
}
