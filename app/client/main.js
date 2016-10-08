import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.intro.onRendered(function () {
  $(".rotate").textrotator({
	  animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
	  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
	  speed: 1250 // How many milliseconds until the next word show.
	});
});






Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
