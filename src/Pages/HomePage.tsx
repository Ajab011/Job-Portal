import Header from "../Header/Header"
import Companies from "../LandingPage/Companies"
import Dreamjob from "../LandingPage/Dreamjob"
import JobCategory from "../LandingPage/JobCategory"

const HomePage=()=>{
return(
 <div className= "min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
  <Header/>
  <Dreamjob/>
  <Companies/>
  <JobCategory/>
</div>
)
}
export default HomePage