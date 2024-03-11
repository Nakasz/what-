const detectLanguage = require('deteksi_bahasa');

const textToDetect = 'Hello, how are you?';

const detectedLanguage = detectLanguage.detect(textToDetect);

console.log(Detected language: ${detectedLanguage});