/// <reference path="..//intellisense.js" />

/*globals application*/

function TweetViewModel(tweet) {
  /// <summary>
  /// A view model that represents a single tweet
  /// </summary>
  /// <param name="tweet">A tweet as returned by the twitter search API</param>

  // --- properties

  this.template = "tweetDetailView";
  this.author = tweet.from_user;
  this.text = tweet.text;
  this.id = tweet.id;
  this.time = parseDate(tweet.created_at);
  this.thumbnail = tweet.profile_image_url;

  // --- public functions

  this.select = function () {
    /// <summary>
    /// Selects this tweet, causing the application to navigate to a tweet-view.
    /// </summary>
    application.navigateTo(this);
  };

  // --- private functions
  function parseDate(date) {
    /// <summary>
    /// Parses the tweet date to give a more readable format.
    /// </summary>
    var diff = (new Date() - new Date(date)) / 1000;

    if (diff < 60) {
      return diff.toFixed(0) + " seconds ago";
    }
    
    diff = diff / 60;
    if (diff < 60) {
      return diff.toFixed(0) + " minutes ago";
    }

    diff = diff / 60;
    if (diff < 10) {
      return diff.toFixed(0) + " hours ago";
    }

    diff = diff / 24;
    return diff.toFixed(0) + " days ago";
  }
}
