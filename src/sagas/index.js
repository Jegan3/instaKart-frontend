import { signupWatchers } from './Signup';
import { loginWatchers } from './Login';
import { otpWatchers } from './Otp';
import { vendorInfoWatchers } from './VendorInfo';
import { vendorListWatchers } from './VendorList';
import { vendorStatusWatchers } from './VendorStatus';
import { StoreInfoWatchers } from './StoreInfo';
import { thriftCategoryWatchers } from './ThriftCategory';
import { thriftDetailsWatchers } from './ThriftDetails';
import { productInfoWatchers } from './ProductInfo';
import { thriftStoreInfoWatchers } from './ThriftStoreInfo ';
import { cartWatchers } from './Cart';
import { addCartWatchers } from './AddCart';
import { checkoutWatchers } from './Checkout';
import { addStoreWatchers } from './AddStore';
import { resetPasswordWatchers } from './ResetPassword';
import { updatePasswordWatchers } from './UpdatePassword';
import { vendorCompanyDetailsWatchers } from './VendorCompanyDetails';
import { productMessageWatchers } from './ProductMessage';
import { paymentStatusWatchers } from './PaymentStatus';
import { profileWatchers } from './Profile';
import { getListYourAdsWatchers } from './ListYourAds';
import { productListWatchers } from './ProductList';
import { userListWatchers } from './UserList';
import { productWatchers } from './Product';
import { categoryPageWatchers } from './CategoryPage';


export default function* rootWatchers() {
  yield [
    signupWatchers(),
    loginWatchers(),
    otpWatchers(),
    vendorInfoWatchers(),
    vendorListWatchers(),
    vendorStatusWatchers(),
    StoreInfoWatchers(),
    thriftCategoryWatchers(),
    thriftDetailsWatchers(),
    productInfoWatchers(),
    thriftStoreInfoWatchers(),
    cartWatchers(),
    addCartWatchers(),
    checkoutWatchers(),
    addStoreWatchers(),
    resetPasswordWatchers(),
    updatePasswordWatchers(),
    vendorCompanyDetailsWatchers(),
    productMessageWatchers(),
    paymentStatusWatchers(),
    profileWatchers(),
    getListYourAdsWatchers(),
    productListWatchers(),
    userListWatchers(),
    productWatchers(),
    categoryPageWatchers(),
  ];
}
