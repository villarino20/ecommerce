import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const productData = [
    {
        id: 1,
        name: "Civil War II",
        productType: "Self-concluding comic",
        price: 1500,
        rating: 4,
        image: "https://encuadrocomics.cl/image/cw2.jpg",
        description: "Civil War II es un cómic crossover publicado por Marvel Cómics que debutó en junio del 2016. Siendo este una secuela directa del cómic Civil War. Publicado en 2006 consta de una serie limitada de ocho volúmenes que relatan el conflicto, escrito por Brian Michael Bendis y con el arte de David Márquez y Justin Ponsor, y un número de cómics unidos a la trama. Funcionando como una alegoría sobre la naturaleza de determinismo vs el libre albedrío, la historia muestra dos facciones de súper-héroes dirigidas por Carol Danvers (Capitán Marvel) y Tony Stark (Iron man) que chocan cuándo surge un nuevo inhumano llamado Ulysses con la capacidad de pronosticar el futuro."
    },
    {
        id: 2,
        name: "Miles Morales: Ultimate Spider-Man",
        productType: "Self-concluding comic",
        price: 2000,
        rating: 3,
        image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/ultspi011-3a3fe1835a3b72111115918332757919-1024-1024.jpg",
        description: "Miles Morales: Ultimate Spider-Man es una serie de cómics presentando a Miles Morales como el oficial Ultimate Spider-Man y su nueva vida tras los desastres de Ultimate Comics: Cataclysm evento consecuente de Age of Ultron en el Marvel Original"
    },
    {
        id: 3,
        name: "Superior Iron Man",
        productType: "Comic serie 01/???",
        price: 500,
        rating: 5,
        image: "http://2.bp.blogspot.com/-r6kMgll_29E/VbyWlULJuPI/AAAAAAAAAb8/bL4wnIQdJBw/s640/superior%2B3.jpg",
        description: "Superior Iron Man es la nueva serie de aventuras del Hombre de Hierro para la nueva línea editorial de All New Marvel Now. Como lo indica su nombre, este nuevo arco tendrá varias semejanzas con Superior Spiderman, aquella serie de Dan Slott que puso al Dr. Octopus en el cuerpo de Peter Parker"
    },
    {
        id: 4,
        name: "Batman: The Detective",
        productType: "Comic serie 01/06",
        price: 700,
        rating: 5,
        image: "https://cdn.shopify.com/s/files/1/0270/7544/4820/products/Detective_600x_crop_center.jpg?v=1623427936",
        description: "An epic tale begins that will take Batman on a harrowing, action-packed European adventure in a new miniseries by superstar creators Tom Taylor and Andy Kubert!"
    },

    
];



export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Grid container spacing={3}>
                {   productData.map(product =>(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Product key={product.id} product={product}/>
                        </Grid>
                    ))
                }
          </Grid>
    </div>
  );
}
