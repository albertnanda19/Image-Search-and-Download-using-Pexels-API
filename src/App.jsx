import { useState, useEffect } from "react";
import{ ImageList, LightBox, LoadMoreButton, SearchImage } from './components';
import Swal from "sweetalert2";

const App = () => {
  const [ images, setImages ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ searchTerm, setSearchTerm ] = useState(null);

  const [ lightBoxVisible, setLightBoxVisible ] = useState(false);
  const [ lightBoxImage, setLightBoxImage ] = useState('');
  const [ lightboxTitle, setLightBoxTitle ] = useState('');
  
  const apiKey = "jxROVZlZXppmIn5SoG5twQ7y5zIWRn4MzwFa2eKResm7jR7uV7hKJh2q";
  const perPage = 15;

  useEffect(() => {
    const apiUrl = searchTerm
      ? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}`
      : `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;

    fetch(apiUrl, {
      headers: { Authorization: apiKey }
    }).then(res => res.json())
      .then(data => {
        setImages(prevImages => [ ...prevImages, ...data.photos]);
      })
      .catch(
        () => Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!"
        })
      );
  },[currentPage, searchTerm]);

  const loadMoreImages = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    setImages([]);
    setCurrentPage(1);
  }

  const showLightBox = (title, img) => {
    setLightBoxImage(img);
    setLightBoxTitle(title);
    setLightBoxVisible(true);
  };

  const hideLightBox = () => {
    setLightBoxVisible(false);
  };

  return (
    <>
      <SearchImage onSearch={handleSearch}/>
      <ImageList images={images} onImageClick={showLightBox}  />
      <LoadMoreButton loadMore={loadMoreImages} />
      <LightBox 
        lightBoxImage={lightBoxImage} 
        lightBoxVisible={lightBoxVisible}  
        lightboxTitle={lightboxTitle}
        hideLightBox={hideLightBox}
      />
    </>
  )
};

export default App;