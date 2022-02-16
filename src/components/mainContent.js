import React from 'react'
import 'bulma/css/bulma.min.css';
import {Block, Box, Notification} from "react-bulma-components";

const mainContent = () => {
    return (
        <Box>
            <React.Fragment key=".0">
                <Block>
                    <Notification color="info">
                        Some text
                    </Notification>
                </Block>
                <Block>
                    <Notification color="success">
                        Some more text
                    </Notification>
                </Block>
                <Block>
                    <Notification color="danger">
                        All of this are evently spaced
                    </Notification>
                </Block>
                <Block>
                    <Notification color="warning">
                        This one does not generate extra margin at the bottom
                    </Notification>
                </Block>
            </React.Fragment>
        </Box>
    )
}

export default mainContent