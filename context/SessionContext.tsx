import { useStorageState } from '@/hooks/useStorageState';
import useGoogleLogin from '@/remote/google/useGoogleLogin';
import { useContext, createContext, type PropsWithChildren, useState, useEffect } from 'react';

interface MyUser {
    email: string,
    name: string | null,
    profile_photo: string | null,
}

const AuthContext = createContext<{
    googleSignIn: () => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
    user: MyUser | null;
}>({
    googleSignIn: () => null,
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
  const { google, googleLogin } = useGoogleLogin();

  useEffect(() => {
        if(google && !google.error && google.userInfo?.user){
            setSession(google.userInfo.idToken);
            setUser({
                email: google.userInfo.user.email,
                name: google.userInfo.user.name,
                profile_photo: google.userInfo.user.photo,
            });
        }
  }, [google]);

  return (
    <AuthContext.Provider
      value={{
        googleSignIn: () => {
          // Perform sign-in logic here
          googleLogin();
        },
        signOut: () => {
            setUser(null);
            setSession(null);
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