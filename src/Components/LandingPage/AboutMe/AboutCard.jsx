import React from 'react'
import { useState } from 'react';

const AboutCard = ({icon,topic,desc1,desc2,...rest}) => {

  return (
    <div className="border bg-white border-gray-500 rounded-lg w-full px-3 py-5" {...rest}>
      <h1 className="flex justify-center mb-1 text-3xl pb-2 text-greenPrimary">{icon}</h1>
      <h4 className="font-semibold mb-1 text-xl text-neutralDGrey text-center">{topic}</h4>
      <p className="text-center text-neutralGrey">{desc1}</p>
      <p className="text-center text-neutralGrey text-sm">{desc2}</p>
    </div>
  )
}

export default AboutCard