import React from 'react';
import { Container, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

const MediaList = (props) => {

    const mediaList = props.value;
    const sectionTitle = mediaList[0];
    const sectionDescription = mediaList[1];
    const icon = mediaList[2];

    return (
        <div>
            <h2 className="fs-3 mt-4">{sectionTitle}</h2>
            <p>{sectionDescription}</p>
            <Container className="pb-4 mb-4 border-bottom">
                <ButtonToolbar className="mt-4 d-flex align-items-center justify-content-center" aria-label="Toolbar with button groups">
                    {mediaList[3].map((item) => (
                    <ButtonGroup>
                        <Button key={item.id} variant="light" className="media-button"><strong>{item.name}</strong> {icon}</Button>
                    </ButtonGroup>
                    ))}
                    <ButtonGroup>
                        <Button variant="light" className="media-button">More Coming Soon</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Container>
        </div>
    )
}

export default MediaList;
