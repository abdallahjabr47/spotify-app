import React, { useEffect } from 'react';
import './Browse.css';
import { useDataLayerValue } from '../../Logic/DataLayer';
import { reducerCases } from '../../Logic/Constants';
import { routeNames } from '../../Utils/Utils';
import { spotify } from "../../Logic/spotify";
import SearchCard from '../../Components/BrowseCard/BrowseCard';
import { useOutletContext } from 'react-router-dom';

export default function YourLibrary() {
  const [{ token , browseCategories }, dispatch] = useDataLayerValue();
  const setActiveTab = useOutletContext();

  useEffect(() => {
    setActiveTab(routeNames.BROWSE_CATEGORIES);

    const getBrowseCategories = async () => {
      try {
        const response = await spotify.getCategories();
        const categories = response.categories.items.map((category) => {
          return {
            id: category.id,
            name: category.name,
            imageUrl: category.icons.length > 0 ? category.icons[0].url : null,
          };
        });
        dispatch({
          type: reducerCases.SET_BROWSE_CATEGORIES,
          browseCategories: categories,
        });
      } catch (error) {
        console.error('Error fetching browse categories:', error);
      }
    };

    if (token) {
      getBrowseCategories();
    }
  }, [token, dispatch]);

  return (
    <div className="browseCategoriesBody">
      <div className="browseCategoriesTitle">
        <h2>Browse All</h2>
      </div>

      <div className="browseCategoriesData">
          {browseCategories.map((category) => (
            <SearchCard
              key={category.id}
              name={category.name}
              imageUrl={category.imageUrl}
            />
          ))}
      </div>
    </div>
  );
}