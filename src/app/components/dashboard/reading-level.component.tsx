import React, { FunctionComponent } from 'react';

type CardProps = {
  title: string,
  paragraph: string
}

export const Card: FunctionComponent<CardProps> = ({ title, paragraph }) => <aside>
  <h2>{ title }</h2>
  <p>
    { paragraph }
  </p>
</aside>

const el = <Card title= "Reading Level" paragraph=" 4th grade" />