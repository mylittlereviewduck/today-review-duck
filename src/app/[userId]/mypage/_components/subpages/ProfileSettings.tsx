"use client";
import styles from "../../_css/profilesettings.module.css";
import Modal from "@/app/_components/modal/Modal";
import ProfileForm from "./_profileSettingsComponents/ProfileForm";
import ProfileInfo from "./_profileSettingsComponents/ProfileInfo";
import ProfileImage from "./_profileSettingsComponents/ProfileImage";
import ProfileBottom from "./_profileSettingsComponents/ProfileBottom";
import { useMyInfo } from "@/app/_hooks/useMyInfo";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function ProfileSettings() {
  const { data: userInfo, isLoading } = useMyInfo();
  if (isLoading || !userInfo)
    return (
      <>
        로딩 중...
        {/* TODO : 로딩 애니메이션 적용 또는 로티에 적용 */}
        {/* <DotLottieReact
      src="path/to/animation.lottie"
      loop
      autoplay
    /> */}
      </>
    );
  return (
    <div className={styles.contents}>
      <ProfileImage imageSrc={userInfo.profileImg} />
      <ProfileInfo
        nickname={userInfo.nickname}
        profile={userInfo.profile}
        interest1={userInfo.interest1}
        interest2={userInfo.interest2}
      />
      <ProfileForm
        nickname={userInfo.nickname}
        email={userInfo.email}
        provider={userInfo.provider}
        profile={userInfo.profile}
        interest1={userInfo.interest1}
        interest2={userInfo.interest2}
      />
      <ProfileBottom />
      <Modal width="355px" />
    </div>
  );
}
