import React from 'react'
import {Button} from '@material-ui/core';

const menuButton = () => {

    const anchorRef = React.useRef<HTMLButtonElement>(null);

    return (
        <Button
ref={anchorRef}
aria-controls={menu ? 'menu-list-grow' : undefined}
aria-haspopup='true'
className={classes.logoutButton}
onClick={handleToggle}>
Menu
</Button>
    )
}
