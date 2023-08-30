import ProfileInfoFollowings from "../ProfileInfoFollowings/ProfileInfoFollowings";
import ProfileInfoLocation from "../ProfileInfoLocation/ProfileInfoLocation";
import ProfileInfoPerson from "../ProfileInfoPerson/ProfileInfoPerson";
import style from "./ProfileInfo.module.css";

export default function ProfileInfo() {
  return (
    <div className={style.profile_info}>
      <ProfileInfoPerson />
      <ProfileInfoLocation />
      <ProfileInfoFollowings />
    </div>
  );
}
