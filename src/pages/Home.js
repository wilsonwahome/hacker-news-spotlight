import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [topStories, setTopStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await axios.get('http://hn.algolia.com/api/v1/search?tags=front_page');
        setTopStories(response.data.hits);
        setLoading(false);
      } catch (error) {
        setError('Error fetching top stories');
        setLoading(false);
      }
    };

    fetchTopStories();
  }, []);

  return (
    <div>
      <h1>Top Stories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {topStories.map(story => (
            <li key={story.objectID}>
              <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
