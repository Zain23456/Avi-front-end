import styles from "./BirdList.module.css"
import BirdCard from "../../components/BirdCard/BirdCard";
import { useNavigate } from "react-router-dom";

const BirdList = (props) => {
  console.log("birdlist props:", props);
  const navigate = useNavigate();

  return (
    <>
      <main className={styles.container}>
      <h1>Bird List</h1>
      <button onClick={() => {navigate("/birds/new")}}>add a bird</button>
        {props.birds.map(bird => (
          <BirdCard handleSeen={props.handleSeen} handleAddWishlist={props.handleAddWishlist} bird={bird} key={bird._id}/>
        ))}
      </main>
    </>
  )
}

export default BirdList