import { useNavigate, Link } from 'react-router-dom';
import styles from './Header.module.css';
import { HeaderButton } from './HeaderButton';

type Props = {
    isLoggedIn: boolean;
};

export const Header = ({ isLoggedIn }: Props) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleMembersStatusClick = () => {
        navigate('/MembersStatus');
    };

    const handleMembersRegisterClick = () => {
        navigate('/MembersRegister');
    };

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                KatLab: 入退室管理サービス
            </Link>

            <div className={styles.buttons}>
                {isLoggedIn ? (
                    <>
                        {/* ログイン後：ステータス表示・登録ボタン */}
                        <HeaderButton variant="green" onClick={handleMembersStatusClick}>
                            ステータス表示
                        </HeaderButton>
                        <HeaderButton variant="green" onClick={handleMembersRegisterClick}>
                            ステータス登録
                        </HeaderButton>
                    </>
                ) : (
                    /* 未ログイン時：ログインボタンだけ */
                    <HeaderButton variant="green" onClick={handleLoginClick}>
                        ログイン
                    </HeaderButton>
                )}
            </div>
        </header>
    );
};

