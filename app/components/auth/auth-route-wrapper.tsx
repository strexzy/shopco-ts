import { type PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router";
import { Spinner } from "~/components/ui/spinner";
import { useAuth } from "~/context/AuthContext";

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
