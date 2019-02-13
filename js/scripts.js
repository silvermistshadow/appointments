$(document).ready(function(){
  $("#apt-form").submit(function(){
    event.preventDefault();
    var yourname = $("input#yourname").val();
    var aptDesc = $("input#apt-desc").val();
    var aptDate = $("input#apt-date").val();
    var aptStartTime = $("input#apt-starttime").val();
    var aptEndTime = $("input#apt-endtime").val();

    $("#out-name").text("With:" + " " + yourname);
    $("#out-desc").text("For:" + " " + aptDesc);
    $("#out-date").text("On:" + " " + aptDate);
    $("#out-time").text("At:" + " " + aptStartTime + "-" + aptEndTime);

    $("#apt-made").show();
  });

});
