import React, { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Button
} from '@mui/material';

type Member = {
    id: number;
    name: string;
    status: 'in' | 'out';
};

const MembersPage: React.FC = () => {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        const dummyData: Member[] = [
            { id: 1, name: '田中', status: 'in' },
            { id: 2, name: '佐藤', status: 'out' },
            { id: 3, name: '鈴木', status: 'in' },
            { id: 4, name: '高橋', status: 'out' },
            { id: 5, name: '山本', status: 'in' },
            { id: 6, name: '中村', status: 'out' },
        ];
        setMembers(dummyData);
    }, []);

    const toggleStatus = (id: number) => {
        setMembers((prev) =>
            prev.map((member) =>
                member.id === id
                    ? { ...member, status: member.status === 'in' ? 'out' : 'in' }
                    : member
            )
        );
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ mb: 3, textAlign: 'left' }}
            >
                メンバー在室一覧
            </Typography>

            <Grid container spacing={2}>
                {members.map((member) => (
                    <Grid item xs={12} sm={4} key={member.id}>
                        <Card
                            variant="outlined"
                            sx={{
                                backgroundColor: member.status === 'in' ? '#b9f6ca' : '#f5f5f5',
                                borderLeft: member.status === 'in'
                                    ? '6px solid #00c853'
                                    : '6px solid #bdbdbd',
                                height: '100%',
                                minHeight: 120,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Button
                                    onClick={() => toggleStatus(member.id)}
                                    sx={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        color: member.status === 'in' ? 'success.main' : 'text.secondary',
                                        textTransform: 'none'
                                    }}
                                >
                                    {member.name}
                                </Button>
                                <Typography
                                    variant="body2"
                                    color={member.status === 'in' ? 'success.main' : 'text.secondary'}
                                >
                                    {member.status === 'in' ? '在室中' : '不在'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default MembersPage;
