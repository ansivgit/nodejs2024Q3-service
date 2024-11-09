import { Injectable } from '@nestjs/common';
import { Album } from 'src/album/entities/album.entity';
import { Artist } from 'src/artist/entities/artist.entity';
import { Track } from 'src/track/entities/track.entity';
import { User } from 'src/user/entities/user.entity';
import { testData } from './testData';

@Injectable()
export class DataBase {
  public albums: Album[] = [testData.album];
  public artists: Artist[] = [testData.artist];
  public favs: Record<string, string[]> = testData.favs;
  public tracks: Track[] = [testData.track];
  public users: User[] = [testData.user];
}
