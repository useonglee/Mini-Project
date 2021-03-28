import React, { useRef, memo } from 'react';
import styles from './search_header.module.css';

const Searchheader = memo(({ onSearch }) => {
    // useRef를 사용하면 계속 memo가 된다.
    const inputRef = useRef()
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value)
    }

    const onClick = () => {
        handleSearch();
    }

    const onkeypress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input 
            ref={inputRef}
            className={styles.input} 
            type="search" 
            placeholder="Search..." 
            onKeyPress={onkeypress} 
            />
            <button className={styles.button} onClick={onClick} type="submit">
                <img className={styles.buttonImg} src="/images/search.png" alt="search" />
            </button>
        </header>
    )
});

export default Searchheader;