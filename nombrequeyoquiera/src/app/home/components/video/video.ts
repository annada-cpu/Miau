import { Component, signal } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-video',
  imports: [YouTubePlayerModule],
  templateUrl: './video.html',
  styleUrl: './video.scss',
})
export class Video {
  videoId = signal('KrdYrVNuOEE');
}
