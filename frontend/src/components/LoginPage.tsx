import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box
} from '@mui/material';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        console.log('ログイン実行:', { email, password });
        // TODO: FastAPI との連携
    };

    return (
        <Container maxWidth="xs">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
            >
                <Typography variant="h5" gutterBottom>
                    ログイン
                </Typography>
                <TextField
                    fullWidth
                    label="メールアドレス"
                    type="email"
                    margin="normal"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                    sx={{
                        input: {
                            color: 'blue', // 入力文字は青
                        },
                        '& label': {
                            color: 'blue', // ラベル通常時
                        },
                        '& label.Mui-focused': {
                            color: 'blue', // ラベル フォーカス時
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'blue', // 通常時の枠線
                            },
                            '&:hover fieldset': {
                                borderColor: 'blue', // ホバー時
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'blue', // フォーカス時
                            },
                        },
                    }}
                />
                <TextField
                    fullWidth
                    label="パスワード"
                    type="password"
                    margin="normal"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(e.target.value)
                    }
                    sx={{
                        input: {
                            color: 'blue', // 入力文字は青
                        },
                        '& label': {
                            color: 'blue', // ラベル通常時
                        },
                        '& label.Mui-focused': {
                            color: 'blue', // ラベル フォーカス時
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'blue', // 通常時の枠線
                            },
                            '&:hover fieldset': {
                                borderColor: 'blue', // ホバー時
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'blue', // フォーカス時
                            },
                        },
                    }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                    sx={{ mt: 2 }}
                >
                    ログイン
                </Button>
            </Box>
        </Container>
    );
};

export default LoginPage;
