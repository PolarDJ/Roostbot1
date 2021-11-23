module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "r!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODg5MDAwNjk0ODY1MTAwODEy.YUa4ag.8DFmYxzelRgMlH2vPsUU1PgPa_g", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "889000694865100812", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "WvPtVP0vjRLmwUbkOkHOAnnLQfxVV4L6", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RED", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "node1.cjstevenson.com",
    port: (25504),
    pass: "lookbehindyou", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "d0b242d6e4664cc9a3ec602c1c8ce7f6", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "feec6aed78be4c7dabbdf412c12b19e8", //Spotify Client Secret
  },
};
