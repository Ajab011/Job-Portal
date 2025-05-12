

import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const Dreamjob=()=>{
    return(
        <div className="flex items-center px-16 ">
          <div className="flex flex-col w-[45%] gap-3">
            <div className="text-7xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-cyan-400">
                Find your <span>dream </span><br /> <span>job</span> with us
            </div>
            <div className=" text-cyan-200 text-2xl">
               Start exploring your dream job
            </div>
            
           
            <div className="flex gap-3 mt-5">
   <TextInput  className="bg-mine-shaft-900  rounded-lg p-1 px-2  text-mine-shaft-100 [&-input]:!text-mine-shaft-200" 
      variant="unstyled"
      label="Job Type"
     
      placeholder="Full Time"
    />
    <TextInput className="bg-mine-shaft-900  rounded-lg p-1 px-2  text-mine-shaft-100 [&-input]:!text-mine-shaft-200" 
      variant="unstyled"
      label="Job Title"

      placeholder="Software Engineer"
    />
    <div className="flex items-center justify-center 
    h-full w-20 bg-cyan-600 text-mine-shaft-100 rounded-lg p-2 hover:bg-cyan-900 cursor-pointer">
        <IconSearch className="h-[85%] w-[85%]"/>
    </div>
            </div>
          </div>
          <div className="w-[65%] flex items-center justify-center">
            <div className="w-[30rem] relative">
              <img src="Boy.png" alt="Boy photo"/> 
              <div className=" absolute -right-10 w-fit top-[50%] border-cyan-400 border rounded-lg p-2 backdrop-blur-md">
                <div className="text-centre mb-1  text-mine-shaft-50 ">10k+ got job</div>
                 <Avatar.Group>
      <Avatar src="avatar-7.png" />
      <Avatar src="avatar-8.png" />
      <Avatar src="avatar-9.png" />
      <Avatar>+9k</Avatar>
    </Avatar.Group>
                </div> 
                <div className="absolute -left-24 w-fit top-[23%] border-cyan-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
                  <div className="flex gap-2 items-center ">
                      <div className="w-12 h-12 p-1 bg-mine-shaft-800 rounded-lg ">
                        <img src="Google1.png" alt="google image" />
                      </div>
                      <div className="text-sm text-mine-shaft-50 ">
                        <div className="text-xl">Software Engineer</div>
                        <div className="text-mine-shaft-200 ">New York</div>
                      
                      </div>
                  </div>
                  <div className="flex gap-2 justify justify-around  text-mine-shaft-200 text-m">
                    <span>1 day ago</span>
                    <span>120 Applicants</span>
                  </div>
                  </div>  
            </div>
          </div>
        </div>
    );
}
export default Dreamjob;