export const getIndustryInfo = () => ({
  type: 'INDUSTRY_INFO_REQUEST',
});

export const getIndustryInfoSuccess = (industryInfo) => ({
  type: 'INDUSTRY_INFO_SUCCESS',
  industryInfo,
});

export const getIndustryInfoFailure = (error) => ({
  type: 'INDUSTRY_INFO_FAILURE',
  error,
});
