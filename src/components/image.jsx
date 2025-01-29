import { useState } from "react";

const Image = (props) => {
  const [loadingError, setLoadingError] = useState(true);

  const handleLoadingError = () => {
        setLoadingError(true);
        props.onError();
    };

  return (
    <img
      {...props}
      style={
        loadingError
          ? {
              visibility: "hidden",
              width: "0px",
              height: "0px",
            }
          : {}
      }
      onError={handleLoadingError}
      onLoad={() => setLoadingError(false)}
    />
  );
};

export default Image;
