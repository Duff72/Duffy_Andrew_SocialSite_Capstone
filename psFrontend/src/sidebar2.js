import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const Sidebar2 = ({ trendingTags }) => {
  return (
    <Box
      className="sidebar"
      mt={4}
      mb={3}
      p={3}
      borderRadius={2}
      textAlign="left"
      sx={{
        bgcolor: "#2D5D7B",
        color: "white",
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" mb={2}>
        Trending Tags
      </Typography>
      <Divider sx={{ bgcolor: "grey.700" }} />
      <List>
        {trendingTags.map((tag, index) => (
          <Box key={index} mt={2}>
            <ListItem disableGutters>
              <ListItemText
                primary={`#${tag}`}
                primaryTypographyProps={{ sx: { color: "#ADB5BD" } }}
              />
            </ListItem>
            {index < trendingTags.length - 1 && (
              <Divider sx={{ bgcolor: "grey.700" }} />
            )}
          </Box>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        href="messages.html"
      >
        Show More
      </Button>
    </Box>
  );
};

export default Sidebar2;
