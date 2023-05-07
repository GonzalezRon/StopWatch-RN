import Stopclock from "./Stopclock";
import { isActive } from "./Stopclock";

it('returns true if active',()=>{
    expect(isActive()).not.toBe(true); 
})


//works