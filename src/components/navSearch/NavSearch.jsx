
import SearchIcon from '@mui/icons-material/Search';
export default function NavSearch() {
  // Search Icon
  function handleSubmit(event) {
    event.preventDefault();
    console.log("event handler");
  }
  // Input buscar
  function handleKeyDown(event) {
    const arrayVocales = 'aeiou'.split('');
    if (arrayVocales.includes(event.key)){
      event.preventDefault();
    };
    console.log(event.key);
  }
  return (
    <form className="NavSearch" action="index.html">
        <input type="search" placeholder="Buscar" onKeyDown={handleKeyDown}/>
        <button type="submit" onClick={handleSubmit}><SearchIcon/></button>
    </form>
  )
}
