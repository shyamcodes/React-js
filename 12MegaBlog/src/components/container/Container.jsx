import React from "react";

// Container accept the properties as children .
//children only name u can write any name 
// container is box we define in height widths and styling property in this

function Container({ children }) {
    return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;

}

export default Container


