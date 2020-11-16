import React from 'react';
import styled from 'styled-components';

const BroBase = styled.div<BroBaseProps>`

  background-color: ${props => props.theme.colors[props.backgroundColor]};
  padding: 10px 25px;
  position: relative;
  min-height: 150px;
  color: white;

  .avatar {
    position: absolute;
    bottom: 0;
    right: 5px;
  }

  .name {
    letter-spacing: 2px;
    margin: 0;
    text-transform: uppercase;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  }

  .alias {
    font-size: 1.1em;
    font-weight: 600;
    letter-spacing: 2px;
    opacity: 0.9;
  }

  .alias::before,
  .alias::after {
    content: '"';
  }

  .role {
    position: absolute;
    left: 25px;
    bottom: 20px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
type BroBaseProps = Pick<BroProps, 'backgroundColor'>;

export type BroProps = {
  /** background color of the bro card */
  readonly backgroundColor: 'blue' | 'red' | 'green' | 'purple';
  /** real name */
  readonly name: string;
  /** alias */
  readonly alias: string;
  /** what the person does in the studio */
  readonly role: string;
  /** Optional. avatar of the bro card */
  readonly avatar?: string;
}

const Bro: React.FC<BroProps> = ({ backgroundColor, name, alias, role, avatar }) => {
  return (
    <BroBase backgroundColor={backgroundColor}>
      <h2 className="name">{name}</h2>
      <div className="alias">{alias}</div>
      <div className="role">{role}</div>
      {avatar && <img className="avatar" src={avatar} alt={alias} />}
    </BroBase>
  );
}

export default Bro;
