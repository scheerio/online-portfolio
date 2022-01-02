import React from 'react';
import { Container, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { getArticles, getRandomColor } from '../utils/utils';

const Articles = () => {
    
    const articles = getArticles();

    return (
        <div>
            <h2 className="fs-3 mt-4">Articles</h2>
            <p>I write articles on Medium. Click on a topic below.</p>
            <Container className="pb-4 mb-4 border-bottom">
                <ButtonToolbar className="mt-4 d-flex align-items-center justify-content-center" aria-label="Toolbar with button groups">
                    {articles.map((article) => (
                    <ButtonGroup>
                        <Button key={article.id} href={article.link} target="_blank" variant="light" className="article-button border-2" style={{backgroundColor: getRandomColor()}}>{article.topic}</Button>
                    </ButtonGroup>
                    ))}
                </ButtonToolbar>
            </Container>
        </div>
    )
}

export default Articles;
