import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/userApiSlice";
import { setCredentials } from "../features/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        email,
        password
      }).unwrap();

      console.log("🚀 ~ res:", res);
      dispatch(setCredentials({ ...res.data }));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        onSubmit={handleLogin}
        className="flex flex-col space-y-2  m-4 items-center "
      >
        <div className="pt-10 pb-4">
          <p>Email</p>
          <input
            className="p-3 py-4 w-full focus:ring-offset-white focus:outline focus:outline-blue-500 font-roboto rounded border bg-black border-gray-600/75  "
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-3">
          <p>Password</p>
          <input
            className="p-3 py-4 w-full focus:ring-offset-white focus:outline focus:outline-blue-500 font-roboto rounded border bg-black border-gray-600/75  "
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="py-2 px-4 bg-blue-500" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
