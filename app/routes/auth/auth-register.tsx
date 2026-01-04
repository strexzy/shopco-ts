import { Link } from "react-router";
import { FormRegister } from "~/features";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/shared";

const Register = () => {
  return (
    <Card className="w-full max-w-75">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Registration</CardTitle>
        <CardDescription className="text-center">
          Create an account to start using the service!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormRegister />
      </CardContent>
      <CardFooter>
        <Link className="text-sm" to="/login">
          Already have an account? Sign in!
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Register;
