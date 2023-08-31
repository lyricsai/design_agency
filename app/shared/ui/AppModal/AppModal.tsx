import {
    ReactNode,
    FC,
    useCallback,
    useEffect,
    useRef,
    useState,
    MouseEvent,
} from "react";

// import styles from "./AppModal.module.scss";

interface AppModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const AppModal: FC<AppModalProps> = ({
    children,
    isOpen,
    onClose,
    lazy,
}: AppModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timeRef = useRef<ReturnType<typeof setTimeout>>();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onCloseHandler();
            }
        },
        [onCloseHandler]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <AppPortal>
            <div className="">
                <div className="modal_overlay" onClick={onCloseHandler}>
                    <div className="modal_content" onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </AppPortal>
    );
};
