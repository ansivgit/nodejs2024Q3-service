export const testData = {
  artist: {
    id: 'e150017f-5164-4c97-a88d-a823787f67d2',
    name: 'AnnaZas',
    grammy: true,
  },
  user: {
    id: 'e150017f-5164-4c97-a88d-a823787f67d2',
    login: 'AnnaZas',
    password: '1111111',
    version: 1,
    createdAt: 1655000000,
    updatedAt: 1655000000,
  },
  album: {
    id: 'b45b710b-1feb-472c-bab5-d335df887cad',
    name: 'Best Album',
    year: 2022,
    artistId: 'e150017f-5164-4c97-a88d-a823787f67d2',
  },
  track: {
    id: 'c657dccb-220b-48a6-9bc9-470396461bd9',
    name: 'Best track',
    artistId: 'e150017f-5164-4c97-a88d-a823787f67d2',
    albumId: 'b45b710b-1feb-472c-bab5-d335df887cad',
    duration: 262,
  },
  favs: {
    artists: ['e150017f-5164-4c97-a88d-a823787f67d2'],
    albums: ['b45b710b-1feb-472c-bab5-d335df887cad'],
    tracks: ['c657dccb-220b-48a6-9bc9-470396461bd9'],
  },
};
