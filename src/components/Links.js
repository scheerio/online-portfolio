import React from 'react';
import { Container, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { getPersonalLinks, getRandomColor } from '../utils/utils';

const Links = () => {
    
    const personalLinks = getPersonalLinks();

    return (
        <div>
            <Container className="pb-4 mb-4 border-bottom">
                <ButtonToolbar aria-label="Toolbar with button groups" className="d-flex align-items-center justify-content-center">
                    {personalLinks.map((link) => (
                    <ButtonGroup className="p-1">
                        <Button key={link.id} href={link.link} target="_blank" variant="light" className="article-button border-2" style={{backgroundColor: getRandomColor()}}>{link.title}</Button>
                    </ButtonGroup>
                    ))}
                </ButtonToolbar>
            </Container>
        </div>
    )
}

export default Links;
