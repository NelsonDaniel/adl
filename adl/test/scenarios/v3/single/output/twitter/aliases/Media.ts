import { AnimatedGif } from '../models/AnimatedGif';
import { Photo } from '../models/Photo';
import { Video } from '../models/Video';
export type Media = Xor<Photo, Video, AnimatedGif>;
