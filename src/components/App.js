// import React, { useState, useEffect } from 'react';
// import '../styles/App.css';
// import { Loader } from './Loader';
// import { PhotoFrame } from './PhotoFrame';

// const App = () => {
//   const [photoId, setPhotoId] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [photoData, setPhotoData] = useState(null);

//   useEffect(() => {
//     if (photoId) {
//       setLoading(true);
//       fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
//         .then((response) => response.json())
//         .then((data) => {
//           setPhotoData(data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error('Error fetching photo data:', error);
//           setLoading(false);
//         });
//     }
//   }, [photoId]);

//   const handlePhotoIdChange = (event) => {
//     setPhotoId(event.target.value);
//   };

//   return (
//     <div id="main">
//       <div className="input-container">
//         <label htmlFor="photo-id-input">Id number</label>
//         <input
//           id="photo-id-input"
//           type="number"
//           value={photoId}
//           onChange={handlePhotoIdChange}
//         />
//       </div>
//       {loading ? (
//         <Loader />
//       ) : photoData ? (
//         <PhotoFrame url={photoData.url} title={photoData.title} />
//       ) : null}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';

const App = () => {
  const [photoId, setPhotoId] = useState('');
  const [loading, setLoading] = useState(false);
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    if (photoId) {
      setLoading(true);

      // Reset photoData while loading
      setPhotoData(null);

      fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .then((response) => response.json())
        .then((data) => {
          setPhotoData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching photo data:', error);
          setLoading(false);
        });
    }
  }, [photoId]);

  const handlePhotoIdChange = (event) => {
    setPhotoId(event.target.value);
  };

  return (
    <div id="main">
      <div className="input-container">
        <label htmlFor="photo-id-input">Id number</label>
        <input
          id="photo-id-input"
          type="number"
          value={photoId}
          onChange={handlePhotoIdChange}
        />
      </div>
      {loading ? (
        <Loader />
      ) : photoData ? (
        <PhotoFrame url={photoData.url} title={photoData.title} />
      ) : null}
    </div>
  );
};

export default App;

