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


const ImageSlider = ({ background,images }) => {

  // const abc = (e, index, thumbnail) => {
  //   console.log('original',index)
  //   console.log('e',e)
  //   console.log('thumbnail',thumbnail)
  // }
  return (
  <div>
    {images && 
    <ImageGallery
      items={images}
      lazyLoad={true}
      showPlayButton={false}
      thumbnailPosition = 'right'
      disableThumbnailScroll={true}
      disableKeyDown={true}
      // infinite = {true}
      // autoPlay = {true}
      showBullets={false}
      showIndex={false}
      showNav={false}
      showThumbnails={true}
      lazyLoad={true}
      showPlayButton={false}
      // onClick={onClick}
      onThumbnailClick={(e, index) => background(images[index])}
      // disabled={disabled}
      fullscreen
      original
      thumbnail
      showFullscreenButton
      useBrowserFullscreen
    />}
  </div>
)}


export default ImageSlider;
