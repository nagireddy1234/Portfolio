import React from 'react';
import { Cell } from 'react-mdl';
import { BouncyDiv } from '../Animations/animation';

export default function MyDetails() {
  return (
    <Cell className="name-container-1" col={6}>
    <BouncyDiv> <h2> Nagi reddy </h2>
      <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>
      <p > Results-oriented Front-end Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish, and successfully manage a team of other software professionals </p>  </BouncyDiv>
  </Cell>
  )
}
