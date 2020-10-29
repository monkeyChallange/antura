import React from "react";
import Grid from '@material-ui/core/Grid';

function UserInfo({ name, gender }) {
    return (
        <Grid container>
            <InfoValueContainer entery="Name" value={Object.values(name).join(' ')}/>
            <InfoValueContainer entery="Gender" value={gender}/>
            {/* <Grid item xs={4}>
               <b>Name:</b>
            </Grid>
            <Grid item>
               {Object.values(name).join(' ')}
            </Grid> */}
        </Grid>
    )
}

function InfoValueContainer({entery, value}){
    return (
        <Grid container>
            <Grid item xs={4}>
               <b>{entery}:</b>
            </Grid>
            <Grid item>
                {value}
            </Grid>
        </Grid>
    )
}

export default UserInfo