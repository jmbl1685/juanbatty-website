import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Repositories.css'

export default function Repositories() {

  const [data, setData] = useState([])

  async function fetchAPI() {
    const url = 'https://api.github.com/users/jmbl1685/repos?per_page=200'
    const result = await axios(url)
    setData(result.data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className="center-txt" data-aos="fade-up">
      <section>
        <div>
          <h2>Repositorio (GitHub)</h2>
        </div>
      </section>
      <div className="container center">
        <div className="row">
          {
            data.map((item, index) => {
              return (
                <div key={item.id} className="col-12 col-sm-6  col-md-4 col-lg-4 col-xl-3 repo-card">
                  <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}