// Elements
const codeInput = document.getElementById('code');
const outputFrame = document.getElementById('website');

// Function to run the code
function run() {
  const code = codeInput.value;
  const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(code);
  iframeDoc.close();
}