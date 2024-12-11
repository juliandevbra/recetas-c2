import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import withErrorBoundary from "../withErrorBoundary";

const Detail = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  console.log(id);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

  useEffect(() => {
    //Llamado GET mediante .then()
    // axios(url)
    //   .then((res) => {
    //     console.log(res.data);
    //     setRecipe(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //Llamado get mediante async/await
    // const getRecipe = async () => {
    //  try{
    // const res = await axios(url);
    //   console.log(res);
    // setRecipe(res.data);
    // } catch(err) {
    //   console.log(err)
    // }
    // };
    // getRecipe();

    //Llamado GET mediante IIFE
    (async () => {
      try {
        const res = await axios(url);
        console.log(res);
        setRecipe(res.data);
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al obtener el detalle de la receta",
        });
      }
    })();
  }, []);

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt="" />
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default withErrorBoundary(Detail);
