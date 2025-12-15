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
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormLogin />
      </CardContent>
      <CardFooter>
        <Link className="text-sm" to="/auth/register">
          Don't have an account? Create one!
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Login;
