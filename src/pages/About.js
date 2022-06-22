import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'

function About() {
  return (
    <Card>
      <h1>Thanks for your feed back</h1>
      <p>lorem ipsum d Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sapiente porro quam nemo ratione reprehenderit expedita laboriosam? Expedita, incidunt! Ipsam, corrupti voluptate. Enim amet hic et, quae nostrum earum maiores?</p>
      <Link to="/">Back to Home</Link>
    </Card>
  )
}

export default About
