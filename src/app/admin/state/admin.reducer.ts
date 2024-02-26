const initialState = {
    users:[
        {
        name: "dhanuj",
      email: "dhanuj@gmail.com",
      password: "123456",
      confirmpassword: "123456",
      gender: "Male",
      date: "2022-12-14",
      description: "test description to check how long will it allow in this text area seems like a Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis, tenetur dolor dignissimos veniam iste similique doloremque explicabo voluptatibus veritatis officiis quod hic dicta quibusdam ex saepe asperiores nulla assumenda! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis, tenetur dolor dignissimos veniam iste similique doloremque explicabo voluptatibus veritatis officiis quod hic dicta quibusdam ex saepe asperiores nulla assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis, tenetur dolor dignissimos veniam iste similique doloremque explicabo voluptatibus veritatis officiis quod hic dicta quibusdam ex saepe asperiores nulla assumenda!Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis, tenetur dolor dignissimos veniam iste similique doloremque explicabo voluptatibus veritatis officiis quod hic dicta quibusdam ex saepe asperiores nulla assumenda! ",
      occupation: "Unemployed",
      education12: "12",
      educationdegree: "15",
      tandc: true,
      
      id: 1
},{
    name: "test",
  email: "test@gmail.com",
  password: "123456",
  confirmpassword: "123456",
  gender: "Female",
  date: "2022-12-14",
  description: "test  ",
  occupation: "employed",
  education12: "12",
  educationdegree: "15",
  tandc: true,
  
  id: 1
}],
loading:false,
loaded:true
};
export function adminReducer(state = initialState,action){

    switch(action.type){

        case 'LOAD_USERS':{

            return{

                ... state,

                loading:true,

                loaded:false

            };

        }

       default:{

            return state;

       }

    }
}