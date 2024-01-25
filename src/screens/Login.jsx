import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    try {
      e.preventDefault();
      console.log(email);
      console.log(password);
    } catch (error) {}
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
