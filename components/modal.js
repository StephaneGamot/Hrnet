import React from 'react';
import styles from './Modal.module.css';

const Modal = ({
    isOpen,
    onClose,
    children,
    title,
    textColor = "black",
    backgroundColor = "white",
    borderColor = "gray",
    titleFontSize = "24px",
    contentFontSize = "16px",
    customStyles = {}
}) => {
    if (!isOpen) return null;

    const headerStyles = {
        color: textColor,
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
        fontSize: titleFontSize,
        ...customStyles.header
    };

    const contentStyles = {
        color: textColor,
        fontSize: contentFontSize,
        ...customStyles.content
    };

    const overlayStyles = {
        ...customStyles.overlay
    };

    const modalStyles = {
        ...customStyles.modal,
        border: `1px solid ${borderColor}`
    };

    return (
        <div className={styles.overlay} style={overlayStyles}>
            <div className={styles.modal} style={modalStyles}>
                <div className={styles.header} style={headerStyles}>
                    <h2>{title}</h2>
                    <button onClick={onClose} className={styles.closeButton} style={{ color: textColor }}>X</button>

                </div>
                <div className={styles.content} style={contentStyles}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
