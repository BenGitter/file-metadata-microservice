var $input = $("#inputfile");
var $label = $("#labelfile");
var $div = $label.find("div").eq(0);
var $content = $div.find(".content").eq(0);
var $submit = $("#submit");

$input.on("change", function(e){
  var filename = e.target.value.split("\\").pop();
  var parts = filename.split(" ");
  var letters = filename.split("");
  filename = parts.slice(0, 20).join("");
  var sum = 0;

  for(var i = 0; i < parts.length; i++){
    if(sum + parts[i].length > 18){
      if(sum > 13){
        break;
      }else{
        sum = 18;
      }
    }else{
      sum += parts[i].length;
    }
  }

  filename = letters.slice(0, sum).join("");
  if(sum < letters.length) filename+= "...";

  if(filename){
    $div
      .css("border-radius", "0px")
      .css("width", "400px")
      .css("height", "60px");
    $label
      .css("left", "calc(50vw - 200px)")
      .css("top", "calc(50vh - 30px)");
    $content
      .css("opacity", "0");

    setTimeout(function(){
      $content
        .html("<h2>" + filename + "</h2>")
        .end()
        .css("opacity", "1")
        .css("text-align", "left")
        .css("padding-top", ".1px");
      $submit
        .css("opacity", "1");
    }, 1000);
  }
});