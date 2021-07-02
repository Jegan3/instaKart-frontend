import { signupWatchers } from './Signup';
import { loginWatchers } from './Login';
import { otpWatchers } from './Otp';
import { vendorInfoWatchers } from './VendorInfo';
import { thriftProfileWatchers } from './ThriftProfile';
import { vendorListWatchers } from './VendorList';
import { vendorStatusWatchers } from './VendorStatus';
import { industryInfoWatchers } from './IndustryInfo';

export default function* rootWatchers() {
  yield [
    signupWatchers(),
    loginWatchers(),
    otpWatchers(),
    vendorInfoWatchers(),
    thriftProfileWatchers(),
    vendorListWatchers(),
    vendorStatusWatchers(),
    industryInfoWatchers(),
  ];
}
