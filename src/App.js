import logo from './logo.svg';
import './App.css';
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ProfileCardContainer from "./Components/ProfileCardContainer/ProfileCardContainer";
import HeaderCard from './Components/HeaderCard/HeaderCard';
const instans = [
    {
        id:1,
        name:'JOHN DOE' ,
        status:'Developer' ,
        img:'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png'
    },
    {
        id:2,
        name:'Marcus Doe' ,
        status:'Developer' ,
        img:'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
    },
    {
        id:3,
        name:'sahar mansouri' ,
        status:'Developer Web' ,
        img:'https://lh3.googleusercontent.com/a-/AOh14GhJwtoQ2DcmFEckkjqlXCbChzaqC4aQxRt8xmfXPQ=s360-p-rw-no'
    },
    {
        id:4,
        name:'Gina Howell' ,
        status:'Architect' ,
        img:'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/photo3.jpg'
    },
    {
        id:1,
        name:'Allan Rice' ,
        status:'Designer' ,
        img:'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
        id:2,
        name:'Ruby Steeves' ,
        status:'Designer' ,
        img:'https://randomuser.me/api/portraits/women/71.jpg'
    },
    {
        id:3,
        name:'Hadis M' ,
        status:'Architect' ,
        img:'http://kundenarea.at/app-assets/images/user/12.jpg'
    },
    {
        id:4,
        name:'Grace Hayes' ,
        status:'Dr' ,
        img:'https://randomuser.me/api/portraits/women/25.jpg'
    },
    {
        id:1,
        name:'Jennifer Little' ,
        status:'Developer' ,
        img:'https://randomuser.me/api/portraits/women/5.jpg'
    },
    {
        id:2,
        name:'Willard Ward' ,
        status:'Designer' ,
        img:'https://randomuser.me/api/portraits/men/72.jpg'
    },
    
];
function App() {
  return (
      <div className='App'>
          {/*<ProfileCardContainer users={instans} />*/}
          <HeaderCard />
          <ProfileCardContainer>
              {instans.map((user) =>(
                  <ProfileCard
                      key={user.id}
                      name={user.name}
                      status={user.status}
                      img={user.img}
                  />
              ))
              }
          </ProfileCardContainer>
      </div>
  );
}

export default App;
