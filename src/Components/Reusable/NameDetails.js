import React from 'react';
import { Cell } from 'react-mdl';
import { BouncyDiv } from '../Animations/animation';
import Image from '../../images/profile_pic.jpg';

export default function MyDetails() {
  return (
    <Cell className="name-container-1" col={6}>
      <BouncyDiv> <h2>Nagi reddy</h2>
        <img src={Image} className="avatar-img" alt="avatar" ></img>
        <p > I like to learn code and debug new UI technologies and frameworks. I have a serious passion for UI effects, animations and  creating intuitive, dynamic user experiences. I enjoy challenging myself to learn new ideas & skills and to implement them into my own projects. I believe in showing my work rather than expressing with words </p> </BouncyDiv>
    </Cell>
  )
}
