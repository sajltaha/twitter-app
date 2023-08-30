import style from "./ProfileInfoFollowings.module.css";

export default function ProfileInfoFollowings() {
  return (
    <div style={{ display: "flex", margin: "10px 0 0 0" }}>
      <p style={{ color: "#5B7083" }} className={style.text_style_two}>
        <span style={{ color: "black" }} className={style.text_style_three}>
          569
        </span>{" "}
        Following
      </p>
      <p
        className={style.text_style_two}
        style={{ color: "#5B7083", margin: "0 0 0 18px" }}
      >
        <span style={{ color: "black" }} className={style.text_style_three}>
          72
        </span>{" "}
        Followers
      </p>
    </div>
  );
}
