import { signupWatchers } from './Signup';
import { loginWatchers } from './Login';
import { uploadBannerWatchers } from './UploadBanner';
import { retreiveBannerWatchers } from './RetrieveBanner';

export default function* rootWatchers() {
  yield [
    signupWatchers(),
    loginWatchers(),
    uploadBannerWatchers(),
    retreiveBannerWatchers(),
  ];
}
