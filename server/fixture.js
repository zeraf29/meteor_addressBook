import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {
    console.log("Starting Meteor - fixture");
    if(AddressBook.find().count() ===0){
        console.log("No data. Inserting fixture data.");
        for(var i=0, len=10; i<len; i++){
            AddressBook.insert(fixtures[i]);
        }
    }
});

var fixtures = [
    {
        "name" : "Acton Byers",
        "phone" : "010-5533-9991",
        "email" : "test1@cj.net",
        "company" : "CJ",
        "birthday" : "1988/05/20"
    },
    {
        "name" : "aaaa",
        "phone" : "010-3334-9991",
        "email" : "test1@cj.net",
        "company" : "CJ10",
        "birthday" : "1981/05/20"
    },
    {
        "name" : "bbbb",
        "phone" : "010-1111-9991",
        "email" : "test2@cj.net",
        "company" : "CJ9",
        "birthday" : "1988/02/20"
    },
    {
        "name" : "cccc",
        "phone" : "010-7777-9991",
        "email" : "test133@cj.net",
        "company" : "CJ8",
        "birthday" : "1985/05/22"
    },
    {
        "name" : "dddd",
        "phone" : "010-2222-9991",
        "email" : "test441@cj.net",
        "company" : "CJ7",
        "birthday" : "1978/04/20"
    },
    {
        "name" : "eeee",
        "phone" : "010-8888-9991",
        "email" : "test155@cj.net",
        "company" : "CJ6",
        "birthday" : "1968/11/20"
    },
    {
        "name" : "ffff",
        "phone" : "010-9999-9991",
        "email" : "test661@cj.net",
        "company" : "CJ5",
        "birthday" : "1988/07/14"
    },
    {
        "name" : "gggg",
        "phone" : "010-0000-9991",
        "email" : "test6671@cj.net",
        "company" : "CJ4",
        "birthday" : "1994/05/12"
    },
    {
        "name" : "hhhh",
        "phone" : "010-1234-9991",
        "email" : "test1888@cj.net",
        "company" : "CJ3",
        "birthday" : "1956/05/21"
    },
    {
        "name" : "iiii",
        "phone" : "010-9845-9991",
        "email" : "test9991@cj.net",
        "company" : "CJ2",
        "birthday" : "1983/05/20"
    }
]
