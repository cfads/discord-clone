import React from "react";
import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
    nickname:string;
    isBot?:boolean;
}

const UserRow: React.FC<UserProps> = ({nickname,isBot}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Cris"/>

            <Role>Offline - 14</Role>
            <UserRow nickname="Guilherme Rigaud" isBot/>

            <UserRow nickname="Juan"/>
            <UserRow nickname="Levi"/>
            <UserRow nickname="Leonardo"/>
            <UserRow nickname="Resende"/>
            <UserRow nickname="João"/>
            <UserRow nickname="Carlos"/>
            <UserRow nickname="Lucas"/>
            <UserRow nickname="Cleber"/>
            <UserRow nickname="Roger"/>
            <UserRow nickname="Mateus"/>
            <UserRow nickname="Ana"/>
            <UserRow nickname="Letícia"/>
            <UserRow nickname="Luana"/>
            
            
        </Container>
    )
};

export default UserList;