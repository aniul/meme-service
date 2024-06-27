export const getOnlyHotValues = (meme) => meme.upvotes - meme.downvotes > 5;

export const getIntegerFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
