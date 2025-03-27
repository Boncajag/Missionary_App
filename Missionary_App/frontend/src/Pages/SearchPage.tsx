import React, { useState } from "react";
import { Search } from "../types/Search.ts";
import { motion } from "framer-motion"; // Import Framer Motion
import { FriendProfile } from "../Components/FriendProfile"; // Import the FriendProfile component
import { useNavigate } from 'react-router-dom';

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState<Search>({
    user_id: 0,
    first_name: "",
    last_name: "",
    mission: "",
    home_city: "",
  });
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (searchParams.first_name) queryParams.append("first_name", searchParams.first_name);
      if (searchParams.last_name) queryParams.append("last_name", searchParams.last_name);
      if (searchParams.mission) queryParams.append("mission", searchParams.mission);
      if (searchParams.home_city) queryParams.append("home_city", searchParams.home_city);
  
      const url = `https://localhost:5000/api/Missionary/search?${queryParams.toString()}`;
      console.log("Fetching:", url);
  
      const response = await fetch(url);
      
      if (!response.ok) {
        // If response is not OK, throw an error
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      console.log("Response Data:", data);
  
      // Check if data exists and handle accordingly
      if (data && data.length > 0) {
        setResults(data);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddFriend = (user_id: number) => {
    console.log(`Adding missionary with ID: ${user_id} as a friend.`);
    navigate('/friends');
  };
  
  const handleViewProfile = (user_id: number) => {
    console.log(`Viewing profile of missionary with ID: ${user_id}`);
    navigate('/profile');
  };  

  return (
    <div className="search-container">
      <h1>Missionary Search</h1>
      <input
        className="search-input"
        type="text"
        name="first_name"
        placeholder="First Name"
        value={searchParams.first_name}
        onChange={handleInputChange}
      />
      <input
        className="search-input"
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={searchParams.last_name}
        onChange={handleInputChange}
      />
      <input
        className="search-input"
        type="text"
        name="mission"
        placeholder="Mission"
        value={searchParams.mission}
        onChange={handleInputChange}
      />
      <input
        className="search-input"
        type="text"
        name="home_city"
        placeholder="Home City"
        value={searchParams.home_city}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      <div className="results-container">
        {results.length > 0 ? (
          <section className="flex flex-col gap-4 mt-7 w-full">
            {results.map((missionary, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                className="p-4 rounded-xl bg-gray-100 hover:bg-gray-200 transition w-full max-w-full mx-auto"
              >
                <FriendProfile
                  key={missionary.user_id} // Ensure each missionary has a unique ID
                  imageSrc={`/avatars/${missionary.user_id}.png`} // Example for avatar
                  name={`${missionary.first_name} ${missionary.last_name}`} // Full name
                  mission={missionary.mission} // Mission field
                  email={missionary.email} // Email field (if available)
                  homeCityState={`${missionary.home_city}, ${missionary.home_state}`} // Combined city and state
                  birthday={missionary.birthday} // Birthday field (if available)
                  postCount={21} // Placeholder for post count
                />
                
                {/* Add the buttons within the same card */}
                <div className="flex gap-4 mt-4">
                  {/* Button to Add Friend */}
                  <button 
                    className="secondary-button"
                    onClick={() => handleAddFriend(missionary.user_id)}
                  >
                    Add as Friend
                  </button>
                
                  {/* Button to View Profile */}
                  <button 
                    className="secondary-button"
                    onClick={() => handleViewProfile(missionary.user_id)}
                  >
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </section>
        ) : (
          !loading && <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
