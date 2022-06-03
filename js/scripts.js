$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    const userName = $("input#name").val();
    const userSelect1 = $("select#selectOne").val();
    const userSelect2 = $("select#selectTwo").val();
    const userSelect3 = $("select#selectThree").val();
    const userSelect4 = $("select#selectFour").val();
    const userSelect5 = $("select#selectFive").val();

    $(".name").text(userName);

    if (userSelect1 === "frontEnd") {
      $("#resultPython").show();
      $("#resultPython").siblings().hide();

      } else {
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-cs" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-cs") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-cs" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-cs") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-js" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-cs") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-python" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-cs") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-cs" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-cs") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-js" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-cs") {
          $("#resultJS").show();
          $("#resultJS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-python" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-cs") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-cs" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-js") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-js" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-js") {
          $("#resultJS").show();
          $("#resultJS").siblings().hide();
        }

        if (userSelect1 === "frontEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-python" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-js") {
          $("#resultPython").show();
          $("#resultPython").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-cs" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-js") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-js" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-js") {
          $("#resultJS").show();
          $("#resultJS").siblings().hide();
        }
        if (userSelect1 === "frontEnd" && userSelect2 === "selectTwo-csjs" && userSelect3 === "selectThree-python" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-js") {
          $("#resultPython").show();
          $("#resultPython").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-cs" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-cs") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-js" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-cs") {
          $("#resultJS").show();
          $("#resultJS").siblings().hide();
        }
        if (userSelect1 === "frontEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-python" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-cs") {
          $("#resultPython").show();
          $("#resultPython").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-cs" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-cs") {
          $("#resultCS").show();
          $("#resultCS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-js" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-cs") {
          $("#resultJS").show();
          $("#resultJS").siblings().hide();
        }
        if (userSelect1 === "frontEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-python" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-cs") {
          $("#resultPython").show();
          $("#resultPython").siblings().hide();
        }
        if (userSelect1 === "frontEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-cs" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-js") {
          $("#resultPython").show();
          $("#resultPython").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-js" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-js") {
          $("#resultJS").show();
          $("#resultJS").siblings().hide();
        }
        if (userSelect1 === "frontEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-python" && userSelect4 === "selectFour-cs" && userSelect5 === "selectFive-js") {
          $("#resultPython").show();
          $("#resultPython").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-cs" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-js") {
          $("#resultJS").show();
          $("#resultJS").siblings().hide();
        }
        if (userSelect1 === "backEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-js" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-js") {
          $("#resultJS").show();
          $("#resultJS").siblings().hide();
        }
        if (userSelect1 === "frontEnd" && userSelect2 === "selectTwo-python" && userSelect3 === "selectThree-python" && userSelect4 === "selectFour-python" && userSelect5 === "selectFive-js") {
          $("#resultPython").show();
          $("#resultPython").siblings().hide();
        }
      }
  });
});