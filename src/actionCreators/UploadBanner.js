export const getBannerUpload = (banner) => ({
  type: 'BANNER_UPLOAD_REQUEST',
  banner,
});

export const getBannerUploadSucccess = (banner) => ({
  type: 'BANNER_UPLOAD_SUCCESS',
  banner,
});

export const getBannerUploadFailure = (error) => ({
  type: 'BANNER_UPLOAD_FAILURE',
  error,
});
