import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      try {
        const response = await axios.get('http://hn.algolia.com/api/v1/search?tags=front_page');
        setTopStories(response.data.hits);
      } catch (error) {
        console.error('Error fetching top stories:', error);
      }
    };

    fetchTopStories();
  }, []);

  return (
    <div>
      <h1>Top Stories</h1>
      <ul>
        {topStories.map(story => (
          <li key={story.objectID}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
