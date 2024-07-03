'use client'
import Image from "next/image";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import ProfileDetails from "@/components/profile-details/ProfileDetails";
import Loader from "@/components/loader/Loader";
import Warning from "@/components/warning/Warning";
import { ImArrowLeft } from "react-icons/im";



const UserList = () => {
    const [data, setData] = useState(null); //used for api main data
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null); //this is user-specific data
    const [info, setInfo] = useState(true);  //this is state will show untill user not click on profile
    const[selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <Loader />;
    if (error) return <Warning error={error}/>;

    const handleClick = (user) => { // this function collect ths user specific information
        setUserData(user);
        setInfo(false)
        setSelectedId(user.profile.username);
    }


    return (
        <div className="container">
                 <div className="row" >
                    <div className="col-md-12">
                    <div className={`${styles.userList} m-2 p-2 shadow`}><h3 style={{ fontWeight: 700 }}>User List</h3></div>
                    </div>  
              </div>

           

            <div className="row">
                <div className="col-md-5 overflow-y-scroll" style={{ height: "80vh" }}>

                    {
                        data.map((user) => (
                            <div className={styles.user_profile} key={user.profile.email} onClick={() => handleClick(user)}  style={selectedId === user.profile.username ? { background: "rgb(67, 215, 229)" } : {}}>
                                <Image src={user.avatar} className={styles.avtar_img} alt="Image Unavailable" width={80} height={80} />

                                <div style={{ marginLeft: "12px" }}>
                                    <h5 style={{ fontWeight: 600 }}>{user.profile.username}</h5>
                                    <h6 style={{ fontSize: ".8rem" }}>{user.jobTitle}</h6>
                                </div>
                            </div>
                        ))
                    }

                </div>

                <div className="col-md-6 m-2">
                    <div className={styles.prof_detail_heading}>
                      {info && <div className={styles.instruction}><ImArrowLeft className="display-3" /><h4>Please click on list to get profile details</h4></div>}
                    </div>
                    {userData && <ProfileDetails user={userData} />}
                </div>
            </div>
        </div>
    )
}
export default UserList;
