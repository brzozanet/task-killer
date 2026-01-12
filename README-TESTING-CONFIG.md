Komenda npm install:

npm install --save-dev jest @testing-library/react @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom identity-obj-proxy jest-environment-jsdom

package.json:

"jest": {

      "testEnvironment": "jsdom",
        "moduleNameMapper": {
            "\\.(css)$": "identity-obj-proxy"
        }
    }

.bablelrc

{
"presets": [
"@babel/preset-env",
[
"@babel/preset-react",
{
"runtime": "automatic"
}
]
]
}
