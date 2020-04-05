import React from 'react';
import { Cell } from 'react-mdl';
import { BouncyDiv } from '../Animations/animation';
import Image from '../../images/profile_pic.jpg';

export default function MyDetails() {
  return (
    <Cell className=" name-container-1" col={6}>
    <BouncyDiv> <h2>Nagi reddy</h2>
      <img src={Image} className="avatar-img" alt="avatar" ></img>
      <p > Results-oriented Front-end Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish, and successfully manage a team of other software professionals </p>  </BouncyDiv>
  </Cell>
  )
}
