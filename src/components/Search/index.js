import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './Search.css';
const Search = ({ handleSearch }) => {
	const [value, setValue] = useState('');
	return (
		<form
			className="search-form"
			onSubmit={(e) => {
				e.preventDefault();
				value && handleSearch(value);
			}}
		>
			<input
				className="search-input"
				type="text"
				placeholder="Search"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className="btn">
				<FiSearch />
			</button>
		</form>
	);
};

export default Search;
