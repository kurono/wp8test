/// <reference path="..//intellisense.js" />

/*globals ko*/

function SearchResultsViewModel(tweetViewModels) {
  /// <summary>
  /// A view model that renders the results of a twitter search.
  /// </summary>
  /// <param name="tweetViewModels">An array of TweetViewModel instances</param>
  
  // --- properties

  this.template = "searchResultsView";
  this.tweets = ko.observableArray(tweetViewModels);

}