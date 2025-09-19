import axios from "axios";

const SearchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 3yLD2cMGLWZid4uruggpTHjX_iXqqbO9fFMOHsEP18k'
        },
        params: {
            query: term,
        }
    });

    
    return response.data.results;
}

export default SearchImages;