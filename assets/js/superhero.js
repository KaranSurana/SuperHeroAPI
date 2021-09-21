// creating a new set for favourite superhero ids

var arr = new Set([]);

// getting the id of the superhero from the query in search parameters to display the stats and image of the superhero in the html file

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// api calls using id
var request = new XMLHttpRequest();
request.open('GET', "https://www.superheroapi.com/api.php/3096301930603620/" + params.id, true);
request.responseType = 'json'
request.onload = function () {
    var newCharacterJSON = this.response;


    // adding the stats to the html page using javascript
    document.getElementById("imagehero").src = newCharacterJSON.image.url;
    document.getElementById("name").innerText = newCharacterJSON.name;

    document.getElementById("fullname").innerText = newCharacterJSON.biography['full-name'];
    document.getElementById("aliasesname").innerText = newCharacterJSON.biography['aliases'];
    document.getElementById("placeofbirth").innerText = newCharacterJSON.biography['place-of-birth'];
    document.getElementById("first-appearance").innerText = newCharacterJSON.biography['first-appearance'];
    
    document.getElementById("strength").innerText = newCharacterJSON.powerstats['strength'];
    document.getElementById("speed").innerText = newCharacterJSON.powerstats['speed'];
    document.getElementById("power").innerText = newCharacterJSON.powerstats['power'];
    document.getElementById("durability").innerText = newCharacterJSON.powerstats['durability'];
    document.getElementById("intelligence").innerText = newCharacterJSON.powerstats['intelligence'];









    document.getElementById("publisher").innerText = newCharacterJSON.biography['publisher'];
    
    document.getElementById("group-affiliation").innerText = newCharacterJSON.connections['group-affiliation'];
    
    document.getElementById("atag").onclick = function () {
        // adding superhero to the created set at the beginning
        // this set will get id from the url parameters
        document.getElementById("atag").innerHTML = '<i class="fas fa-check-circle"></i> Added Successfully!';
        arr.add(params.id);
        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        // editing cookies for favourite superhero of the users according to their preferences
        var existingCookie = getCookie("favHero");
        console.log(existingCookie)
        arr.add(existingCookie);
        document.cookie = "favHero="+Array.from(arr).join(',');
        console.log(document.cookie)
        
    }

}
request.send();



document.getElementById("atag").addEventListener("click",function(){
    console.log("hel")
    document.getElementById("atag").style.backgroundColor="rgb(0, 255, 0)";
})