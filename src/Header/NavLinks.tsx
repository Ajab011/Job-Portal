import { Link, useLocation } from "react-router-dom";

const NavLinks=()=>{
    const links=[
        {name:"Find Jobs",url:"find-jobs"},
        {name:"Find Talent",url:"find-talent"},
        {name:"Upload Job",url:"upload-job"},
        {name:"About us",url:"about"}
    ]
    const location=useLocation();
    return <div className="flex gap-5">
        {
            links.map((link,index)=> <div>
                 <Link key={index} to={link.url}>{link.name} </Link>
                </div>)
           
            
        }
    </div>
}
export default NavLinks;