import Single from "../../components/single/CustomerSingle"
import { singleUser } from "../../data/leaderData"
import "./user.scss"

const User = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}

export default User