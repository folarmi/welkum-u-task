import { useState, useEffect } from "react";
import Loading from "./Loading";

function Universities() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const myTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(myTimeout);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <p>Welcome to universities</p>
    </div>
  );
}

export default Universities;
