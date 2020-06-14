const STORIES_FOLDER = '../../public/data/stories';
const storiesList = require(STORIES_FOLDER + '/stories.json');

const REMOTE_PATH_STUB = process.env.URL_STORIES_STUB;

const getStories = () => {
  const finalStoriesData = {};

  const storiesEntries = Object.entries(storiesList);
  for (const [level, storiesData] of storiesEntries) {
    const storyDataForLevel = storiesData.map(story => {
      const storyData = require(`${STORIES_FOLDER}/beginner/${story}.json`);
      storyData.audioPath = `${REMOTE_PATH_STUB}/${level}/${story}.mp3`;
      storyData.thumbnailPath = `${REMOTE_PATH_STUB}/${level}/${story}_tn.png`;
      storyData.paragraphs[0].header.imagePath = `${REMOTE_PATH_STUB}/${level}/${story}.png`;
      return storyData;
    });
    finalStoriesData[level] = storyDataForLevel;
  }
  return finalStoriesData;
};

module.exports = getStories;
