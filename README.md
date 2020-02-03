# CopyToken
CopyToken is a Chrome extension developed to copy access token in one click.

As we all know, we waste a lot of time to search the Access Token start and end while copying it for locally running UI. So this extension is aimed to simplify this task. When you hit the Token App, you will get response from it as valid JSON. We just want the `"access_token"` field's entry from this JSON. So the Chrome extension works very easily :- 

1. It selects all the text on the screen (which is stored in a variable)
2. `JSON.parse` the selected text 
3. Copy the `"access_token"` field to the clipboard!

Steps to add this extension to your Chrome Browser:- 
1. Clone this repo to your local machine.
2. Open Chrome and go to [Chrome Extensions Page](chrome://extensions).
3. At the top-right, enable **Developer Mode.**
4. Then a new section will appear at the top of your extensions. Select **"Load unpacked"** from it.
5. Navigate to the location where you cloned the repo. When inside the repo, Click on **"prod"** and click on **"Select Folder"**.
6. Et Voila! Now you will hopefully be able to see the Copy Icon in your Chrome Menu beside the address bar.

Usage is also quite simple:- Just open up your token app, and then click on the extension and click on **Copy Token** button!
