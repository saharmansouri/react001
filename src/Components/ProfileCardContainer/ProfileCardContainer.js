import ProfileCard from "../ProfileCardContainer/ProfileCardContainer.style.css";
import './ProfileCardContainer.style.css'

// function ProfileCardContainer({users=[]}) {
function ProfileCardContainer({children}) {
    return (
        <div className='Profile-container'>
            {children}
            {/*{users.map((user) =>(*/}
            {/*        <ProfileCard*/}
            {/*            key={user.id}*/}
            {/*            name={user.name}*/}
            {/*            status={user.status}*/}
            {/*            img={user.img}*/}
            {/*        />*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
}

export default ProfileCardContainer;