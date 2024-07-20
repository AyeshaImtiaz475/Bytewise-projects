function countCharacters() {
    var content = document.getElementById("myDiv").innerText;
    
    var charCount = content.length;
    document.getElementById("charCount").textContent = charCount;

    var uppercaseCount = content.replace(/[^A-Z]/g, "").length;
    document.getElementById("uppercaseCount").textContent = uppercaseCount;

    var lowercaseCount = content.replace(/[^a-z]/g, "").length;
    document.getElementById("lowercaseCount").textContent = lowercaseCount;
}

function countLines() {
    var content = document.getElementById("myDiv").innerText;

    var lineCount = content.split("\n").length;
    document.getElementById("lineCount").textContent = lineCount;
}

function countWords() {
    var content = document.getElementById("myDiv").innerText;

    var wordCount = content.trim().split(/\s+/).length;
    document.getElementById("wordCount").textContent = wordCount;
}