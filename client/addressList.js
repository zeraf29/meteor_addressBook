Template.addressList.helpers({
    list(){
        return AddressBook.find({},{limit:10, sort:{name:1}});
    }    
});

Template.addressList.events({
    'click button[name=remove]' (evt, tmpl){
        AddressBook.remove({_id: this._id});
    },
    'click button[name=modify]' (evt, tmpl){
        Session.set("editItem",this._id);
    }
});
Template.addressInput.events({
    'click button[name=saveAddress]' (evt, tmpl){
        var address = {
            name : tmpl.find("input[name=name]").value,
            phone : tmpl.find("input[name=phone]").value,
            email : tmpl.find("input[name=email]").value,
            company : tmpl.find("input[name=company]").value,
            birthday : tmpl.find("input[name=birthday]").value
        };
        AddressBook.insert(address);
        tmpl.find("input[name=name]").value="";
        tmpl.find("input[name=phone]").value="";
        tmpl.find("input[name=email]").value="";
        tmpl.find("input[name=company]").value="";
        tmpl.find("input[name=birthday]").value="";
    }
});

Template.addressListItem.helpers({
    editing(){
        return this._id == Session.get("editItem");        
    }
});