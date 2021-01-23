import { signupWatchers } from './Signup';
import { loginWatchers } from './Login';
import { bannerWatchers } from './Banner';

export default function* rootWatchers() {
  yield [
    signupWatchers(),
    loginWatchers(),
    bannerWatchers(),
  ];
}
