import { Module } from '@nestjs/common';
import { AlbumModule } from './album/album.module';
import { ArtistModule } from './artist/artist.module';
import { FavsModule } from './favs/favs.module';
import { TrackModule } from './track/track.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AlbumModule, ArtistModule, FavsModule, TrackModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
