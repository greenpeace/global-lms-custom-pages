function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67ThqfunDcB":
        Script1();
        break;
  }
}

function Script1()
{
  var printButton = document.createElement('input');
printButton.setAttribute('type', 'button');

printButton.setAttribute('id', 'CustomPrint');

printButton.setAttribute('value', 'Print Page');

printButton.setAttribute('onClick', 'window.print()');

document.body.insertBefore(printButton, document.body.firstChild);

$(".volume").after($("#CustomPrint"));
$("#CustomPrint").addClass('btn cs-button')
$(".volume").hide();
}

