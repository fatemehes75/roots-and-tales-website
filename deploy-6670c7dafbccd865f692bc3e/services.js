document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with the class "pdfLink-cta"
  var pdfLinks = document.getElementsByClassName("pdfLink-cta-desktop");

  // Iterate through each element and attach the event listener
  Array.from(pdfLinks).forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the link from navigating to the PDF file

      var url = this.getAttribute("href"); // Get the URL of the PDF file
      var filename = this.getAttribute("download"); // Get the filename for the downloaded file

      // Trigger the download
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "blob";

      xhr.onload = function () {
        // Create a blob object representing the data as a file
        var blob = new Blob([xhr.response], { type: "application/pdf" });

        // Create a URL for the blob data, which can be used as the source of an iframe
        var blobUrl = URL.createObjectURL(blob);

        // Open the PDF in a new tab or window
        window.open(blobUrl, "_blank");
      };

      xhr.send();
    });
  });

  // Get all elements with the class "pdfLink-cta"
  var pdfLinksMobile = document.getElementsByClassName("pdfLink-cta-mobile");

  // Iterate through each element and attach the event listener
  Array.from(pdfLinksMobile).forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the link from navigating to the PDF file

      var url = this.getAttribute("href"); // Get the URL of the PDF file
      var filename = this.getAttribute("download"); // Get the filename for the downloaded file

      // Trigger the download
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "blob";

      xhr.onload = function () {
        // Create a blob object representing the data as a file
        var blob = new Blob([xhr.response], { type: "application/pdf" });

        // Create a URL for the blob data
        var blobUrl = URL.createObjectURL(blob);

        // Use an anchor element to trigger the download
        var a = document.createElement("a");
        a.style.display = "none";
        a.href = blobUrl;
        a.download = filename || "file.pdf"; // Set default filename if download attribute isn't present
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      };

      xhr.send();
    });
  });
});
