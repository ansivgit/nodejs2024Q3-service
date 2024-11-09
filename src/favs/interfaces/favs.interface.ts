export interface Favs extends Record<string, string[]> {
  artists: string[]; // favorite artists ids
  albums: string[];
  tracks: string[];
}
