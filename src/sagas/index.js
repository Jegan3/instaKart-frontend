import { signupWatchers } from './Signup';
import { loginWatchers } from './Login';
import { otpWatchers } from './Otp';
import { vendorInfoWatchers } from './VendorInfo';
import { thriftProfileWatchers } from './ThriftProfile';
import { vendorListWatchers } from './VendorList';
import { vendorStatusWatchers } from './VendorStatus';
import { ThriftVendorInfoWatchers } from './ThriftVendorInfo';
import { thriftAddProductWatchers } from './ThriftAddProduct';
import { thriftCategoryWatchers } from './ThriftCategory';
import { thriftDetailsWatchers } from './ThriftDetails';
import { productInfoWatchers } from './ProductInfo';
import { thriftStoreInfoWatchers } from './ThriftStoreInfo ';

export default function* rootWatchers() {
  yield [
    signupWatchers(),
    loginWatchers(),
    otpWatchers(),
    vendorInfoWatchers(),
    thriftProfileWatchers(),
    vendorListWatchers(),
    vendorStatusWatchers(),
    ThriftVendorInfoWatchers(),
    thriftAddProductWatchers(),
    thriftCategoryWatchers(),
    thriftDetailsWatchers(),
    productInfoWatchers(),
    thriftStoreInfoWatchers(),
  ];
}
