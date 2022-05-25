import React from "react";
import { Container, HashtagIcon, Title, Separator, Description } from "./styles";


const ChannelInfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />
            <Title>chat-geral</Title>
            <Separator/>

            <Description>Canal para conversas gerais</Description>
        </Container>
    )
};

export default ChannelInfo;