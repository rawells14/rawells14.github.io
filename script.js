$(document).ready(function () {
	//Init
	hideWrappers();
	$(TitleWrapper).show();

	//Navbar
    $(".navbutton").click(function(event){
    	$("#navbar li").removeClass("active");
    	$(this).addClass("active");

    	if ($("#Home").hasClass("active")){
    		hideWrappers();
    		$(TitleWrapper).show();
    	};
    	if ($("#Resume").hasClass("active")){
    		hideWrappers();
    		$(ResumeWrapper).show();
    	};
    	if ($("#Contact").hasClass("active")){
    		hideWrappers();
    		$(ContactWrapper).show();
    	};
    });


    });

function hideWrappers(){
	$(TitleWrapper).hide();
	$(ResumeWrapper).hide();
	$(ContactWrapper).hide();
}







