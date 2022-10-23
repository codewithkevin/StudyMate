import AuthStack from "./AuthStack";
import { useAuthentication } from './../Hooks/useAuthentication';
import MyStack from './MyStack';

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <MyStack /> : <AuthStack />;
}
