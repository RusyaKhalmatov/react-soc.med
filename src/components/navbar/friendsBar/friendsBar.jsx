import React from 'react';
import s from './FriendsBar.module.css';
import Friend from './Friend/Friend';

let  friendsArray = [
    {id:2, name: "Valery", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-doIOQCzJs1cSMK1zLZnqU8n8srTvYfj2CaAfu5KYok2AZfxB&s"},
    {id:3, name:"Yuriy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_l-KrcNZeXOZt4kdu0rsgJmo8pWGcvLikG0qc0XczQgH3-WSkcg&s"},
    {id:4, name:"Artem", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58AYGO7fKpAovkisSCHacOiSel0tK-yKtb-MdIfExolgIAGTlig&s" },
    {id:5, name: "Sobit", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgzKkgG98DD_NCsvHT1rneaxhLB2pmHCtaXxbuyi1-1KDk5EuDA&s"}
]

const FriendsBar = () =>
{
    let friendElements = friendsArray.map(f => <Friend className = {s.Friend}
     id={f.id} name={f.name} img={f.img}/>);
    return (
        <div className = {s.container}>
            <p className={s.pBlock}> Friends online </p>
            <div className="friendsRow">
                {friendElements}
            </div>
            

        </div>
    );
}

export default FriendsBar;