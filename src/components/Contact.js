import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h2 className="fs-3 mt-4">Thoughts or Questions?</h2>
            <p>Feel free to shoot me a message.</p>
            <Container className="pb-4">
                <Button variant="dark" className="link-button border-1"  href="mailto:benjackscheer@gmail.com?subject=Reaching Out!" target="_blank">Email Ben ✏️</Button>
            </Container>
        </div>
    )
}

export default Contact;
