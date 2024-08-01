import MainLayout from '@/layout/MainLayout'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './integration.module.css'
import { MdOutlineFamilyRestroom, MdOutlineHome, MdOutlineVerified } from 'react-icons/md'
import { GoServer } from 'react-icons/go'

let data = [
  {
    count: '1943662',
    title: 'EKALYAN',
    outerColor: '#e9e7fd',
    iconColor: '#7367f0',
    borderColor: '#c8c4f9',
  },
  {
    count: '7826415',
    title: 'SAHARA',
    outerColor: '#e9e7fd',
    iconColor: '#7367f0',
    borderColor: '#c8c4f9',

  },
  {
    count: '1763624',
    title: 'MUKHYAMANTRI AWAS YOJANA',
    outerColor: '#e9e7fd',
    iconColor: '#7367f0',
    borderColor: '#c8c4f9',

  },
  {
    count: '15',
    title: 'PMIS',
    outerColor: '#e9e7fd',
    iconColor: '#7367f0',
    borderColor: '#c8c4f9',

  },
  {
    count: '15',
    title: 'HPSEBL',
    outerColor: '#e9e7fd',
    iconColor: '#7367f0',
    borderColor: '#c8c4f9',

  },
  {
    count: '15',
    title: 'ESHARAM',
    outerColor: '#e9e7fd',
    iconColor: '#7367f0',
    borderColor: '#c8c4f9',

  },
  {
    count: '15',
    title: 'HIMCARE',
    outerColor: '#e9e7fd',
    iconColor: '#7367f0',
    borderColor: '#c8c4f9',

  },
]

const Integration = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        {data?.map(v => <>
          <Grid item xs={12} sm={4}>
            <div className={`card`}
              onMouseEnter={e => {
                e.currentTarget.style.borderBottom = `2px solid ${v.iconColor}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderBottom = `2px solid ${v.borderColor}`;
              }}
              style={{ borderBottom: `2px solid ${v?.borderColor}` }}>
              <div className={styles.innerCard}>
                <h5>{v?.title}</h5>
              </div>
              <div className='card-body'>
                <div className={styles.innerbody}>
                  <div className={styles.text}>
                    <h4>571154</h4>
                    <p className={styles.desc}>Total Active Records</p>
                  </div>
                  <div className={styles.text}>
                    <h4 className={styles.mapped}>300920
                    </h4>
                    <p className={styles.desc}>Mapped Records
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </>)}
      </Grid>
    </MainLayout>
  )
}

export default Integration
