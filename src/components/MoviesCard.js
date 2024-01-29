import { IMG_CDN_URL } from "../utils/constants"

const MoviesCard = ({poster_path}) => {
  return (
    <div className="w-48 p-2">
      <img alt="card" src={IMG_CDN_URL+poster_path}></img>
    </div>
  )
}

export default MoviesCard
