const url = "https://jsonplaceholder.typicode.com/users";
const syn = true;
const method = "GET";
const ajax = new XMLHttpRequest();
ajax.open(method, url, syn);
ajax.onload = () => {
    const data = JSON.parse(ajax.response);
    data.forEach (el => {
        let items = document.querySelector('table');
        //distucturing
        const {id, name, username, email, address, company} = el;
        const {street, suite, city, zipcode, geo} = address;
        const {lat, lng} = geo;
        
        items.innerHTML += ` 
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
                <td>${street},
                    ${suite},
                    ${city},
                    ${zipcode},
                    ${lat},
                    ${lng}
                </td>
                <td>
                   ${company.name},
                   ${company.catchPhrase},
                   ${company.bs}
                </td>
            </tr>
        `
    })
    
}
ajax.send();