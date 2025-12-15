import { IUser } from "@/types/commonTypes/commonTypes";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useGetCurrentUserQuery } from "@/redux/api/auth/authApi";
import { setUser, logOut } from "@/redux/userSlice/userSlice";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/app/actions/auth";

interface IUserProviderValues {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);
  const reduxUser = useSelector((state: RootState) => state.auth.user);

  // Fetch current user if token exists
  const { data: userData, isLoading: isFetchingUser, error } = useGetCurrentUserQuery(
    undefined,
    {
      skip: !token, // Skip if no token
      refetchOnMountOrArgChange: true,
    }
  );

  // Update Redux store when user data is fetched
  useEffect(() => {
    if (userData?.success && userData?.data && token) {
      dispatch(setUser({
        user: userData.data as any,
        token,
        refreshToken: (reduxUser as any)?.refreshToken || null,
      }));
    } else if (error && token) {
      // If there's an error and we have a token, user might be invalid
      // Don't logout here, let the baseApi handle 401 errors
      console.error("Failed to fetch user:", error);
    }
  }, [userData, error, token, dispatch, reduxUser]);

  // Sync context user with Redux user
  const user = reduxUser as IUser | null;
  const isLoading = isFetchingUser;

  const handleSetUser = (newUser: IUser | null) => {
    if (newUser) {
      dispatch(setUser({
        user: newUser as any,
        token,
        refreshToken: (reduxUser as any)?.refreshToken || null,
      }));
    } else {
      dispatch(logOut());
    }
  };

  const handleLogout = async () => {
    try {
      await logoutAction()
      dispatch(logOut())
      router.push("/login")
    } catch (error) {
      console.error("Logout failed", error)
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser: handleSetUser, isLoading, setIsLoading: () => { }, logout: handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context == undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};

export default UserProvider;
