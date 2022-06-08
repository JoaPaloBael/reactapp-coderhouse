
import SearchIcon from '@mui/icons-material/Search';
export default function NavSearch() {
  return (
    <form className="NavSearch" action="index.html">
        <input type="search" placeholder="Buscar" />
        <button type="submit"><SearchIcon/></button>
    </form>
  )
}
