import { IMG_CDN_URL } from "../utils/constants"
import defaultImg from "../assests/Netflix_Logo_PMS.png"
const MoviesCard = ({poster_path}) => {

  let image = poster_path?IMG_CDN_URL+poster_path:defaultImg
  return (
    <div className="w-48 p-2">
      <img alt="card" src={image}></img>
    </div>
  )
}

export default MoviesCard;