import { useState } from 'react';

export function useFavorites(id: number): [boolean, () => void, () => void] {
  const favorites = window.localStorage.getItem('favoritesList');
  let favoritesList: number[] = favorites ? JSON.parse(favorites) : [];

  const [inFavorites, setFavorite] = useState<boolean>(
    Boolean(
      favoritesList.find(value => {
        return value === id;
      }) || null
    )
  );

  function remove(): void {
    favoritesList = favoritesList.filter(value => value !== id);
    window.localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
    setFavorite(false);
  }

  function add(): void {
    remove();
    favoritesList.push(id);
    window.localStorage.setItem('favoritesList', JSON.stringify(favoritesList));
    setFavorite(true);
  }

  return [inFavorites, add, remove];
}
