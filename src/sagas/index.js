import { signupWatchers } from './Signup';
import { loginWatchers } from './Login';
import { uploadBannerWatchers } from './UploadBanner';
import { retreiveBannerWatchers } from './RetrieveBanner';
import { otpWatchers } from './Otp';
import { signupContentWatchers } from './SignupContent';
import { vendorInfoWatchers } from './VendorInfo';
import { vendorListWatchers } from './VendorList';

export default function* rootWatchers() {
  yield [
    signupWatchers(),
    loginWatchers(),
    uploadBannerWatchers(),
    retreiveBannerWatchers(),
    otpWatchers(),
    signupContentWatchers(),
    vendorInfoWatchers(),
    vendorListWatchers(),
  ];
}
