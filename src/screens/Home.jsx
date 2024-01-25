import { useDispatch } from "react-redux";
import { useGetForYouPostQuery } from "../features/postApiSlice";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../features/authSlice";
import { useLogoutMutation } from "../features/userApiSlice";

function Home() {
  const { data, isLoading, isError } = useGetForYouPostQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const res = await logout();
      dispatch(logoutUser());
      navigate("/");
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  };
  return (
    <>
      {isLoading ? (
        <div>No data available.</div>
      ) : isError ? (
        <div>No data available.</div>
      ) : (
        data.map((post, index) => (
          <div key={index}>
            <hr />
            <div>{post.post}</div>
            <div>{post.tags}</div>
          </div>
        ))
      )}
      <button
        onClick={handleLogout}
        className="py-2 px-4 bg-blue-500"
        type="submit"
      >
        Logout
      </button>
    </>
  );
}

export default Home;
