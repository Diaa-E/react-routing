import { Link } from "react-router-dom";

const Popeye = ({ }) => {

    return (
        <div>
            <p>Hi, my name is Popeye</p>
            <Link to={"/"}>Go back</Link>
        </div>
    )
};

export default Popeye;