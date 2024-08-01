import MainLayout from '@/layout/MainLayout'
import { Box, Card, Grid, Pagination, Stack, Typography } from '@mui/material'
import React from 'react'
import styles from "./dashboard.module.css"
import { MdOutlineFamilyRestroom, MdSearch } from "react-icons/md";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { GoServer } from "react-icons/go";
import SelectDropdown from '@/components/selectDropdown';
import SubmitButton from '@/components/submitBtn';
import style from './dashboard.module.css'
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { FaEye } from "react-icons/fa";

let data = [
  {
    count: '1943662',
    title: 'Total Families',
    icon: <MdOutlineFamilyRestroom size={26} />,
    outerColor: '#e9e7fd',
    iconColor: '#7367f0',
    borderColor: '#c8c4f9',
  },
  {
    count: '7826415',
    title: 'Total Residents',
    icon: <MdOutlineHome size={26} />,
    outerColor: '#fff0e1',
    iconColor: '#ff9f43',
    borderColor: '#ffdab6'

  },
  {
    count: '1763624',
    title: 'EKYC Verified',
    icon: <MdOutlineVerified size={26} />,
    outerColor: '#ddf6e8',
    iconColor: '#28c76f',
    borderColor: 'rgb(158 232 190)'

  },
  {
    count: '15',
    title: 'Total Schemes',
    icon: <GoServer size={26} />,
    outerColor: '#d6f4f8',
    iconColor: '#00bad1',
    borderColor: '#9ce4ed'

  },
]

