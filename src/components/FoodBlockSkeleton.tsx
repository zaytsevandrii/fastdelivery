import React from "react"
import ContentLoader from "react-content-loader"


const Skeleton = (props:any) => (
    <div className="food-block-wrapper">
        <ContentLoader
            className="food-block"
            speed={2}
            width={280}
            height={465}
            viewBox="0 0 280 465"
            backgroundColor="#bdbdbd"
            foregroundColor="#ecebeb"
            {...props}
        >
          <rect x="7" y="295" rx="7" ry="7" width="260" height="58" /> 
    <rect x="4" y="393" rx="8" ry="8" width="84" height="25" /> 
    <rect x="179" y="388" rx="11" ry="11" width="100" height="35" /> 
    <rect x="12" y="11" rx="0" ry="0" width="250" height="234" />
        </ContentLoader>
    </div>
)

export default Skeleton
