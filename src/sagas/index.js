import { signupWatchers } from './Signup';
import { loginWatchers } from './Login';

export default function* rootWatchers() {
  yield [
    signupWatchers(),
    loginWatchers(),
  ];
}
