# UI Avatars   
Generate avatar images based on user initials.  
    
[![Build status](https://clydedsouza.visualstudio.com/UI%20Avatars%20npm/_apis/build/status/UI%20Avatars%20Master)](https://clydedsouza.visualstudio.com/UI%20Avatars%20npm/_build/latest?definitionId=26) 
![Azure DevOps tests (branch)](https://img.shields.io/azure-devops/tests/clydedsouza/UI%20Avatars%20npm/26/master.svg) 
![Azure DevOps coverage](https://img.shields.io/azure-devops/coverage/clydedsouza/UI%20Avatars%20npm/26.svg) 
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/6411dc46f633403d884210c8ec4839c5)](https://app.codacy.com/app/ClydeDz/uiavatars-npm?utm_source=github.com&utm_medium=referral&utm_content=ClydeDz/uiavatars-npm&utm_campaign=Badge_Grade_Dashboard) 
![MIT License](https://img.shields.io/static/v1.svg?label=📜%20License&message=MIT&color=informational)   

## Usage  
After installing, simply import it in your file. 

```javascript
const uiavatars = require("ui-avatars");
```

Consume the `generateAvatar()` API to get an avatar URL that you can use directly as an image. Supply the settings object to this method to generate the avatar image URL accordingly. You can either supply one or all settings, based on your requirement. All settings are pretty self-explanatory.  

```javascript
var avatarURL = uiavatars.generateAvatar({
            uppercase: true,
            name: "Tony Stark",
            background: "990000",
            color: "000000",
            fontsize: 0.5,
            bold: true,
            length: 2,
            rounded: true,
            size: 250
        }); 
```
   
## Examples 
> Clicking on the images below opens the image in a browser window.  

[![Sample image 1](https://ui-avatars.com/api/?background=990000&color=fff&name=Clyde%20D%27Souza&size=120)](https://ui-avatars.com/api/?background=990000&color=fff&name=Clyde%20D%27Souza&size=120) 
[![Sample image 2](https://ui-avatars.com/api/?bold=true&size=120)](https://ui-avatars.com/api/?bold=true&size=120) 
[![Sample image 3](https://ui-avatars.com/api/?name=Tony%20Stark&length=1&size=120&font-size=0.8&background=23ff6c&color=000000)](https://ui-avatars.com/api/?name=Tony%20Stark&length=1&size=120&font-size=0.8&background=23ff6c&color=000000)    

## Release notes 
Release notes can be found [here](https://github.com/ClydeDz/uiavatars-npm/releases).   

## License
This npm package is licensed under MIT. [UI Avatars](https://ui-avatars.com/) may be licensed separately.  

## Credits  
[UI Avatars](https://ui-avatars.com/) developed by [Lasse Rafn](https://twitter.com/lasserafn) / [GitHub](https://github.com/LasseRafn/ui-avatars).  
This npm package is developed by [Clyde D'Souza](https://clydedsouza.net).
