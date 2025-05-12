import { Avatar, Indicator } from "@mantine/core";
import {  IconBell, IconSettings, IconWashDryW } from "@tabler/icons-react";
import NavLinks from "./NavLinks";



const  Header=()=>{ 
return<div className="w-full bg-mine-shaft-950 px-6 text-white 
    h-20 flex justify-between items-center">
         <div className="flex gap-1 items-center  text-cyan-500">
        <IconWashDryW className="h-9 w-9 " stroke={1.5}/>
           <div className="text-3xl font-semibold ">
           WorkoNix
            </div>
         </div>
        <NavLinks />
    <div className="flex gap-2.5 items-center ">
           <div className="bg-mine-shaft-950 p-1.5 rounded-full">
            <IconSettings stroke={1.5}/>
            </div>
           <div className="bg-mine-shaft-950 p-1.5 rounded-full">
             <Indicator color="cyan.5" offset={6} size={9}  processing>
             <IconBell stroke={1.5} />
             </Indicator>
         </div>
           
         <div className="flex items-center gap-1.5">
         <Avatar src="avatar.png" alt="it's me"/>
            <div>Daisy</div>
         </div>
           
           
    </div>
</div>
}
export default Header;