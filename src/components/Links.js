import React from 'react';
import { Container, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { getPersonalLinks, getRandomColor } from '../utils/utils';

const Links = () => {
    
    const personalLinks = getPersonalLinks();

    return (
        <div>
            <Container className="pb-4 mb-4 border-bottom d-flex align-items-center justify-content-center">
                <ButtonToolbar aria-label="Toolbar with button groups">
                    {personalLinks.map((link) => (
                    <ButtonGroup className="me-2">
                        <Button key={link.id} href={link.link} target="_blank" variant="dark" className="link-button border-1">{link.title}</Button>
                    </ButtonGroup>
                    ))}
                </ButtonToolbar>
            </Container>
        </div>
    )
}

export default Links;
