async function gettAllUsa(){
    let usa=  await fetch(" https://jsonplaceholder.typicode.com/users")
        .then(response => {
            
            return response.json();
        })
        .catch(error => {
            return error;
        });
        return usa;
    }
    gettAllUsa()
async function findOne(){
        let uuu = await gettAllUsa();
        let html ='';
        uuu.forEach(element => {
           let htmlSegment=''
            if(element.city.toLowerCase().includes(document.getElementById("search").value.toLowerCase
            ()) || element.state.toLowerCase().includes(document.getElementById("search").value.toLowerCase())) 
            {
                console.log(element);
                htmlSegment=`<div class="city">
                <h1 class="heading">State:${element.state}</h1><hr>
                 <h2 class="style">City:${element.city} </h2><hr>
                <h3 class="style1">Latitude:${element.latitude} </h3><hr>
                <h3 class="style1">Longitude:${element.longitude} </h3><hr>
                <h3 class="style1">Population:${element.population} </h3><hr>
                <h3 class="style1">Rank:${element.rank} </h3><hr>
            
                
            </div>`;
            html += htmlSegment;
            }
        });
        let container= document.querySelector('.container');
        container.innerHTML = html;
    }
    