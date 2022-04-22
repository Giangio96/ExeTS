interface Impiegato {
	id: number,
    name: string,
    surname: string,
    age: number,
    dateOfBirth: Date,
    address: {
        city: string,
        street: string,
        postalCode: string
    },
    role: Ruoli,
    username: string,
    profilePhotoUrl: string,
    companies: [
		{
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        },
        {
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        }
	],
    gender: Genere
}

enum Ruoli {
    staff,
    student,
    manager,
    admin
}

enum Genere{
    male,
    female,
    other
}

class User implements Impiegato {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: Date;
    address: {
        city: string,
        street: string,
        postalCode: string
    };
    role: Ruoli;
    username: string;
    profilePhotoUrl: string;
    companies: [
		{
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        },
        {
            id: number,
            name: string,
            description: string,
            location: {
                city: string,
                street: string,
                postalCode: string
            }
        }
	];
    gender: Genere

     getFullName() {
        return this.name + ' ' + this.surname
        
    }
   /* getNameObscured(){
        let nameObscured= '';
        for (let i=0; i< this.name.length;  i++){
            if(i<2){
                nameObscured+=this.name.charAt(i);
    
            }else{
                nameObscured+= '*'
            }
        }
        return nameObscured
    }
    */  //lo tengo per una cosa che sto imparando.
}
   