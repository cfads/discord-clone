import React from "react";
import ChannelButton from "../ChannelButton";
import { Container, Category, AddCategoryIcon } from "./styles";



const ChannelList: React.FC = () => {
    return (
        <Container>
          <Category>
              <span>Canais de texto</span>
              <AddCategoryIcon />
          </Category>

          <ChannelButton channelName="chat-geral" selected/>
          <ChannelButton channelName="chat-músicas" />
          <ChannelButton channelName="comandos-bots" />
          <ChannelButton channelName="mural-de-artes" />
          <ChannelButton channelName="avisos" />

        </Container>
    )
};

export default ChannelList;