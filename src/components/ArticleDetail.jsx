import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const ArticleDetail = () => {
  const { index } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.urlToImage || 'https://via.placeholder.com/150'} alt={article.title} style={{ maxWidth: '100%' }} />
      
      <p>{article.content}</p>
      <h4></h4>
      <button type="button" class="btn btn-info"><a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a></button>
      <button type="button" className="btn btn-success" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ArticleDetail;

