import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/schools`
        );
        setSchools(response.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div>
      <h2>Schools List</h2>
      <div className="school-grid">
        {schools.map((school) => (
          <div key={school.id} className="school-card">
            <img
              src={`${import.meta.env.VITE_API_URL}/${school.image}`}
              alt={school.name}
              className="school-image"
            />
            <h3>{school.name}</h3>
            <p>{school.address}</p>
            <p>{school.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSchools;
