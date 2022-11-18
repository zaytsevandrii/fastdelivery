import ContentLoader from "react-content-loader"

const SkeletoneFood = (props) => (
    <ContentLoader style={{marginLeft:'90px',marginTop:'90px'}}
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#bdbdbd"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="55" y="351" rx="7" ry="7" width="181" height="20" /> 
    <rect x="0" y="391" rx="8" ry="8" width="278" height="11" /> 
    <rect x="-2" y="418" rx="11" ry="11" width="286" height="10" /> 
        <rect x="1" y="16" rx="100" ry="100" width="281" height="254" />
    </ContentLoader>
)

export default SkeletoneFood
