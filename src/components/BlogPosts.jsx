import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogPosts = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-06-23&sortBy=publishedAt&apiKey=2a923ca3bc6444db9bed415e21fa93ff', {
          headers: {
            'Accept': 'application/json'
          },
          params: {
            q: 'tesla',
            from: '2024-06-22',
            sortBy: 'publishedAt',
            apiKey: '2a923ca3bc6444db9bed415e21fa93ff',
            page: page,
            pageSize: 5
          }
        });
        console.log('API Response:', response.data);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [page]);
  if (loading) {
    return (
      <div className="loading-dots">
        Loading<span>.</span><span>.</span><span>.</span>
      </div>
    );
  }
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
     
      <button className="btn btn-danger tesla"     > <h1>Tesla News</h1></button>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
             <p className='date'>{new Date(article.publishedAt).toLocaleString()}</p>
             <div className='alldetails'>
              <div className='data'>
            <h2>{article.title}</h2>
             <p>{article.description}</p>
             </div>
            <Link to={`/article/${index}`} state={{ article }}>
              <img className='image'
                src={article.urlToImage || 'https://via.placeholder.com/150'} 
                alt={article.title} 
                style={{ cursor: 'pointer', maxWidth: '100%' }} 
              />
            </Link>
            </div>
          </li>
        ))}
        
      </ul>
      <div>
   <div className='previous'>
    <button type="button" class="btn btn-primary previous"  onClick={() => setPage(page > 1 ? page - 1 : 1)} disabled={page === 1}>Previous</button>
    <button type="button" class="btn btn-primary pervious"  onClick={() => setPage(page + 1)}>Next</button>
  
    </div>

      </div>
    </div>
  );
};

export default BlogPosts;

