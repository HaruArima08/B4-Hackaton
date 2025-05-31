import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

// 仮のデータ（本来はAPIから取得）
type Member = {
    id: number;
    name: string;
    status: 'in' | 'out';
};

const MembersPage: React.FC = () => {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        // TODO: FastAPIからデータ取得に置き換える
        const fetchMembers = async () => {
            const dummyData: Member[] = [
                { id: 1, name: '田中', status: 'in' },
                { id: 2, name: '佐藤', status: 'out' },
                { id: 3, name: '鈴木', status: 'in' },
            ];
            setMembers(dummyData);
        };

        fetchMembers();
    }, []);

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" gutterBottom>
                メンバー在室一覧
            </Typography>
            <List>
                {members.map((member) => (
                    <ListItem key={member.id}>
                        <ListItemText
                            primary={member.name}
                            primaryTypographyProps={{
                                sx: { color: member.status === 'in' ? 'blue' : 'black' },
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default MembersPage;
