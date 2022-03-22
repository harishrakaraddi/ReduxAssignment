import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const item = useSelector((state) => state);
  const [details, setDetails] = useState(item.items);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "70%",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <h2>Products</h2>
      <div>
        <Button
          type="button"
          variant="outlined"
          style={{ marginTop: "10px" }}
          onClick={() => navigate("/Billing")}
        >
          Add
        </Button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
        {details.map((item, i) => {
          return (
            <Card
              className="d-flex"
              sx={{ maxWidth: 400 }}
              key={i}
              style={{
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    &#163;{item.price}
                  </Typography>
                  <div className="mt-4">
                    {/* <Button variant="contained" type="button">
                    Add
                  </Button> */}
                    <div className="d-flex" style={{ marginTop: "10px" }}>
                      <Button
                        variant="outlined"
                        style={{ minWidth: "20px" }}
                        onClick={() => {
                          dispatch({ type: "INCREMENT", payload: i });
                        }}
                      >
                        +
                      </Button>
                      <Typography className="mx-3 my-2">
                        {item.count}
                      </Typography>
                      <Button
                        variant="outlined"
                        style={{ minWidth: "20px" }}
                        onClick={() => {
                          dispatch({
                            type: "DECREMENT",
                            payload: i,
                          });
                        }}
                      >
                        -
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Box>
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGJDi8BuWwr_vXPGPVv0WG2TRGcyYAaLsgg&usqp=CAU" /> */}
              {/* {item.imgUrl} */}
              {/* <img src={item.img} /> */}
              {/* //img.src = "images/" + songs.imageName + ".jpg"; */}
              <img src={item.img} alt="logo" />
              {/* <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/src/utils/images/milk.png"
          alt="Live from space album cover"
        /> */}
            </Card>
          );
        })}
      </div>
      {/* <div>
        <Button
          type="button"
          variant="outlined"
          style={{ marginTop: "10px" }}
          onClick={() => navigate("/Billing")}
        >
          View Billing
        </Button>
      </div> */}
    </div>
  );
};

export default Home;
