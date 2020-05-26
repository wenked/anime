import React from 'react';




const SearchBar = (props) => {
    const [searchTerm,setSearchTerm] = React.useState('');

    const onInputChange = (event) => {
        setSearchTerm(event.target.value)
    }
    


    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(searchTerm);
        
    }


    return (
        <div className="ui search ">
            <form onSubmit={onFormSubmit} className="ui form">
                <input type="text" value={searchTerm} onChange={onInputChange}/>
            </form>
        </div>
    )


}

export default SearchBar;