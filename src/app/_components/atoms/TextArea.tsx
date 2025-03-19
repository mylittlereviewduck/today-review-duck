import { ChangeEvent } from "react";
import styles from "./_css/textarea.module.css";

type Props = {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  height?: string;
  maxLength?: number;
};

export default function TextArea({
  name,
  label,
  placeholder,
  value,
  onChange,
  height = "100px",
  maxLength = 100,
}: Props) {
  return (
    <div className={styles.textarea_wrapper}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.textarea_box}>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          style={{ height }}
          className={styles.textarea}
        />

        <span
          className={styles.sub_info}
        >{`${value.length}/${maxLength}`}</span>
      </div>
    </div>
  );
}
