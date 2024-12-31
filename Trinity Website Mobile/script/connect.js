 // Configure Monaco Editor loader
 require.config({
    paths: {
        // 'vs': 'monaco-editor/min/vs'
        'vs': 'package/min/vs'
    }
});

// Initialize Monaco Editor
require(['vs/editor/editor.main'], function () {
    var editor = monaco.editor.create(document.getElementById('code'), {
        value: [
            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>`
        ].join('\n'),
        language: 'html',
        theme: 'vs-dark'
    });
});

        // Add event listener to button
document.getElementById('mulai').addEventListener('click', function () {
    const value = editor.getValue(); // Get value from editor
    document.getElementById('crash').textContent = value; // Display it in the output div
});