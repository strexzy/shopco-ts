import { useNavigate } from "react-router";
import { useAuth } from "~/context/AuthContext";
import { Spinner } from "~/components/ui/spinner";
import { useEffect, type PropsWithChildren } from "react";

const AuthRouteWrapper = ({ children }: PropsWithChildren) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser !== null && currentUser !== undefined)
      navigate("/", { replace: true });
  }, [currentUser, navigate]);

  if (typeof currentUser === "undefined")
    return (
      <main className="w-full h-screen flex justify-center items-center">
        <Spinner />
      </main>
    );

  return <>{children}</>;
};

export default AuthRouteWrapper;
