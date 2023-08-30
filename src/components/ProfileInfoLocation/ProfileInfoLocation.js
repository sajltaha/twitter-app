import style from "./ProfileInfoLocation.module.css";

export default function ProfileInfoLocation() {
  return (
    <div style={{ display: "flex", margin: "10px 0 0 0" }}>
      <img src="images/Location.svg" alt="location" />
      <p
        style={{
          color: "#5B7083",
          letterSpacing: "-0.32px",
          margin: "0 0 0 5px",
        }}
        className={style.text_style_two}
      >
        London
      </p>
      <img
        src="images/Calendar.svg"
        alt="calendar"
        style={{ margin: "0 0 0 9px" }}
      />
      <p
        style={{
          color: "#5B7083",
          letterSpacing: "-0.24px",
          margin: "0 0 0 6px",
        }}
        className={style.text_style_two}
      >
        Joined September 2011
      </p>
    </div>
  );
}
