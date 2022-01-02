import React from 'react';
import { Container, Row, Col, Button, Card, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { getProjects } from '../utils/utils';

const Projects = () => {

    const projects = getProjects();

    return (
        <div>
            <h2 className="fs-3 mt-4">Project Gallery</h2>
            <p>These are some projects I've done.</p>
            <Container className="pb-4 mb-4 border-bottom">
                <Row xs={1} md={2}>
                    {projects.map((project) => (
                    <Col key={project.id} lg="6" className="g-3">
                        <Card className="h-100 p-2 border-2 rounded-3 project-card">
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>
                            {project.description}
                            </Card.Text>
                            <ButtonToolbar aria-label="Toolbar with button groups">
                                {project.links.map((link) => (
                                <ButtonGroup className="me-2">
                                    {link.available ? 
                                    <Button key={link.id} href={link.link} target="_blank" variant="dark" className="project-button">{link.title}</Button>
                                    : <Button key={link.id} variant="light">{link.title}</Button>
                                    }
                                </ButtonGroup>
                                ))}
                            </ButtonToolbar>
                        </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Projects;
