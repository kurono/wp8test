/// <reference path="intellisense.js" />

/*globals $ document window $ ApplicationViewModel ko TwitterSearchViewModel*/

document.addEventListener("deviceready", initializeViewModel, false);

var application;

function initializeViewModel() {

  application = new ApplicationViewModel();
  ko.applyBindings(application);

  // handle the back button
  application.backButtonRequired.subscribe(function (backButtonRequired) {
    if (backButtonRequired) {
      document.addEventListener("backbutton", onBackButton, false);
    } else {
      document.removeEventListener("backbutton", onBackButton, false);
    }
  });

  var viewModel = new TwitterSearchViewModel();
  viewModel.loadState();
  application.navigateTo(viewModel);
}


function onBackButton() {
  application.back();
}