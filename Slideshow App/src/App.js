import React, { Fragment, useState, useEffect } from 'react'
import 'h8k-components'

import { image1, image2, image3, image4 } from './assets/images'
import { Thumbs, Viewer } from './components'

const title = 'Catalog Viewer'

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1
    },
    {
      thumb: image2,
      image: image2
    },
    {
      thumb: image3,
      image: image3
    },
    {
      thumb: image4,
      image: image4
    }
  ]

  const [ catalogs ] = useState([...catalogsList])
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [ slideTimer, setSlideTimer ] = useState(null)
  const [ slideDuration ] = useState(3000)
  const [isSlideShowActive, setIsSlideShowActive] = useState(false);
  // Handle Previous Button Click
  const handlePrevClick = () => {
    const prevIndex = (activeIndex === 0) ? catalogs.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  // Handle Next Button Click
  const handleNextClick = () => {
    const nextIndex = (activeIndex === catalogs.length - 1) ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index)
  }

  // Toggle Slide Show
  const toggleSlideShow = () => {
    if (isSlideShowActive) {
      clearInterval(slideTimer);
      setSlideTimer(null);
    } else {
      const timer = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex === catalogs.length - 1 ? 0 : prevIndex + 1));
      }, slideDuration); // Set an interval to automatically move to the next image
      setSlideTimer(timer);
    }
    setIsSlideShowActive(!isSlideShowActive);
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (slideTimer) {
        clearInterval(slideTimer);
      }
    };
  }, [slideTimer]);



  return (
    <Fragment>
      <h8k-navbar header={ title }></h8k-navbar>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={ catalogs[activeIndex].image } />
            <div className='layout-row justify-content-center align-items-center mt-20'>
            <button 
              className="icon-only outlined"
              data-testid="prev-slide-btn"
              onClick={handlePrevClick}
            >
              <i className="material-icons">arrow_back</i>
            </button>
              <Thumbs 
                items={ catalogs } 
                currentIndex={ activeIndex }
                onThumbnailClick={handleThumbnailClick} 
              />
            <button 
              className="icon-only outlined"
              data-testid="next-slide-btn"
              onClick={handleNextClick}
            >
              <i className="material-icons">arrow_forward</i>
            </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input 
            type='checkbox'
            data-testid='toggle-slide-show-button'
            onChange={toggleSlideShow} // Handle slideshow toggle
            checked={isSlideShowActive}
          /> 
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  )
}

export default App

