import { PubSubManager } from "./PubsubManaegr"

setInterval(()=>{
    PubSubManager.getInstance().userSubscribe("1","Apple")
},5000) 