import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader className="food-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#bdbdbd"
    foregroundColor="#ecebeb"
    {...props}
  >
         <circle cx="138" cy="138" r="125" /> 
    <rect x="-1" y="290" rx="7" ry="7" width="280" height="30" /> 
    <rect x="0" y="341" rx="8" ry="8" width="280" height="40" /> 
    <rect x="94" y="361" rx="0" ry="0" width="4" height="22" /> 
    <rect x="3" y="409" rx="8" ry="8" width="84" height="25" /> 
    <rect x="179" y="402" rx="11" ry="11" width="100" height="35" />
  </ContentLoader>
)

export default Skeleton