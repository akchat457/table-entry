$("#submitButton").one("click", function (e) {
  e.preventDefault();

  var id = $("input[name^=id]")
    .map(function (idx, elem) {
      return $(elem).val();
    })
    .get();
  var name = $("input[name^=name]")
    .map(function (idx, elem) {
      return $(elem).val();
    })
    .get();
  var city = $("input[name^=city]")
    .map(function (idx, elem) {
      return $(elem).val();
    })
    .get();
  var phone = $("input[name^=phone]")
    .map(function (idx, elem) {
      return $(elem).val();
    })
    .get();
  var email = $("input[name^=email]")
    .map(function (idx, elem) {
      return $(elem).val();
    })
    .get();

  $("#dataTable").removeClass("hidden");

  for (let i = 0; i < 5; i++) {
    $("#dataTable table").append(
      "<tbody>" +
        "<tr>" +
        "<td>" +
        id[i] +
        "</td>" +
        "<td>" +
        name[i] +
        "</td>" +
        "<td>" +
        city[i] +
        "</td>" +
        "<td>" +
        phone[i] +
        "</td>" +
        "<td>" +
        email[i] +
        "</td>" +
        "</tr>" +
        "</tbody>"
    );
  }
});
