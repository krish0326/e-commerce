import { PropagateLoader } from "react-spinners";
import { useEffect, useState } from "react";
const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="text-center">
          <h2 className="text-3xl text-semibold mb-4">Order Successful!</h2>
          <p>Your Order has been Successful placed</p>
        </div>
      )}
    </div>
  );
};

export default Success;
