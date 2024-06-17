export const API_KEY = "AIzaSyCJlzAJplJ_AOdEsSGFFuzUMCh5pn2d8_0";
export const MAX_RESULTS = 100

export const YOUTUBE_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,localizations,statistics,contentDetails,liveStreamingDetails&maxResults=${MAX_RESULTS}&regionCode=IN&chart=mostPopular&key= ` +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEOS_SEARCH_API =
  `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${API_KEY}&q=` 
;


export const CommentsData = [
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Arindam Maiti",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [
          {
            name: "Arindam Maiti",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            replies: [
              {
                name: "Arindam Maiti",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                replies: [
                  {
                    name: "Arindam Maiti",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    replies: [

                      {
                        name: "Arindam Maiti",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        replies: [

                        ]
                      },
                    ]
                  },
                  {
                    name: "Arindam Maiti",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    replies: [

                    ]
                  },
                ]
              },
            ]
          },
        ]
      },

    ]
  },
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Arindam Maiti",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [

        ]
      },
    ]
  },
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: []
  },
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Arindam Maiti",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [

        ]
      },
    ]
  },
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: []
  },
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: [
      {
        name: "Arindam Maiti",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        replies: [

        ]
      },
    ]
  },
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: []
  },
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: []
  },
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: []
  },
  {
    name: "Arindam Maiti",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    replies: []
  },
];

export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&videoId=TL7CTzzWi9A&maxResults=50 &key=" + API_KEY;

export const OFFSET_LIVE_CHAT = 50

