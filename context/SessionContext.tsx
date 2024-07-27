import { useStorageState } from '@/hooks/useStorageState';
import useBackendLogin from '@/remote/backend/useBackendSession';
import useGoogleLogin from '@/remote/google/useGoogleLogin';
import useKakaoLogin from '@/remote/kakao/useKakaoLogin';
import { useContext, createContext, type PropsWithChildren, useState, useEffect } from 'react';

interface MyUser {
    email: string,
    name: string | null,
    profile_photo: string | null,
}

const AuthContext = createContext<{
    googleSignIn: () => void;
    kakaoSignIn: () => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
    user: MyUser | null;
}>({
    googleSignIn: () => null,
    kakaoSignIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
    user: null,
});

// This hook can be used to access the user info.
function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  //const [ token, setToken ] = useState<string | null>(null);
  const [ user, setUser ] = useState<MyUser | null>(null);
  const { google, googleLogin, googleLogout } = useGoogleLogin();
  const { kakao, signInWithKakao, signOutWithKakao } = useKakaoLogin();
  const { sessionToken, backendLogin } = useBackendLogin();

  useEffect(() => {
    if(google && !google.error && google.userInfo?.user){
      setSession(google.userInfo.idToken);
      //backendLogin(google.userInfo.idToken!, "google");
      setUser({
          email: google.userInfo.user.email,
          name: google.userInfo.user.name,
          profile_photo: google.userInfo.user.photo,
      });
    }
  }, [google]);

  useEffect(() => {
    if(kakao && !kakao.error && kakao.user && kakao.token){
      setSession(kakao.token.accessToken);
      //backendLogin(kakao.token.accessToken, "kakao");
      console.log(kakao.token.accessToken);
      setUser({
        email: kakao.user.email,
        name: kakao.user.nickname,
        profile_photo: kakao.user.profileImageUrl,
    });
    }
  }, [kakao]);

  useEffect(() => {
    if(sessionToken)
      setSession(sessionToken);
  }, [sessionToken])

  return (
    <AuthContext.Provider
      value={{
        googleSignIn: () => {
          // Perform sign-in logic here
          googleLogin();
        },
        kakaoSignIn: () => {
          signInWithKakao();
        },
        signOut: () => {
            setUser(null);
            setSession(null);
            googleLogout();
            signOutWithKakao();
        },
        session,
        isLoading,
        user
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export {
    useSession,
    SessionProvider
}