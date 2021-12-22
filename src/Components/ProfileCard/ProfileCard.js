import './ProfileCard.style.css'
function ProfileCard({name,status,img}){
    return(
        <div className='Profile'>
            <img height='100px' alt='avatar' src={img}/>
            <h2>{name}</h2>
            <p>{status}</p>
        </div>
    )
}
export default ProfileCard;