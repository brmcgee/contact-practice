
        var position = 0;
        var contact = [];
        window.onload = newContact(0, '', '', '', '');
        window.onload = list(0);
        var endIndex = contact.length - 1;

        window.onload = document.cookie = 'Brian';
        
        function clearFields(){
            let f = document.forms.myForm.children[0].children[1].children.fname;
            let l = document.forms.myForm.children[1].children[1].children.lname;
            let p = document.forms.myForm.children[2].children[1].children.phone;
            let e = document.forms.myForm.children[3].children[1].children.email;
            f.value = '';
            l.value = '';
            p.value = '';
            e.value = '';
        }
        function add(){
        //    endIndex++;
           let first = document.forms.myForm.children[0].children[1].children.fname.value;
           let last = document.forms.myForm.children[1].children[1].children.lname.value;
           let phone = document.forms.myForm.children[2].children[1].children.phone.value;
           let email = document.forms.myForm.children[3].children[1].children.email.value;  
           newContact(endIndex, first, last, phone, email);   
           itemList();   
           endIndex++;
        }

        function list(pos){
            var firstName = document.forms.myForm.children[0].children[1].children.fname;
                firstName.value = contact[pos].firstName;
            var lastName = document.forms.myForm.children[1].children[1].children.lname;
                lastName.value = contact[pos].lastName;
            var phone = document.forms.myForm.children[2].children[1].children.phone;
                phone.value = contact[pos].phone;
            var email = document.forms.myForm.children[3].children[1].children.email;
                email.value = contact[pos].email;
        }

        function createContact(i, fn, ln, ph, em){
            this.index = i;
            this.firstName = fn;
            this.lastName = ln;
            this.phone = ph;
            this.email = em;
        }

        function newContact(i, f, l, p, e) {
            contact[i] = new createContact(i, f, l, p, e);
        } 
        function next(){
            if (position < contact.length -1) {
                position++;
                list(position);
            } else {
                alert('end of top list')
            }
            }

        function back(){
            if (position > 0) {
                position--;
                list(position);
            } else {
                alert('end of bottom list')
            }
        }

        function itemList(){
            let message = contact[0].firstName + ' ' + contact[0].lastName + ' Phone Number- ' + contact[0].phone +'<br>';
            for (let i=1; i<contact.length; i++){
                message += contact[i].firstName + ' ' + contact[i].lastName + ' Phone Number- ' + contact[i].phone + '<br>';  
            } 
            document.getElementById('listArea').innerHTML = message;  
        }

    