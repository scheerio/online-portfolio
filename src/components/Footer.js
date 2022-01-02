import React from 'react';
import { Card } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Card className="text-center">
                <Card.Footer className="text-muted">&copy; 2022 Ben Scheer</Card.Footer>
            </Card>
        </div>
    )
}

export default Footer;
