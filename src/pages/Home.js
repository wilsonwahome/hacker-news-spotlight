import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await axios.get('http://hn.algolia.com/api/v1/search?tags=front_page');
      setStories(response.data.hits);
    };

    fetchStories();
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <h1>Top Stories</h1>
      <div className="card-container"> {/* Container for the cards */}
        {stories.map((story) => (
          <div key={story.objectID} className="card">
            <h2>{story.title}</h2>
            <p>{story.author}</p>
            <p>{story.created_at}</p>
            <button onClick={() => handleClick(story.url)}>Read Article</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
