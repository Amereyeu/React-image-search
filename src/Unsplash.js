import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import Loader from "./components/Loader";
import Search from "./components/Search";

function Unsplash() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);


  const fetchImages = async () => {
    setIsLoading(true);

    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=iLGh-MhQzPK03xbVQ5yVfN28CahYkBXG5M8j2tBH6H4`
    );

    const data = await res.json();

    setImages(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search query={query} setQuery={setQuery} fetchImages={fetchImages} />
          <div className="image-list">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
          ;
        </>
      )}
    </>
  );
}

export default Unsplash;
