import Avatar from '../components/avatar.js';
import DateFormatter from '../components/date-formatter.js';
import CoverImage from './cover-image.js';
import Link from 'next/link';

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  authorPicture,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author} picture={authorPicture} />
    </div>
  );
}
