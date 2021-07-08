import React from 'react';
import {AppBar, Toolbar, Grid, Card, CardMedia, CardContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles ({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
        },
    });
const getPokemonCard = () => {
    return (
        <Grid item xs={4}>
            <Card>
                <CardContent>Chris</CardContent>
            </Card>

        </Grid>
    )
}
const Pokedex = () => {
    const classes = useStyles();
    return (
            <>
                <AppBar position="static">
                    <Toolbar />
                </AppBar>
                <Grid container spacing={2} className={classes.pokedexContainer}>
                    {/*<Grid item xs={2}>*/}
                    {/*this is item 1*/}
                    {/* </Grid>*/}
                    {/*<Grid item xs={2}>*/}
                    {/* this is item 2*/}
                    {/*</Grid>*/}
                    {getPokemonCard()}
                    {getPokemonCard()}
                    {getPokemonCard()}
                    {getPokemonCard()}

                </Grid>
                </>
             );
    };

export default Pokedex;