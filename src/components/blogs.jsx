/**import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/styles/BlogPostPage.css'

// IMPORTING IMAGES - April 5-6
import CarriedoImage from '../assets/styles/images/TOUR/adAr/Carriedo.jpg';
import Aeroplane from '../assets/styles/images/TOUR/adAr/aeroplane.jpg';
import Baclaran from '../assets/styles/images/TOUR/adAr/Baclaran Church.jpg';
import ChinaTown from '../assets/styles/images/TOUR/adAr/chinaTown.jpg';
import Departure from '../assets/styles/images/TOUR/adAr/departureGrp.jpg';
import Depart from '../assets/styles/images/TOUR/adAr/departure.jpg';


const BlogPostPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Advance Party Chronicles: Manila Before the Madness - Day 1",
      date: "April 5-6, 2024",
      summary: "When the rest of the crew was still packing, we were already conquering...",
      images: [
        CarriedoImage, 
        Aeroplane, 
        Baclaran,
        ChinaTown,
        Departure,
        Depart,
      ],
      content: [
        "When the rest of the crew was still packing socks, I was already conquering Manila's night lights...",
        "By April 6, my friends and I decided that the best way to prepare...",
        "We laughed, got semi-lost, walked a ton, and somehow managed to make memories..."
      ],
    },
    {
      id: 2,
      title: "Subic Adventures - Day 2",
      date: "April 7, 2024",
      summary: "Exploring historic sites around Manila...",
      content: [
        "Our second day took us through Manila's historic landmarks...",
        "We visited Fort Santiago and Manila Cathedral...",
        "The day ended with beautiful sunset views at Rizal Park..."
      ],
     
    },
  ];
   ... rest of your component code remains the same ...
  
  return (
    <div className="blog-container">
      {/* Your JSX remains unchanged }
    </div>
  );
};

export default BlogPostPage;*/