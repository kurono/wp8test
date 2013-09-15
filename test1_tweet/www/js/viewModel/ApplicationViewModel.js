/// <reference path="..//intellisense.js" />

/*globals ko*/

function ApplicationViewModel() {
  /// <summary>
  /// The view model that manages the view model back-stack
  /// </summary>
  
  // --- properties

  this.viewModelBackStack = ko.observableArray();

  this.backButtonRequired = ko.dependentObservable(function () {    
    return this.viewModelBackStack().length > 1;
  }, this);

  // --- functions

  this.navigateTo = function (viewModel) {
    this.viewModelBackStack.push(viewModel);
  };

  this.back = function () {
    this.viewModelBackStack.pop();
  };

  this.templateSelector = function (viewModel) {
    return viewModel.template;
  };
}