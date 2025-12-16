import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import FormLogin from "~/components/features/auth/FormLogin";
import { Link } from "react-router";

const Login = () => {
  return (
    <Card className="w-full max-w-75">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Login to your account to start using the service!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormLogin />
      </CardContent>
      <CardFooter>
        <Link className="text-sm" to="/register">
          Don't have an account? Create one!
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Login;
