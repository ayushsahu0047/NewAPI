import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPosts from './components/BlogPosts';
import ArticleDetail from './components/ArticleDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BlogPosts />} />
        <Route path="/article/:index" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

