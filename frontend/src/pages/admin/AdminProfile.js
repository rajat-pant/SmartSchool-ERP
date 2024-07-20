// import React, { useState } from 'react';
// import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser, updateUser } from '../../redux/userRelated/userHandle';
// import { useNavigate } from 'react-router-dom'
// import { authLogout } from '../../redux/userRelated/userSlice';
// import { Button, Collapse } from '@mui/material';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import UserProfileImg from "../../assets/UserProfile.png";
const AdminProfile = () => {
  
 const { currentUser } = useSelector((state) => state.user);


    return (
        <div>
           <Box sx={{ m: 3 }}>
        <img src = {UserProfileImg} style = {{marginBottom: "20px"}}></img>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ marginRight: "20px" }}>
            <Card sx={{ bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  School: {currentUser.schoolName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Name: {currentUser.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Email: {currentUser.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
           
        </div>
    )
}

export default AdminProfile

