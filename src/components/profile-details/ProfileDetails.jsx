import Image from "next/image";
import styles from "../../app/page.module.css";


const ProfileDetails = ({user}) => {
    return (
        <div>
            

            <div className="row">
                <div className="col-md-5 border border-info" style={{width:"100", objectFit:"cover", padding:"17px"}}>
                    <Image src={user.avatar} width={200} height={200} alt="Image Unavailable" />
                </div>

                <div className="col-md-6 ms-3">
                    <p><b>Name: </b>{`${user.profile.firstName} ${user.profile.lastName}`}</p>
                    <p><b>Job Title: </b>{user.jobTitle}</p>
                    <p><b>username: </b>{user.profile.username}</p>
                    <p><b>Email: </b>{user.profile.email}</p>
                </div>
            </div>

            <div className="row mt-4">
                <p><b>Biogrophy: </b>{user.Bio}</p>
            </div>
        </div>
    )
}
export default ProfileDetails;