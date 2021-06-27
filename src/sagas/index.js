import { signupWatchers } from './Signup';
import { loginWatchers } from './Login';
import { otpWatchers } from './Otp';
import { signupContentWatchers } from './SignupContent';
import { vendorInfoWatchers } from './VendorInfo';
import { vendorListWatchers } from './VendorList';
import { vendorStatusWatchers } from './VendorStatus';
import { industryInfoWatchers } from './IndustryInfo';

export default function* rootWatchers() {
  yield [
    signupWatchers(),
    loginWatchers(),
    otpWatchers(),
    signupContentWatchers(),
    vendorInfoWatchers(),
    vendorListWatchers(),
    vendorStatusWatchers(),
    industryInfoWatchers(),
  ];
}
