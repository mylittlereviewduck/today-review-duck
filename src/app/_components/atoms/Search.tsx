import React from 'react';
import IocSearch from '@/../../public/icon/icon-search.svg';
import styles from './css/search.module.css';
import Icon from './Icon';

type SearchProps = {
  placeholder?: string;
  value: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  fontSize?: string;
  margin?: string;
  errorMessage?: string;
};

export default function Search({
  fontSize,
  placeholder,
  value,
  onClick,
  onChange,
  onKeyDown,
  width,
  height,
  margin,
  errorMessage,
}: SearchProps) {
  return (
    <div
      className={styles.component}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        margin: margin,
      }}
    >
      <input
        className={`${styles.input} elipsis_1_lines`}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      <button className={styles.button} onClick={onClick} type="button">
        <Icon
          width={'20px'}
          height={'20px'}
          src={IocSearch}
          alt="검색 아이콘"
        />
      </button>

      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </div>
  );
}
