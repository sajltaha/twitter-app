import style from "./ProfileInfoPerson.module.css";

export default function ProfileInfoPerson() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img
          className={style.profile_avatar}
          src="images/avatar.jpeg"
          alt="avatar"
        />
        <button className={style.edit_button}>Edit profile</button>
      </div>
      <p
        className={style.text_style_one}
        style={{ letterSpacing: "-0.252px", margin: "3px 0 0 0" }}
      >
        Davide Biscuso
      </p>
      <p
        style={{ color: "#5B7083", letterSpacing: "-0.32px" }}
        className={style.text_style_two}
      >
        @biscuttu
      </p>
      <p
        style={{
          letterSpacing: "-0.24px",
          margin: "10px 0 0 0",
        }}
        className={style.text_style_two}
      >
        Product Designer
      </p>
    </>
  );
}
