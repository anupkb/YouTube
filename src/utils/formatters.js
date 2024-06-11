// Format View Counts
export const formatViewCount = (viewCount) => {
  if (viewCount < 1000) return `${viewCount} views`;
  if (viewCount < 1000000) return `${(viewCount / 1000).toFixed(1)}k views`;
  if (viewCount < 1000000000)
    return `${(viewCount / 1000000).toFixed(1)}M views`;
  return `${(viewCount / 1000000000).toFixed(1)}B views`;
};

// Format Days Count
export const formatPublishedAt = (publishedAt) => {
  const now = new Date();
  const publishedDate = new Date(publishedAt);
  const diffTime = Math.abs(now - publishedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    return "Today";
  } else if (diffDays === 1) {
    return "1 day ago";
  } else if (diffDays < 30) {
    return `${diffDays} days ago`;
  } else if (diffDays < 365) {
    return `${Math.floor(diffDays / 30)} months ago`;
  } else {
    return `${Math.floor(diffDays / 365)} years ago`;
  }
};
