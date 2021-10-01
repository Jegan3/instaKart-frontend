/*eslint-disable*/
import React from 'react';
import ImageGallery from 'react-image-gallery';

// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/1000/600/',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/1000/600/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/1000/600/',
//   },
// ];


const ImageSlider = ({ background, images }) => (
  <div>
    {images &&
    <ImageGallery
      items={images}
      lazyLoad
      showPlayButton
      thumbnailPosition="right"
      disableThumbnailScroll={false}
      // disableKeyDown
      // infinite = {true}
      // autoPlay = {true}
      showBullets={false}
      showIndex={false}
      showNav={false}
      // showThumbnails
      // onClick={onClick}
      onThumbnailClick={(e, index) => background(images[index])}
      // disabled={disabled}
      // fullscreen
      // original
      // thumbnail
      // showFullscreenButton
      // useBrowserFullscreen
    /> }
  </div>
);

export default ImageSlider;
