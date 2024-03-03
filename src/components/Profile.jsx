import { Link, Outlet, useParams } from "react-router-dom"
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefualtProfile from "./DefaultProfile";

const Profile = ({ }) => {

    const { name } = useParams();

    return (
        <div>
            <h1>Profile title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vel perferendis nesciunt fugit enim suscipit obcaecati, 
                maiores a officia inventore totam recusandae nihil id 
                officiis impedit eum, nostrum, delectus porro sint.
            </p>
            <Link to="/">Home</Link>
            <hr />
            <h2>Active profile is here:</h2>
            {
                name === "popeye" ?
                (
                    <Popeye />
                ):
                name === "spinach" ?
                (
                    <Spinach />
                ):
                <DefualtProfile/>
            }
        </div>
    )
}

export default Profile