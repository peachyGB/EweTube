# EweTube

Finally! a social media platform just for ewe!

# Starting the JSON server
run "npm install"
run "npm start" to open up the html page. It is under [http://localhost:3000]
run "npm run server" to open up [http://localhost:7001/videos]

## Setting this up

If youre curious how I set this up:

1) I ran "json-server --watch db.json --port 7001" in the terminal. 7001 was a random number.
2) Then I edited the package.json file. In the "scripts" section I added 
"server": "json-server --watch db.json --port 7001"
So any time we used "run server" our custom server location would run.

Never really took the time to understand how these were all working togeather , but now Im glad I know it a little better. Happy to walk you through it so you can understand it also. --Peachy

# Video Embed iframe Template

  <!-- <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div> -->

<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/tDQw21ntR64" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).