import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
        <h1>Sorry!</h1>
        <p>The page cannot be found!</p>
        <p>Please click here to go back to the <Link style={{color: 'green'}} to="/">homepage</Link>!</p>
    </div>
  )
}
