import NextImage, { type ImageProps } from 'next/image';

const SLOW_REMOTE_IMAGE_HOSTS = new Set(['i.ibb.co', 'ibb.co']);

function shouldBypassOptimization(src: ImageProps['src']): boolean {
  if (typeof src !== 'string') {
    return false;
  }

  try {
    const parsed = new URL(src);
    return SLOW_REMOTE_IMAGE_HOSTS.has(parsed.hostname);
  } catch {
    return false;
  }
}

export default function SafeImage(props: ImageProps) {
  const unoptimized = props.unoptimized ?? shouldBypassOptimization(props.src);

  return <NextImage {...props} unoptimized={unoptimized} />;
}