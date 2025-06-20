
import { BlogPost } from '@/types/blogTypes';
import { webDevelopmentPost } from './blog/webDevelopmentPost';
import { modernJavaScriptPost } from './blog/modernJavaScriptPost';
import { reactBestPracticesPost } from './blog/reactBestPracticesPost';

export type { BlogPost } from '@/types/blogTypes';

export const blogPosts: BlogPost[] = [
  webDevelopmentPost,
  modernJavaScriptPost,
  reactBestPracticesPost,
];
