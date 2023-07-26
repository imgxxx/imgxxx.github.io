function getVisitorIPInfo() {
  var url = "/";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        var ipAddress = data.ipAddress;

        document.getElementById("ip-address").value = ipAddress;
        getIPInfo();
      }
    })
    .catch(error => {
      console.error(error);
    });
}
function getIPInfo() {
  var ipAddress = document.getElementById("ip-address").value;
  var url = "/api/ip/" + ipAddress;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.status === "success") {
        var location = data.location;

        document.getElementById("result").innerHTML = "IP地址: " + ipAddress + "<br>位置: " + location;
      } else {
        document.getElementById("result").innerHTML = "无法获取IP地址的位置信息";
      }
    })
    .catch(error => {
      console.error(error);
    });
}
