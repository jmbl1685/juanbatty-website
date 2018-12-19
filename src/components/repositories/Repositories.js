import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Repositories.css'

export default function Repositories() {

  const [data, setData] = useState([])

  async function fetchAPI() {
    const result = await axios('https://api.github.com/users/jmbl1685/repos?per_page=200')
    setData(result.data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className="center-txt">
      <section>
        <div>
          <h2>REPOSITORIOS (GITHUB)</h2>
        </div>
      </section>
      <div className="container center">
        <div className="row">
          {
            data.map((item, index) => {
              return (
                <div key={item.id} className="col-12 col-sm-6  col-md-4 col-lg-4 col-xl-3 repo-card">
                  <a href={item.html_url} target="_blank">{item.name}</a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}