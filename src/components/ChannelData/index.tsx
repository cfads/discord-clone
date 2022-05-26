import React, {useRef, useEffect} from "react";
import ChannelMessage, {Mention} from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";


const ChannelData: React.FC = () => {

    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
        const div = messageRef.current;

        if(div)
            div.scrollTop = div.scrollHeight;

    },[messageRef])

    return (
        <Container>
            <Messages ref={messageRef}>
                <ChannelMessage 
                    author="Cris"
                    date="25/05/2022"
                    content= "Isso é uma mensagem teste."
                />
                <ChannelMessage 
                    author="Cris"
                    date="25/05/2022"
                    content= "Isso é uma mensagem teste."
                />
                <ChannelMessage 
                    author="Cris"
                    date="25/05/2022"
                    content= "Isso é uma mensagem teste."
                />
                <ChannelMessage 
                    author="Cris"
                    date="25/05/2022"
                    content= "Isso é uma mensagem teste."
                />
                <ChannelMessage 
                    author="Cris"
                    date="25/05/2022"
                    content= "Isso é uma mensagem teste."
                />
                <ChannelMessage 
                    author="Cris"
                    date="25/05/2022"
                    content= "Isso é uma mensagem teste."
                />
                <ChannelMessage 
                    author="Cris"
                    date="25/05/2022"
                    content= "Isso é uma mensagem teste."
                />
                <ChannelMessage 
                    author="Cris"
                    date="25/05/2022"
                    content= "Isso é uma mensagem teste."
                />
                <ChannelMessage 
                    author="Cris"
                    date="25/05/2022"
                    content= "Isso é uma mensagem teste."
                />
                <ChannelMessage 
                    author="Juan"
                    date="21/06/2021"
                    hasMention
                    content= {
                        <>
                            <Mention>@Cris</Mention>, vai jogar hoje ?
                        </>
                    }
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-geral"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;