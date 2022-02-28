import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() {

   }
  
   /* Buscar cliente con el index enviado */
   searchClient(clientId){
     return this.data.find(c => c.index == clientId);   /* busca en c/registro donde c.index se igual al que esta llegando */
   }

   /* Actualizar cliente */
  updateClient(client){
    let currentData = this.searchClient(client.index);
    if (currentData!= undefined && currentData!= null){
        alert("cambió");
        currentData.name = client.name;
        currentData._id = client.id;
        currentData.age = client.age;
        currentData.phone = client.phone;
        currentData.email = client.email;
        currentData.address = client.address;
        //etc
        return true;
    }
    return false;
  }


  getClientListData(){
    return this.data
  }

  data = [
    {
      "_id": "1234436",
      "index": 0,
      "guid": "7339cf00-1069-48b4-822e-40bd5cce9ef7",
      "isActive": true,
      "balance": "2086",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "green",
      "name": "Tamara Bartlett",
      "gender": "female",
      "company": "POOCHIES",
      "email": "tamarabartlett@poochies.com",
      "phone": "+1 (969) 484-2822",
      "address": "785 Seabring Street, Wells, Utah, 4347",
      "about": "Veniam do eiusmod ut minim. Proident id in nulla do deserunt eiusmod nostrud. Minim sint excepteur ad consectetur occaecat commodo magna. Aliquip velit nostrud nostrud duis nisi enim eiusmod nisi commodo sunt ex mollit officia sunt. Anim ullamco sunt ex qui enim ea irure eiusmod laborum mollit dolor. Non id veniam cupidatat cillum. Elit fugiat tempor quis eu.\r\n",
      "registered": "2018-02-18T10:54:20 +05:00",
      "latitude": -75.854378,
      "longitude": -123.231859,
      "tags": [
        "sint",
        "cupidatat",
        "proident",
        "adipisicing",
        "quis",
        "irure",
        "culpa"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Roxie Morse"
        },
        {
          "id": 1,
          "name": "Harriett Conley"
        },
        {
          "id": 2,
          "name": "Darlene Nichols"
        }
      ],
      "greeting": "Hello, Tamara Bartlett! You have 1 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "2346741",
      "index": 1,
      "guid": "0f229bd4-a271-4852-815a-4a7de011d6e4",
      "isActive": false,
      "balance": "2034",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "brown",
      "name": "Gray Mercado",
      "gender": "male",
      "company": "SOLGAN",
      "email": "graymercado@solgan.com",
      "phone": "+1 (873) 414-3027",
      "address": "396 Beekman Place, Hackneyville, Kansas, 3831",
      "about": "Eiusmod quis sit Lorem ut ipsum nulla dolor aliquip ex sit incididunt. Ut et nisi proident mollit veniam esse nisi occaecat pariatur proident reprehenderit. Nostrud reprehenderit tempor irure officia proident commodo nisi fugiat duis dolor non. Minim enim qui mollit voluptate tempor id ad veniam reprehenderit proident tempor excepteur. Ut laboris magna ullamco eiusmod labore exercitation.\r\n",
      "registered": "2018-08-11T04:30:05 +05:00",
      "latitude": -63.380108,
      "longitude": 19.326757,
      "tags": [
        "voluptate",
        "excepteur",
        "minim",
        "est",
        "eiusmod",
        "consectetur",
        "ea"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Emerson Garcia"
        },
        {
          "id": 1,
          "name": "Nichole Weeks"
        },
        {
          "id": 2,
          "name": "Vaughn Boyd"
        }
      ],
      "greeting": "Hello, Gray Mercado! You have 7 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "8976543",
      "index": 2,
      "guid": "b7acf7f7-b30a-45bf-a3e3-21f413b85ac6",
      "isActive": true,
      "balance": "1471",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "eyeColor": "blue",
      "name": "Muriel Carpenter",
      "gender": "female",
      "company": "BULLJUICE",
      "email": "murielcarpenter@bulljuice.com",
      "phone": "+1 (927) 542-3027",
      "address": "575 Leonora Court, Hoehne, Iowa, 7469",
      "about": "Ad veniam proident ullamco adipisicing magna veniam duis commodo. Labore consectetur dolore amet enim ex tempor reprehenderit magna dolor quis eu adipisicing. Incididunt id Lorem reprehenderit in Lorem Lorem veniam tempor. Qui ullamco non pariatur dolor do veniam. Cillum sunt duis veniam laborum occaecat nostrud dolor consectetur consectetur dolor est occaecat laboris.\r\n",
      "registered": "2016-04-18T12:36:01 +05:00",
      "latitude": 40.805271,
      "longitude": -174.850765,
      "tags": [
        "minim",
        "consequat",
        "ut",
        "dolore",
        "eiusmod",
        "dolor",
        "velit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Burt Olson"
        },
        {
          "id": 1,
          "name": "Mildred George"
        },
        {
          "id": 2,
          "name": "Horne Daniels"
        }
      ],
      "greeting": "Hello, Muriel Carpenter! You have 9 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "8976567",
      "index": 3,
      "guid": "6080d22d-0ce7-4281-9859-6f6dff89c272",
      "isActive": false,
      "balance": "1683",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "green",
      "name": "Farmer Melendez",
      "gender": "male",
      "company": "MULTIFLEX",
      "email": "farmermelendez@multiflex.com",
      "phone": "+1 (983) 580-2344",
      "address": "967 Lenox Road, Hayden, California, 5680",
      "about": "Consequat cillum ex magna veniam ea do consectetur fugiat consequat. Cupidatat laboris adipisicing minim ullamco amet ea non Lorem elit commodo ipsum eiusmod. Adipisicing quis velit quis aliquip ea sit excepteur minim. Est veniam deserunt mollit exercitation deserunt deserunt ex veniam culpa elit eu ea. Officia veniam elit reprehenderit consectetur veniam pariatur dolor. Deserunt ipsum velit excepteur dolor cupidatat qui in dolore quis.\r\n",
      "registered": "2016-12-07T05:56:19 +05:00",
      "latitude": -42.275822,
      "longitude": 40.599402,
      "tags": [
        "laboris",
        "cillum",
        "est",
        "magna",
        "dolore",
        "ea",
        "excepteur"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Tamra Noel"
        },
        {
          "id": 1,
          "name": "Summers Rios"
        },
        {
          "id": 2,
          "name": "Mae Holmes"
        }
      ],
      "greeting": "Hello, Farmer Melendez! You have 5 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "2345432",
      "index": 4,
      "guid": "82c4eaca-92a6-4b60-b75a-2698ac3c9219",
      "isActive": true,
      "balance": "1034",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "eyeColor": "brown",
      "name": "Obrien Rollins",
      "gender": "male",
      "company": "CUIZINE",
      "email": "obrienrollins@cuizine.com",
      "phone": "+1 (831) 533-3585",
      "address": "925 Crosby Avenue, Linganore, Hawaii, 8474",
      "about": "Commodo minim id magna labore. Excepteur laborum pariatur eiusmod officia labore sunt. Sunt pariatur do culpa minim enim enim adipisicing cillum mollit eu consequat. Sint Lorem officia ex ad sint aliquip officia veniam. Dolor magna reprehenderit cillum consectetur duis ad irure Lorem ea et qui Lorem Lorem. Quis et minim nostrud magna. Dolor aute enim duis incididunt aute aute ut sit.\r\n",
      "registered": "2014-12-19T03:00:32 +05:00",
      "latitude": 64.642419,
      "longitude": -61.561948,
      "tags": [
        "incididunt",
        "est",
        "elit",
        "dolor",
        "labore",
        "sit",
        "ullamco"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Sally Mcbride"
        },
        {
          "id": 1,
          "name": "Hyde Simmons"
        },
        {
          "id": 2,
          "name": "Tammy Wade"
        }
      ],
      "greeting": "Hello, Obrien Rollins! You have 8 unread messages.",
      "favoriteFruit": "apple"
    }
  ];
}

