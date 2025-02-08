import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import About from "./pages/About";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const Users = [
    {
      Name: "Alice Johnson",
      City: "New York",
      Age: 28,
      Profession: "Software Engineer",
      ProfilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      Name: "Michael Smith",
      City: "Los Angeles",
      Age: 34,
      Profession: "Graphic Designer",
      ProfilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      Name: "Sophia Martinez",
      City: "Chicago",
      Age: 25,
      Profession: "Marketing Specialist",
      ProfilePhoto: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      Name: "David Brown",
      City: "Houston",
      Age: 40,
      Profession: "Architect",
      ProfilePhoto: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      Name: "Emma Wilson",
      City: "San Francisco",
      Age: 30,
      Profession: "Data Scientist",
      ProfilePhoto: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=10"
      );
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavBar />

      <div className="p-10">
        {Users.map((elem, idx) => (
          <Card
            key={idx}
            userName={elem.Name}
            age={elem.Age}
            city={elem.City}
            photo={elem.ProfilePhoto}
            prof={elem.Profession}
          />
        ))}
      </div>

      <div className="p-10">
        <button
          onClick={getData}
          className="bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Data"}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="p-5 mt-5 bg-gray-950 text-white">
          {data.length === 0 && !loading && !error && <p>No data available.</p>}
          {data.map((elem, idx) => (
            <div
              key={idx}
              className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3"
            >
              <img className="h-40" src={elem.download_url} alt="Random" />
              <h1>{elem.author}</h1>
            </div>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