const Dashboard = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        {data?.map(v => <>
          <Grid item xs={12} sm={3}>
            <div className={`card`}
              onMouseEnter={e => {
                e.currentTarget.style.borderBottom = `2px solid ${v.iconColor}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderBottom = `2px solid ${v.borderColor}`;
              }}
              style={{ borderBottom: `2px solid ${v?.borderColor}` }}>
              <div className='card-body'>
                <div className={styles.cardInner}>
                  <div className={styles.cardTitle}>
                    <Typography variant='h6' mb={0} mr={2} >{v?.count}</Typography>
                    <Typography variant='p' mb={0} color={"#6d6b77"} fontSize={15}>{v?.title}</Typography>
                  </div>
                  <div className={styles.cardIcon}>
                    <span className={styles.outerIcon} style={{ backgroundColor: v?.outerColor, color: v?.iconColor }}>
                      {v?.icon}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </>)}


      </Grid>


      <div className='card' style={{ marginTop: "20px" }}>
        <div className='card-body'>
          <Grid container spacing={3}>
            <Grid item sx={12} sm={4}>
              <SelectDropdown
                isMulti
                title={"Select District"}
                name="district"
                options={[{ value: "1", label: "Chamba" }, { value: "2", label: "Kullu" }]}
              // value={formData?.municipal}
              // onChange={(e) => {handleChange(e); dispatch(getWard({municipalId: e.target.value},startLoading, stopLoading))}}
              />
            </Grid>
            <Grid item sx={12} sm={4}>
              <SelectDropdown
                isMulti
                title={"Select Gender"}
                name="gender"
                options={[{ value: "1", label: "Male" }, { value: "2", label: "Female" }]}
              // value={formData?.municipal}
              // onChange={(e) => {handleChange(e); dispatch(getWard({municipalId: e.target.value},startLoading, stopLoading))}}
              />
            </Grid>
            <Grid item sx={12} sm={4}>
              <SelectDropdown
                isMulti
                title={"Select Categories"}
                name="category"
                options={[{ value: "1", label: "General" }, { value: "2", label: "OBC" }]}
              // value={formData?.municipal}
              // onChange={(e) => {handleChange(e); dispatch(getWard({municipalId: e.target.value},startLoading, stopLoading))}}
              />
            </Grid>
            <Grid item sx={12} sm={3}> <SelectDropdown
              title={"Status"}
              name="status"
              options={[{ value: "1", label: "Alive" }, { value: "2", label: "Death" }]}
            // value={formData?.municipal}
            // onChange={(e) => {handleChange(e); dispatch(getWard({municipalId: e.target.value},startLoading, stopLoading))}}
            /></Grid>
            <Grid item sx={12} sm={3}>
              <SelectDropdown
                title={"Economic Status"}
                name="economic"
                options={[{ value: "1", label: "B.P.L" }, { value: "2", label: "A.P.L" }]}
              // value={formData?.municipal}
              // onChange={(e) => {handleChange(e); dispatch(getWard({municipalId: e.target.value},startLoading, stopLoading))}}
              />
            </Grid>
            <Grid item sx={12} sm={3}>
              <SelectDropdown
                title={"eKYC Status"}
                name="ekyc"
                options={[{ value: "1", label: "Verified" }, { value: "2", label: "Not Verified" }]}
              // value={formData?.municipal}
              // onChange={(e) => {handleChange(e); dispatch(getWard({municipalId: e.target.value},startLoading, stopLoading))}}
              />
            </Grid>
            <Grid item sx={12} sm={3}>
              <SelectDropdown
                title={"Scheme"}
                name="scheme"
                options={[{ value: "1", label: "Himcare" }, { value: "2", label: "Sahara" }]}
              // value={formData?.municipal}
              // onChange={(e) => {handleChange(e); dispatch(getWard({municipalId: e.target.value},startLoading, stopLoading))}}
              />
            </Grid>
          </Grid>
          <Box display={"flex"} justifyContent={"center"} style={{ marginTop: "20px" }}>
            <SubmitButton label={"Search"} icon={<MdSearch size={18} style={{ marginTop: "5px", marginRight: "5px" }} />} />
          </Box>

          {/* // add graphs */}
          

          <div className={style.tablewrapper} >
            <table className={style.table}>
              <thead className={style.thead}>
                <tr className={style.tr}>
                  <th className={style.th}>S.No.</th>
                  <th className={style.th}>Name	</th>
                  <th className={style.th}>Parivar ID</th>
                  <th className={style.th}>Member ID</th>
                  <th className={style.th}>DOB</th>
                  <th className={style.th}>eKYC Status</th>
                  <th className={style.th}>Relative	</th>
                  <th className={style.th}>Gender	</th>
                  <th className={style.th}>View</th>
                </tr>
              </thead>
              <tbody>
                <tr className={style.tr}>
                  <td className={style.td}>1	</td>
                  <td className={style.td}>Gaurang	</td>
                  <td className={style.td}>845913345</td>
                  <td className={style.td}>52640623	</td>
                  <td className={style.td}>21-07-2000</td>
                  <td className={style.td}><div className={style.unvarify}>Not Verified</div> </td>
                  <td className={style.td}>Nitya	</td>
                  <td className={style.td}>Male</td>
                  <td className={style.td}><FaEye size={20} color='#32CD96'/>                  </td>
                </tr>
                <tr className={style.tr}>
                  <td className={style.td}>2	</td>
                  <td className={style.td}>Gaurang	</td>
                  <td className={style.td}>845913345</td>
                  <td className={style.td}>52640623	</td>
                  <td className={style.td}>21-07-2000</td>
                  <td className={style.td}><div className={style.varify}>Verified</div> </td>
                  <td className={style.td}>Nitya	</td>
                  <td className={style.td}>Male</td>
                  <td className={style.td}><FaEye size={20} color='#32CD96'/></td>
                </tr>
                <tr className={style.tr}>
                  <td className={style.td}>3	</td>
                  <td className={style.td}>Gaurang	</td>
                  <td className={style.td}>845913345</td>
                  <td className={style.td}>52640623	</td>
                  <td className={style.td}>21-07-2000</td>
                  <td className={style.td}><div className={style.unvarify}>Not Verified</div> 	</td>
                  <td className={style.td}>Nitya	</td>
                  <td className={style.td}>Male</td>
                  <td className={style.td}><FaEye size={20} color='#32CD96'/>  </td>
                </tr>
               
              </tbody>
            </table>

            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} mt={2}>
          <Typography></Typography>
          <Typography></Typography>

          <Stack spacing={2} >
            <Pagination  onChange={() => {}} count={5} page={1}  shape='rounded' sx={{
                '.Mui-selected': {
                  background: 'linear-gradient(270deg, rgba(115, 103, 240, 0.7) 0%, #7367f0 100%)', 
                  color: '#fff'
                },
              }}/>

          </Stack>
          <Typography color={"#acaab1"} fontSize={15}>Total Records: 7826415</Typography>
        </Box>
          </div>
        </div>



      </div>
    </MainLayout>
  )
}

export default Dashboard
