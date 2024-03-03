import { Link } from "react-router-dom"

const Profile = ({ }) => {
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
        </div>
    )
}

export default Profile