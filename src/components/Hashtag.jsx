import React from "react";

const Hashtag = (props) => {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      #{props.hash}
    </span>
  );
};

export default Hashtag;
