import React from "react";
import { Button } from './styles'

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

export const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions
}) =>{
    return(
        <Button
            isHome={isHome}
            hasNotifications={hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-2-1.png" alt="foto" />}
        </Button>
    )
}


export default ServerButton;