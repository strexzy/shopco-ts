import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { authApi } from "~/features/auth/api";
import { safeAxiosError } from "~/lib/safe-axios-error";
import type {
  AuthContextTypes,
  AuthCredentials,
  AuthError,
  RegisterCredentials,
  User,
} from "~/types/auth";

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | undefined | null>(
    undefined,
  );
  const [authError, setAuthError] = useState<AuthError | undefined | null>(
    undefined,
  );

  const login = async ({ email, password }: AuthCredentials) => {
    try {
      const { data } = await authApi.login({ email, password });
      localStorage.setItem("authToken", data.authToken);
      setCurrentUser(data.user);
      setAuthError(null);
    } catch (error) {
      const msg = safeAxiosError(error);
      setAuthError(msg);
    }
  };

  const register = async ({
    email,
    firstName,
    password,
    passwordConfirm,
  }: RegisterCredentials) => {
    try {
      const { data } = await authApi.register({
        email,
        firstName,
        password,
        passwordConfirm,
      });
      localStorage.setItem("authToken", data.authToken);
      setCurrentUser(data.user);
      setAuthError(null);
    } catch (error) {
      const msg = safeAxiosError(error);
      setAuthError(msg);
    }
  };

  const logout = async () => {
    try {
      await authApi.logout();
      localStorage.removeItem("authToken");
      setCurrentUser(null);
      setAuthError(null);
    } catch (error) {
      const msg = safeAxiosError(error);
      setAuthError(msg);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await authApi.me();
        localStorage.setItem("authToken", data.authToken);
        setCurrentUser(data.user);
      } catch {
        localStorage.removeItem("authToken");
        setCurrentUser(null);
      }
    };
    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, authError, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("Error: no context provided!");
  }
  return ctx;
};

export default AuthContext;
