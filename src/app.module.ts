import { Module } from '@nestjs/common';
import { AlbumModule } from './album/album.module';
import { ArtistModule } from './artist/artist.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AlbumModule, ArtistModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
