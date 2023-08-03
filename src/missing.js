

$(document).on(":passagedisplay", function() {
	$("#passages").scrollTop(0);
});
$(document).on(':dialogopened', function (ev) {
	$("#ui-dialog-body").scrollTop(0);
});



$(document).on(':passagestart', function (ev) {
	if (!ev.passage.tags.includes('cf')) {
		State.variables.return = ev.passage.title;
	}
});


    //~ ~ ~ ~ SAVING (Auto/Name) ~ ~ ~ ~
	Setting.addHeader("Save Settings");


	Config.saves.isAllowed = function () {
		if (tags().includes('noreturn')) { 
			return false;
		}
		return true;
	};
	
			//~ ~ Autosave Toggle ~ ~
	Config.saves.autosave = function () {
		if (settings.autosave) {
			return true 
	}};
	Setting.addToggle("autosave", {
		label       : "Autosaves",
		default     : false,
	});
	
			//~ ~ Autoname Toggle ~ ~
	Save.onSave.add( function (save, details) {
		if (settings.autoname) {
			save.title = (State.getVar("$FirstName") ? State.getVar("$FirstName") : '???');
				//This is essentially asking if the variable is defined ? if yes show this - otherwise (:) show that
		} else if (details.type == "autosave") {
			//If Autoname is disabled but the autosave is enabled, this will be the name of the autosave
			save.title = "Autosave";
		} else {
			//This will prompt the player to enter a name for the save file
			save.title = prompt("Enter Save Name:", save.title);
	}});
	//--AUTONAME--
	Setting.addToggle("autoname", {
		label       : "Autoname",
		desc        : "description of title if enabled",
		default     : false,
	});
	

