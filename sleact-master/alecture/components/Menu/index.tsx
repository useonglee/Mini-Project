import React, { FC, CSSProperties, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

interface Props {
    show: boolean;
    onCloseModal: () => void;
    style: CSSProperties
    closeButton?: boolean;
}

const Menu: FC <Props> = ({ children, style, show, onCloseModal, closeButton }) => {
    const stopPropagation = useCallback((e) => {
        e.stopPropagation();
    }, []);
    
    return (
        <CreateMenu onClick={onCloseModal}>
            <div style={style} onClick={stopPropagation}>
                {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
                {children}
            </div>
        </CreateMenu>
    )
}

export default Menu;