export class User {
    constructor(
        public id: String,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string) { }
}

/*
userdetails = [
    {
      id: '3',
      firstName: 'Karthi',
      lastName: 'K',
      email: 'karthi@gmail.com',
      password: 'password2'
    },
    {
      id: '4',
      firstName: 'Vino',
      lastName: 'K',
      email: 'vino@gmail.com',
      password: 'password'
    }
  ];
  
  userdetails = [
    {
      "id": "3",
      "firstName": "Karthi",
      "lastName": "K",
      "email": "karthi@gmail.com",
      "password": "password2"
    },
    {
      "id": "4",
      "firstName": "Vino",
      "lastName": "K",
      "email": "vino@gmail.com",
      "password": "password"
    }
  ];*/