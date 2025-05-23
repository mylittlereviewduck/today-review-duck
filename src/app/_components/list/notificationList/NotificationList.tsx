import { ReactNode, useState } from "react";
import styles from "./notificationlist.module.css";
import { NotificationType } from "@/types/NotificationType";
import { formatDate } from "@/app/_utils/date";
import { Button, Icon } from "../../atoms";
import ImgDefault from "@/../public/images/img-default-post.svg";
import ImgAdmin from "@/../public/images/img-notification.svg";
import { useRouter } from "next/navigation";
import { useToggleFollow } from "@/app/_hooks/useToggleFollow";

interface Props {
  item: NotificationType;
  onFollowChange?: (senderIdx: string, isNowFollowing: boolean) => void;
}

export default function NotificationList({ item, onFollowChange }: Props) {
  const router = useRouter();
  const { follow, unfollow, isPending } = useToggleFollow();

  const goToUserPage = (user: string) => {
    router.push(`/mypage/${user}`);
  };
  const handleToggleFollow = (
    e: React.MouseEvent<HTMLButtonElement>,
    userIdx: string,
    isFollowing: boolean
  ) => {
    e.stopPropagation();

    const onSuccess = () => {
      if (onFollowChange) {
        onFollowChange(userIdx, !isFollowing);
      }
    };

    if (isFollowing) {
      unfollow.mutate(userIdx, { onSuccess });
    } else {
      follow.mutate(userIdx, { onSuccess });
    }
  };

  return (
    <li key={`알람 ${item.commentIdx}`} className={styles.notification_item}>
      {item.type == "follow_user" && (
        <button
          type="button"
          className={styles.item_button}
          onClick={() => goToUserPage(item.sender.idx)}
        >
          <span className={styles.item_profile_wrap}>
            <Icon
              src={item.sender.profileImg ? item.sender.profileImg : ImgDefault}
              alt={"알람 프로필 이미지"}
              width={40}
              height={40}
            />
          </span>
          <span className={styles.contents_wrap}>
            <span className={styles.contents}>
              {parseContentWithBold(item.content)}
            </span>
            <span className={styles.contents_date}>
              {formatDate(item.createdAt)}
            </span>
          </span>
          <span className={styles.button_wrap}>
            <Button
              buttonType="button"
              width="74px"
              height="34px"
              onClick={(e) =>
                handleToggleFollow(
                  e,
                  item.sender.idx,
                  item.sender.isMyFollowing
                )
              }
              fontSize="12px"
              filled={!item.sender.isMyFollowing}
              brightFilled={item.sender.isMyFollowing}
              disabled={isPending}
            >
              {isPending
                ? "로딩중..."
                : item.sender.isMyFollowing
                ? "덕질 중"
                : "덕질하기"}
            </Button>
          </span>
        </button>
      )}
      {item.type == "like_review" && (
        <button
          type="button"
          className={styles.item_button}
          onClick={() => goToUserPage(item.sender.idx)}
        >
          <span className={styles.item_profile_wrap}>
            <Icon
              src={item.sender.profileImg ? item.sender.profileImg : ImgDefault}
              alt={"알람 프로필 이미지"}
              width={40}
              height={40}
            />
          </span>
          <span className={styles.contents_wrap}>
            <span className={styles.contents}>
              {parseContentWithBold(item.content)}
            </span>
            <span className={styles.contents_date}>
              {formatDate(item.createdAt)}
            </span>
          </span>
        </button>
      )}
      {item.type == "create_comment" && (
        <button
          type="button"
          className={styles.item_button}
          onClick={() => goToUserPage(item.sender.idx)}
        >
          <span className={styles.item_profile_wrap}>
            <Icon
              src={item.sender.profileImg ? item.sender.profileImg : ImgDefault}
              alt={"알람 프로필 이미지"}
              width={40}
              height={40}
            />
          </span>
          <span className={styles.contents_wrap}>
            <span className={styles.contents}>
              {parseContentWithBold(item.content)}
            </span>
            <span className={styles.contents_date}>
              {formatDate(item.createdAt)}
            </span>
          </span>
        </button>
      )}
      {item.type == "like_comment" && (
        <button
          type="button"
          className={styles.item_button}
          onClick={() => goToUserPage(item.sender.idx)}
        >
          <span className={styles.item_profile_wrap}>
            <Icon
              src={item.sender.profileImg ? item.sender.profileImg : ImgDefault}
              alt={"알람 프로필 이미지"}
              width={40}
              height={40}
            />
          </span>
          <span className={styles.contents_wrap}>
            <span className={styles.contents}>
              {parseContentWithBold(item.content)}
            </span>
            <span className={styles.contents_date}>
              {formatDate(item.createdAt)}
            </span>
          </span>
        </button>
      )}
      {item.type == "reply_comment" && (
        <button
          type="button"
          className={styles.item_button}
          onClick={() => goToUserPage(item.sender.idx)}
        >
          <span className={styles.item_profile_wrap}>
            <Icon
              src={item.sender.profileImg ? item.sender.profileImg : ImgDefault}
              alt={"알람 프로필 이미지"}
              width={40}
              height={40}
            />
          </span>
          <span className={styles.contents_wrap}>
            <span className={styles.contents}>
              {parseContentWithBold(item.content)}
            </span>
            <span className={styles.contents_date}>
              {formatDate(item.createdAt)}
            </span>
          </span>
        </button>
      )}
      {item.type == "admin_notice" && (
        <button
          type="button"
          className={`${styles.item_admin}`}
          onClick={() => {}}
        >
          <span className={styles.item_admin_img}>
            <Icon src={ImgAdmin} alt="공지사항 이미지" width={74} height={74} />
          </span>
          <span className={styles.contents_wrap}>
            <span className={styles.contents}>{item.content}</span>
            <span className={styles.contents_date}>
              {formatDate(item.createdAt)}
            </span>
          </span>
        </button>
      )}
    </li>
  );
}

export const parseContentWithBold = (content: string) => {
  const splitKeyword = "님이";
  const index = content.indexOf(splitKeyword);
  if (index === -1) return content;
  const prefix = content.slice(0, index + splitKeyword.length);
  const rest = content.slice(index + splitKeyword.length);
  return (
    <>
      <span className={styles.contents_bold}>{prefix}</span>
      {rest}
    </>
  );
};
