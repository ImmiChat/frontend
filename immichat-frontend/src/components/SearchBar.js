import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="container">
      <input type="text" placeholder="Search..." />
      <div className="search" />
    </div>
  );
}
