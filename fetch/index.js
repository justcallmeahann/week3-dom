const url = document.getElementById('url-json');
const fetchbtn = document.querySelector('.fetch-btn');

fetchbtn.addEventListener('click', function () {
    var res = '';
    fetch(url.value) // fetch data dari url yang di-input
    .then(function (response) {
        if (!response.ok) { // if response ok false
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .then(function(data) {
        const result = document.querySelector('.result');
        result.innerHTML = '';
        if (data.length > 0) {
            res += `<div class="grid grid-cols-3 px-20 gap-7 md:grid-cols-2">`;
            for(let user of data){
                
                res += `<div class="bg-slate-700 p-4 rounded-2xl relative">
                        <div class="rounded-full absolute bg-emerald-600 w-8 h-8 flex items-center justify-center top-[-1rem] left-[-1rem]">${user.id}</div>
                    <p><strong class="text-xl">${user.name}</strong></p>
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>

                    <div class="mb-2"></div>
                    <strong>Alamat</strong>
                    <p>Street: ${user.address.street}</p>
                    <p>Suite: ${user.address.suite}</p>
                    <p>City: ${user.address.city}</p>
                    <p>Zipcode: ${user.address.zipcode}</p>
                    <p>Geocode: latitude ${user.address.geo.lat},langitude ${user.address.geo.lng}</p>

                    <div class="mb-2"></div>
                    <p>No. telp: ${user.phone}</p>
                    <p>Website: ${user.website}</p>

                    <div class="mb-2"></div>
                    <strong>Perusahaan</strong>
                    <ul>
                        <li>Nama: ${user.company.name}</li>
                        <li>${user.company.catchPhrase}</li>
                        <li>${user.company.bs}</li>
                    </ul>
                    </div>`;

            }
            res += `</div>`;

        }

        result.innerHTML = res;
    })
    .catch((error) => {
        res = error;
    });
    console.log(res);

    result.innerHTML = res;
});


const resetbtn = document.querySelector('.reset-btn');
resetbtn.addEventListener('click', function () {
    const result = document.querySelector('.result');
    result.innerHTML = 'Data belum di-fecth'
})