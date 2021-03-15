import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Search from './Components/SearchBar';
import Announcer from './announcer';

const links = [
    { id: '1', keyword: 'Living Room', endPoint: '', imageURL: '' },
    { id: '2', keyword: 'House Exterior' },
    { id: '3', keyword: 'Garden' },
    { id: '4', keyword: 'Kitchen' },
    { id: '5', keyword: 'Bedroom' },
    { id: '6', keyword: 'Bathroom' },
    { id: '7', keyword: 'Dining Room' },
    { id: '8', keyword: 'Backyard' },
    { id: '9', keyword: 'Swimming Pool' },
    { id: '10', keyword: 'Foyer' },
    { id: '11', keyword: 'Deck' },
    { id: '12', keyword: 'Porch' },
    { id: '13', keyword: 'Staircase' },
    { id: '14', keyword: 'Home Office' },
    { id: '15', keyword: 'Patio' },
    { id: '16', keyword: 'Gym' },
    { id: '17', keyword: 'Outdoor Living Room' },
    { id: '18', keyword: 'Shed' },
    { id: '19', keyword: 'Corridor' },
    { id: '20', keyword: 'Balcony' },
    { id: '21', keyword: 'Laudry' },
    { id: '22', keyword: 'Garage' },
    { id: '23', keyword: 'Outdoor Kitchen' },
    { id: '24', keyword: 'Closet' },
    { id: '25', keyword: 'Attic' },
    { id: '26', keyword: 'Sitting Area' },
    { id: '27', keyword: 'Stairway' },
    { id: '28', keyword: 'Cape Cod' },
    { id: '29', keyword: 'Contemporary' },
    { id: '30', keyword: 'Colonail' },
    { id: '31', keyword: 'Tudor' },
    { id: '32', keyword: 'Craftsman' },
    { id: '33', keyword: 'Mediterranean Spanish' },
    { id: '34', keyword: 'Ranch' },
    { id: '35', keyword: 'Neoclassical Greek Revival' },
    { id: '36', keyword: 'Victorian' },
    { id: '37', keyword: 'Praire' },
    { id: '38', keyword: 'Farmhouse' },
    { id: '39', keyword: 'Pueblo Revival' },
    { id: '40', keyword: 'Italianate' },
    { id: '41', keyword: 'Log' },
    { id: '42', keyword: 'Oriental' },
    { id: '43', keyword: 'Art Deco' },
    { id: '44', keyword: 'Grey' },
    { id: '45', keyword: 'Beige' },
    { id: '46', keyword: 'Brown' },
    { id: '47', keyword: 'White' },
    { id: '48', keyword: 'Tan' },
    { id: '49', keyword: 'Black' },
    { id: '50', keyword: 'Green' },
    { id: '51', keyword: 'Turquoise' },
    { id: '52', keyword: 'Pink' },
    { id: '53', keyword: 'Orange' },
    { id: '54', keyword: 'Yellow' },
    { id: '55', keyword: 'Red' },
    { id: '56', keyword: 'Violet' },
    { id: '57', keyword: 'Orange' },
];

const filterlinks = (links, query) => {
    if (!query) {
        return links;
    }

    return links.filter((link) => {
        const linkkeyword = link.keyword.toLowerCase();
        return linkkeyword.includes(query);
    });
};

const App = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredlinks = filterlinks(links, searchQuery);

    return (
        <Router>
            <div classkeyword="App">
                <Announcer
                    message={`${filteredlinks.length} links`}
                />
                <h1>APVenture - Search Component</h1>
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                <ul>
                    {filteredlinks.map((link) => (
                        <li key={link.id}>{link.keyword}</li>
                    ))}
                </ul>
            </div>
        </Router>
    );
};

export default App;
